import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { Resend } from "resend";

async function createHubSpotContact(payload: ReturnType<typeof leadSchema.parse>) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return { skipped: true };

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      properties: {
        email: payload.email,
        firstname: payload.name.split(" ")[0] || payload.name,
        lastname: payload.name.split(" ").slice(1).join(" "),
        phone: payload.phone,
        company: payload.company || "",
        city: payload.city || "",
        website: "nationalasbuilt.com",
        lifecyclestage: "lead"
      }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HubSpot contact error: ${text}`);
  }

  return response.json();
}

async function createHubSpotNote(contactId: string, payload: ReturnType<typeof leadSchema.parse>) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return { skipped: true };

  const body = [
    `Project type: ${payload.projectType}`,
    `Square feet: ${payload.squareFeet}`,
    `Timeline: ${payload.timeline}`,
    `Source: ${payload.source || "-"}`,
    `Page: ${payload.page || "-"}`,
    `Message: ${payload.message || "-"}`
  ].join("\n");

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      properties: {
        hs_note_body: body,
        hs_timestamp: new Date().toISOString()
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: 202
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HubSpot note error: ${text}`);
  }

  return response.json();
}

async function sendToHubSpot(payload: ReturnType<typeof leadSchema.parse>) {
  const contact = await createHubSpotContact(payload);
  const contactId = contact?.id;
  if (contactId) await createHubSpotNote(contactId, payload);
  return contact;
}

async function sendNotificationEmail(payload: ReturnType<typeof leadSchema.parse>) {
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFICATION_TO;
  const from = process.env.LEAD_FROM_EMAIL || "National As Built <onboarding@resend.dev>";
  if (!resendKey || !notifyTo) return { skipped: true };

  const resend = new Resend(resendKey);
  return resend.emails.send({
    from,
    to: [notifyTo],
    replyTo: payload.email,
    subject: `[Lead] ${payload.projectType} • ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Company: ${payload.company || "-"}`,
      `Project Type: ${payload.projectType}`,
      `Square Feet: ${payload.squareFeet}`,
      `City: ${payload.city || "-"}`,
      `Timeline: ${payload.timeline}`,
      `Source: ${payload.source || "-"}`,
      `Page: ${payload.page || "-"}`,
      `Message: ${payload.message || "-"}`
    ].join("\n")
  });
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = leadSchema.parse(json);

    if (payload.honey) return NextResponse.json({ ok: true }, { status: 200 });

    if (payload.startedAt) {
      const elapsed = Date.now() - new Date(payload.startedAt).getTime();
      if (!Number.isNaN(elapsed) && elapsed < 2000) {
        return NextResponse.json({ error: "Form submitted too quickly." }, { status: 400 });
      }
    }

    const [hubspot, email] = await Promise.allSettled([sendToHubSpot(payload), sendNotificationEmail(payload)]);

    return NextResponse.json({ ok: true, integrations: { hubspot: hubspot.status, email: email.status } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
  }
}
