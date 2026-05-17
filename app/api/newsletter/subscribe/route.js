import { headers } from "next/headers";

// Simple in-memory store (for MVP)
// TODO: Connect to database or Beehiiv API for production
const subscribers = new Set();

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Check if already subscribed
    if (subscribers.has(email)) {
      return Response.json(
        { message: "This email is already subscribed." },
        { status: 409 }
      );
    }

    // Add to subscribers
    subscribers.add(email);

    // TODO: Send confirmation email
    // TODO: Integrate with Beehiiv, Substack, or email service
    console.log(`[Newsletter] New subscriber: ${email}`);

    return Response.json(
      { message: "Successfully subscribed! Check your email to confirm." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter] Error:", error);
    return Response.json(
      { message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
