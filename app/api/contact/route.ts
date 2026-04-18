import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.honey) {
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!body.name || !body.email || !body.projectType || !body.location) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await sendContactEmail({
      name: String(body.name).slice(0, 200),
      company: body.company ? String(body.company).slice(0, 200) : undefined,
      email: String(body.email).slice(0, 200),
      phone: body.phone ? String(body.phone).slice(0, 50) : undefined,
      projectType: String(body.projectType).slice(0, 200),
      buildingType: body.buildingType ? String(body.buildingType).slice(0, 200) : undefined,
      squareFeet: body.squareFeet ? String(body.squareFeet).slice(0, 50) : undefined,
      levels: body.levels ? String(body.levels).slice(0, 20) : undefined,
      location: String(body.location).slice(0, 300),
      timeline: body.timeline ? String(body.timeline).slice(0, 100) : undefined,
      message: body.message ? String(body.message).slice(0, 2000) : undefined,
      source: body.source ? String(body.source).slice(0, 100) : "website",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please call us at 972-342-7070." },
      { status: 500 }
    );
  }
}
