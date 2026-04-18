import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  projectType: string;
  buildingType?: string;
  squareFeet?: string;
  levels?: string;
  location: string;
  timeline?: string;
  message?: string;
  source?: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
<!DOCTYPE html>
<html>
<head><style>
  body{font-family:Arial,sans-serif;color:#222;background:#f4f6f9;margin:0;padding:0}
  .wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)}
  .header{background:#1e4d9b;color:#fff;padding:28px 32px}
  .header h1{margin:0;font-size:20px;font-weight:700}
  .header p{margin:6px 0 0;opacity:0.75;font-size:14px}
  .body{padding:32px}
  .field{margin-bottom:20px}
  .label{font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6d84a0;margin-bottom:4px}
  .value{font-size:15px;color:#111720;font-weight:500}
  .divider{height:1px;background:#e2e7ef;margin:24px 0}
  .footer{background:#f4f6f9;padding:20px 32px;font-size:12px;color:#9aaac0;text-align:center}
  .badge{display:inline-block;background:#eef2f9;border:1px solid #a2b9e1;color:#163b7a;font-size:12px;font-weight:600;padding:4px 12px;border-radius:100px}
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <h1>New Quote Request</h1>
    <p>National As Built Inc. — ${data.source || "Website"}</p>
  </div>
  <div class="body">
    <div class="field"><div class="label">Name</div><div class="value">${data.name}</div></div>
    ${data.company ? `<div class="field"><div class="label">Company</div><div class="value">${data.company}</div></div>` : ""}
    <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${data.email}">${data.email}</a></div></div>
    ${data.phone ? `<div class="field"><div class="label">Phone</div><div class="value"><a href="tel:${data.phone}">${data.phone}</a></div></div>` : ""}
    <div class="divider"></div>
    <div class="field"><div class="label">Project Type</div><div class="value"><span class="badge">${data.projectType}</span></div></div>
    ${data.buildingType ? `<div class="field"><div class="label">Building Type</div><div class="value">${data.buildingType}</div></div>` : ""}
    <div class="field"><div class="label">Location</div><div class="value">${data.location}</div></div>
    ${data.squareFeet ? `<div class="field"><div class="label">Est. Square Feet</div><div class="value">${data.squareFeet}</div></div>` : ""}
    ${data.levels ? `<div class="field"><div class="label">Number of Levels</div><div class="value">${data.levels}</div></div>` : ""}
    ${data.timeline ? `<div class="field"><div class="label">Timeline</div><div class="value">${data.timeline}</div></div>` : ""}
    ${data.message ? `<div class="divider"></div><div class="field"><div class="label">Message</div><div class="value" style="white-space:pre-wrap">${data.message}</div></div>` : ""}
  </div>
  <div class="footer">National As Built Inc. &mdash; 972-342-7070 &mdash; info@nationalasbuilt.com &mdash; Plano, TX</div>
</div>
</body>
</html>`;

  await transporter.sendMail({
    from: `"National As Built Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || "info@nationalasbuilt.com",
    replyTo: data.email,
    subject: `New Quote Request: ${data.projectType} — ${data.location}`,
    html,
    text: `New quote request from ${data.name} (${data.email})\n\nProject: ${data.projectType}\nLocation: ${data.location}\nSq Ft: ${data.squareFeet || "N/A"}\nTimeline: ${data.timeline || "N/A"}\n\n${data.message || ""}`,
  });
}
