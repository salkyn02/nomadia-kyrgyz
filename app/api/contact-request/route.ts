import db from "@/db";
import { contactRequests } from "@/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = ["name", "email", "phone", "message"];

    for (const field of requiredFields) {
      if (!body[field]?.trim()) {
        return NextResponse.json(
          { message: `${field} is required` },
          { status: 400 },
        );
      }
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Enter correct email" },
        { status: 400 },
      );
    }

    const phoneRgx = /^\+?[0-9\s\-()]{7,15}$/;

    if (!phoneRgx.test(body.phone)) {
      return NextResponse.json({ message: "Enter number" }, { status: 400 });
    }

    await db.insert(contactRequests).values({
      name: body.name,
      email: body.email,
      phone: body.phone,
      places: body.places,
      message: body.message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
