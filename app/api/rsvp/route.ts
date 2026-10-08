import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("RSVP received:", data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("RSVP submission error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Invalid RSVP submission",
      },
      {
        status: 400,
      },
    );
  }
}
