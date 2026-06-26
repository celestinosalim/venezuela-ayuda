import { revalidatePath } from "next/cache";

// Hit hourly by Vercel Cron (see vercel.json). Forces the home page to
// regenerate so the USGS seismic feed and "updated" stamp stay fresh
// even with no visitor traffic.
export const dynamic = "force-dynamic";

export async function GET(request) {
  // If CRON_SECRET is set in the project env, require it (Vercel Cron sends it).
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  revalidatePath("/");

  return Response.json({
    ok: true,
    revalidated: "/",
    at: new Date().toISOString(),
  });
}
