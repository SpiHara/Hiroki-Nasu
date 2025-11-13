// app/api/note/route.ts
import { NextResponse } from "next/server";
import Parser, { type Item as RssItem } from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://note.com/aubergine2160/rss");
    const items = (feed.items ?? [])
      .map((item: RssItem) => {
        const title = item.title ?? "";
        const pubDate = item.pubDate ?? "";
        const content = item.contentSnippet ?? "";

        if (!item.link) {
          return null;
        }

        try {
          const url = new URL(item.link);
          const isHttps = url.protocol === "https:";
          const isAllowedHost =
            url.hostname === "note.com" || url.hostname.endsWith(".note.com");

          if (!isHttps || !isAllowedHost) {
            return null;
          }

          return {
            title,
            link: url.toString(),
            pubDate,
            content,
          };
        } catch (error) {
          console.warn("Skipping malformed note link:", item.link, error);
          return null;
        }
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    return NextResponse.json(items);
  } catch (error) {
    console.error("RSS fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed", details: String(error) },
      { status: 500 }
    );
  }
}
