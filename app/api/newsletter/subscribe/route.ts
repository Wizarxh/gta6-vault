import { NextRequest, NextResponse } from "next/server";

// Simple in-memory storage (use database in production)
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store email (in production, save to database)
    subscribers.add(email);
    console.log(`[Newsletter] New subscriber: ${email} (source: ${source})`);

    // TODO: Integrate with email service (Beehiiv, Substack, ConvertKit, etc.)
    // await emailService.addSubscriber(email);

    return NextResponse.json(
      { message: "Successfully subscribed", email },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET for checking subscriber count (admin only)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  
  // Simple auth check (use proper auth in production)
  if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    subscriberCount: subscribers.size,
    subscribers: Array.from(subscribers),
  });
}
