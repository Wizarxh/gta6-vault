import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PUBLISH_TOKEN = process.env.PUBLISH_TOKEN || "test-token-gta6-vault-2026";
const DATA_PATH = path.join(process.cwd(), "data", "published.json");

function readPublished() {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  } catch {
    return [];
  }
}

function writePublished(articles) {
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(articles, null, 2));
}

export async function POST(request) {
  // Auth check
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "").trim();

  if (token !== PUBLISH_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { slug, title, description, tag, body: articleBody, publishedAt, heroImage } = body;

  // Validate required fields
  if (!slug || !title || !articleBody) {
    return NextResponse.json(
      { error: "Missing required fields: slug, title, body" },
      { status: 400 }
    );
  }

  const validTags = ["VERIFIED", "RUMOR", "DEBUNKED"];
  if (tag && !validTags.includes(tag)) {
    return NextResponse.json(
      { error: `Invalid tag. Must be one of: ${validTags.join(", ")}` },
      { status: 400 }
    );
  }

  const published = readPublished();

  // Upsert by slug
  const existingIdx = published.findIndex((a) => a.slug === slug);
  const article = {
    slug,
    title,
    description: description || "",
    tag: tag || "VERIFIED",
    body: articleBody,
    publishedAt: publishedAt || new Date().toISOString(),
    heroImage: heroImage || null,
    createdAt: existingIdx >= 0 ? published[existingIdx].createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (existingIdx >= 0) {
    published[existingIdx] = article;
  } else {
    published.push(article);
  }

  writePublished(published);

  return NextResponse.json({ ok: true, slug, action: existingIdx >= 0 ? "updated" : "created" });
}
