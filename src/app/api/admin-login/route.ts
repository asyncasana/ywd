import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Admin login API route
 * POST to this endpoint with username and password to authenticate
 * Returns a cookie that bypasses the maintenance mode gate
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
    const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS;

    if (
      BASIC_AUTH_USER &&
      BASIC_AUTH_PASS &&
      username === BASIC_AUTH_USER &&
      password === BASIC_AUTH_PASS
    ) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("ywd_auth", "1", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
