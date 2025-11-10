import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    // Log the subscription data (replace with actual newsletter service integration)
    console.log("Newsletter subscription:", {
      email,
      name,
      timestamp: new Date().toISOString(),
    });

    // Here you would typically integrate with a newsletter service like:
    // - Mailchimp
    // - ConvertKit
    // - Klaviyo
    // - Newsletter API, etc.

    // For now, we just return success
    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}
