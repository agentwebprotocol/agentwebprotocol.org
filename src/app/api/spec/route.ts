import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://raw.githubusercontent.com/agentwebprotocol/spec/main/SPEC.md",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch specification" },
      { status: 502 }
    );
  }

  const spec = await res.text();

  return new NextResponse(spec, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
