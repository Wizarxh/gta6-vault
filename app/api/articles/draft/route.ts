import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  const expectedToken = process.env.PUBLISH_TOKEN;
  if (!token || token !== expectedToken) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { slug, title, description, tag, heroImage, body: content, publishedAt } = body;

    if (!slug || !title || !description || !tag || !heroImage || !content || !publishedAt) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!["VERIFIED", "RUMOR", "DEBUNKED"].includes(tag)) {
      return NextResponse.json(
        { error: "Invalid tag value" },
        { status: 400 }
      );
    }

    const contentDir = join(process.cwd(), "app/content/articles/draft");
    mkdirSync(contentDir, { recursive: true });

    const filePath = join(contentDir, `${slug}.mdx`);
    const mdxContent = `---
slug: ${slug}
title: ${title}
description: ${description}
status: ${tag}
heroImage: ${heroImage}
publishedAt: ${publishedAt}
isDraft: true
---

${content}
`;

    writeFileSync(filePath, mdxContent);

    const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://gta6-vault.com"}/news/draft/${slug}`;

    return NextResponse.json(
      { slug, url },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving draft:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
