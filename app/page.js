import Ui from "./ui";
import { GENERAL, CHILD, GROUND, OFFICIAL, DROP } from "../lib/data";

// ISR: regenerate at most once per hour. The Vercel cron (/api/refresh)
// forces this revalidation every hour even with zero traffic.
export const revalidate = 3600;

const USGS =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson" +
  "&latitude=10.6&longitude=-67.0&maxradiuskm=500&minmagnitude=3";

// Real seismic data from USGS, recomputed every refresh.
async function getQuakes() {
  const windowStart = new Date(Date.now() - 14 * 24 * 3600 * 1000)
    .toISOString()
    .slice(0, 10);
  const dayStart = new Date(Date.now() - 24 * 3600 * 1000)
    .toISOString()
    .slice(0, 19);

  try {
    const opt = { next: { revalidate: 3600 } };
    const [mainRes, listRes, dayRes] = await Promise.all([
      // True main shock: order by magnitude so it can never be paged out.
      fetch(`${USGS}&starttime=${windowStart}&orderby=magnitude&limit=1`, opt),
      // Recent events for the list.
      fetch(`${USGS}&starttime=${windowStart}&orderby=time&limit=10`, opt),
      // Aftershocks in the last 24h (real count).
      fetch(`${USGS}&starttime=${dayStart}&orderby=time&limit=200`, opt),
    ]);
    if (!mainRes.ok || !listRes.ok) return { quakes: [], error: true };

    const mainData = await mainRes.json();
    const listData = await listRes.json();
    const dayData = dayRes.ok ? await dayRes.json() : { features: [] };

    const mp = mainData.features[0]?.properties;
    const main = mp ? { mag: Math.round(mp.mag * 10) / 10, place: mp.place } : null;

    const quakes = (listData.features || []).map((f) => {
      const p = f.properties;
      return { mag: Math.round(p.mag * 10) / 10, place: p.place || "Venezuela", time: p.time };
    });

    // count aftershocks (exclude the main shock magnitude band)
    const aftershocks = (dayData.features || []).filter((f) => f.properties.mag < 6).length;

    return { main, quakes, aftershocks, error: false };
  } catch {
    return { quakes: [], error: true };
  }
}

// Re-check every linked source each refresh. Conservative: only a hard
// 404/410 marks a link "broken" (timeouts / bot-blocks / 5xx are treated
// as reachable so we never wrongly hide a real organization).
async function checkLinks() {
  const urls = [
    ...GENERAL.map((o) => o.u),
    ...CHILD.map((o) => o.u),
    ...GROUND.map((o) => o.u),
    ...OFFICIAL.map((o) => o.u),
    ...DROP.map((d) => d.src),
  ].filter((u) => /^https?:/.test(u));

  const entries = await Promise.all(
    [...new Set(urls)].map(async (u) => {
      try {
        const res = await fetch(u, {
          method: "GET",
          redirect: "follow",
          headers: { "user-agent": "Mozilla/5.0 (compatible; venezuela-ayuda-linkcheck)" },
          signal: AbortSignal.timeout(5000),
          next: { revalidate: 3600 },
        });
        const broken = res.status === 404 || res.status === 410;
        return [u, broken ? "broken" : "ok"];
      } catch {
        return [u, "unknown"];
      }
    })
  );
  return Object.fromEntries(entries);
}

export default async function Page() {
  const [seismic, health] = await Promise.all([getQuakes(), checkLinks()]);
  const updatedAt = Date.now();
  return <Ui seismic={seismic} health={health} updatedAt={updatedAt} />;
}
