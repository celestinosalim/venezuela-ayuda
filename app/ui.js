"use client";

import { useEffect, useState } from "react";
import { GENERAL, CHILD, GROUND, FAMILY, DROP, OFFICIAL, VERIFY, T } from "../lib/data";
import GoogleTranslate from "./GoogleTranslate";

function pad(n) { return n < 10 ? "0" + n : "" + n; }
function fmtQuake(ts) {
  const d = new Date(ts);
  return `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())} UTC`;
}
function magClass(m) { return m >= 6 ? "l" : m >= 4 ? "m" : "s"; }

// Drop-off region grouping (edit when adding new locations).
const DROP_REGION = {
  "GEM Headquarters": "Doral",
  "El Arepazo": "Doral",
  "Doral Legacy Park": "Doral",
  "Supervisor of Elections": "Doral",
  "Caracas Bakery — Doral": "Doral",
  "Carlow Park": "Sweetwater",
  "Food For The Poor": "Broward",
  "All Star Training Center": "Broward",
  "Ciudad de Miramar": "Broward",
  "Work Color Signs": "Orlando",
  "Sandy Perrone Park": "Tampa",
  "Caracas Bakery — Biscayne": "Miami",
  "Nu Stadium": "Miami",
  "Miami-Dade Tax Collector": "Miami",
  "Fundación Juntos": "Bogotá",
};
const REGION_ORDER = ["Doral", "Sweetwater", "Broward", "Orlando", "Tampa", "Miami", "Bogotá"];
function dropRegion(o) {
  const k = Object.keys(DROP_REGION).find((k) => o.n.startsWith(k));
  return k ? DROP_REGION[k] : "Otras";
}

export default function Ui({ seismic, health, updatedAt }) {
  const [lang, setLang] = useState("es");
  const [since, setSince] = useState(null);
  const t = T[lang];

  useEffect(() => {
    function tick() {
      const mins = Math.max(0, Math.round((Date.now() - updatedAt) / 60000));
      let s;
      if (mins < 1) s = t.justNow;
      else {
        const core = mins < 60 ? `${mins} ${t.minutes}` : `${Math.floor(mins / 60)} ${t.hours}`;
        s = t.ago ? `${t.ago} ${core}` : core;
      }
      setSince(s);
    }
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [updatedAt, lang, t]);

  // Sticky nav: show after hero leaves view + scrollspy active section.
  useEffect(() => {
    const nav = document.getElementById("topnav");
    const header = document.querySelector("header");
    if (!nav || !header) return;
    const showObs = new IntersectionObserver(
      ([e]) => nav.classList.toggle("visible", !e.isIntersecting),
      { threshold: 0 }
    );
    showObs.observe(header);
    const ids = ["sismos", "donar", "ninos", "terreno", "familia", "entregar", "oficial"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    let current = "";
    const spyObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) current = e.target.id; });
        nav.querySelectorAll("a[data-s]").forEach((a) =>
          a.classList.toggle("active", a.dataset.s === current)
        );
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );
    sections.forEach((s) => spyObs.observe(s));
    return () => { showObs.disconnect(); spyObs.disconnect(); };
  }, []);

  const brokenIn = (items, field = "u") =>
    items.filter((o) => health && health[o[field]] === "broken").map((o) => o.n);

  function Stamp({ items, field = "u" }) {
    const broken = brokenIn(items, field);
    if (broken.length)
      return <div className="vstamp warn">⚠ {t.broken} {broken.join(", ")}</div>;
    return (
      <div className="vstamp ok"><span className="live" />✓ {t.verified}{since ? ` · ${since}` : ""}</div>
    );
  }

  function Card({ o }) {
    const isUrl = /^https?:/.test(o.u);
    return (
      <a className="card" href={o.u} target="_blank" rel="noopener noreferrer">
        <div className="top">
          <h3>{o.n}</h3>
          <span className={"badge" + (o.kid ? " kid" : "")}>{o.t}</span>
        </div>
        <div className="desc">{lang === "en" ? o.en : o.es}</div>
        {isUrl && (
          <div className="url">
            {o.u.replace(/^https?:\/\//, "").replace(/\/$/, "").slice(0, 40)}
            {o.u.length > 48 ? "…" : ""}
          </div>
        )}
      </a>
    );
  }

  function DropCard({ o }) {
    return (
      <div className="card">
        <div className="top">
          <h3>{o.n}</h3>
          <span className="badge">{o.t}</span>
        </div>
        <div className="desc">{lang === "en" ? o.en : o.es}</div>
        <div className="droplinks">
          <a href={o.u} target="_blank" rel="noopener noreferrer">📍 {lang === "en" ? "Map" : "Mapa"}</a>
          <a href={o.src} target="_blank" rel="noopener noreferrer">↗ {t.source}</a>
        </div>
      </div>
    );
  }

  const Grid = ({ items }) => (
    <div className="grid">{items.map((o, i) => <Card key={i} o={o} />)}</div>
  );

  const sec = (id, pair, items, stamp) => (
    <section>
      <h2 id={id}>{pair[0]}</h2>
      <div className="sub">{pair[1]}</div>
      {stamp && <Stamp items={items} />}
      <Grid items={items} />
    </section>
  );

  return (
    <>
      {/* Sticky scrollspy nav — hidden until hero scrolls out */}
      <nav id="topnav" className="topnav" aria-label="Secciones">
        <div className="topnav-inner">
          {t.router.map((r, i) => (
            <a key={i} href={r[2]} data-s={r[2].slice(1)}>
              <span aria-hidden="true">{r[0]}</span> {r[1]}
            </a>
          ))}
        </div>
      </nav>

      <header>
        <div className="wrap">
          <div className="lang">
            <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")}>ES</button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <GoogleTranslate />
          </div>
          <div className="flag">
            <span style={{ background: "var(--amarillo)" }} />
            <span style={{ background: "var(--azul)" }} />
            <span style={{ background: "var(--rojo)" }} />
          </div>
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
          <div className="pills">{t.pills.map((p, i) => <span key={i}>{p}</span>)}</div>
          <nav className="router">
            {t.router.map((r, i) => (
              <a key={i} href={r[2]}><span className="e">{r[0]}</span>{r[1]}</a>
            ))}
          </nav>
        </div>
      </header>

      <div className="wrap">
        {/* SEISMIC (live USGS, refreshed hourly) */}
        <section>
          <h2 id="sismos">{t.quakeTitle}</h2>
          <div className="sub">{t.quakeSub}</div>
          <div className="quakebox">
            {seismic.error || !seismic.quakes.length ? (
              <div className="stamp">{t.quakeNone}</div>
            ) : (
              <>
                <div className="qstat">
                  <div><b>M{seismic.main ? seismic.main.mag : "—"}</b><span>{t.quakeMain}</span></div>
                  <div><b>{seismic.aftershocks}</b><span>{t.quakeAfter}</span></div>
                </div>
                <ul className="qlist">
                  {seismic.quakes.slice(0, 8).map((q, i) => (
                    <li key={i}>
                      <span className={"mag " + magClass(q.mag)}>{q.mag.toFixed(1)}</span>
                      <span className="qplace">{q.place}</span>
                      <span className="qtime">{fmtQuake(q.time)}</span>
                    </li>
                  ))}
                </ul>
                <div className="stamp"><span className="live" />{t.updated}{since ? ` · ${since}` : ""}</div>
              </>
            )}
          </div>
          {t.quakeContext && <p className="qcontext">{t.quakeContext}</p>}
        </section>

        {/* TRUST / ANTI-SCAM (education) */}
        <section className="trust" style={{ marginTop: 28 }}>
          <h2 id="confiables">{t.trustTitle}</h2>
          <p className="lead">{t.trustLead}</p>
          <ul>{t.trustRules.map((r, i) => <li key={i}>{r}</li>)}</ul>
          <div className="verify">
            {VERIFY.map((v, i) => (
              <a key={i} href={v.u} target="_blank" rel="noopener noreferrer">{v.n} ↗</a>
            ))}
          </div>
        </section>

        {sec("donar", t.donar, GENERAL, true)}
        {sec("ninos", t.ninos, CHILD, true)}
        {sec("terreno", t.inside, GROUND, true)}
        {sec("familia", t.family, FAMILY, false)}

        {/* DROP-OFF — grouped by region */}
        <section>
          <h2 id="entregar">{t.entregar[0]}</h2>
          <div className="sub">{t.entregar[1]}</div>
          <Stamp items={DROP} field="src" />
          {REGION_ORDER.map((region) => {
            const items = DROP.filter((o) => dropRegion(o) === region);
            if (!items.length) return null;
            return (
              <div key={region} className="drop-region">
                <div className="drop-region-hd">{region}</div>
                <div className="grid">{items.map((o, i) => <DropCard key={i} o={o} />)}</div>
              </div>
            );
          })}
          <a className="more" href={t.entregarMoreUrl} target="_blank" rel="noopener noreferrer">{t.entregarMore}</a>
        </section>

        {sec("oficial", t.oficial, OFFICIAL, true)}

        <footer>
          <div className="sources">{t.foot}</div>
          <div className="credit">{t.credit}</div>
        </footer>
      </div>
    </>
  );
}
