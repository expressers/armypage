// GET /api/downloads · download counts per platform and version, read from the
// public army-releases repository (GitHub counts every installer download).
// Cached at the edge for 5 minutes to stay well within GitHub's API rate limits.

const REPO = "expressers/army-releases";

interface Asset {
  name: string;
  download_count: number;
}

interface Release {
  tag_name: string;
  published_at: string;
  assets: Asset[];
}

const platformOf = (name: string) => (name.endsWith(".dmg") ? "mac" : name.endsWith(".exe") ? "windows" : null);

export async function GET(): Promise<Response> {
  const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, {
    headers: { Accept: "application/vnd.github+json", "User-Agent": "army.expressers.ao" },
  });
  if (!res.ok) {
    return Response.json({ error: "counts temporarily unavailable" }, { status: 502 });
  }
  const releases = (await res.json()) as Release[];

  const total = { mac: 0, windows: 0, all: 0 };
  const versions = releases.map((r) => {
    const v = { version: r.tag_name, published: r.published_at, mac: 0, windows: 0, all: 0 };
    for (const a of r.assets) {
      const p = platformOf(a.name);
      if (!p) continue;
      v[p] += a.download_count;
      v.all += a.download_count;
    }
    total.mac += v.mac;
    total.windows += v.windows;
    total.all += v.all;
    return v;
  });

  return Response.json(
    { total, versions, updated: new Date().toISOString() },
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
  );
}
