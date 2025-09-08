// app/api/note/route.ts
import { NextResponse } from "next/server";
import Parser, { type Item as RssItem } from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://note.com/aubergine2160/rss");
    const items = (feed.items ?? []).map((item: RssItem) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      content: item.contentSnippet ?? "",
    }));
    return NextResponse.json(items);
  } catch (error) {
    console.error("RSS fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed", details: String(error) },
      { status: 500 }
    );
  }
}

