import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

if (!resend) {
  console.warn(
    "[contact] RESEND_API_KEY is not set — emails will not be sent in this environment.",
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, service, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };

  const subject = `New Contact Form Submission — ${service || "General Inquiry"}`;

  const html = `
<table style="font-family:sans-serif;font-size:15px;color:#1a1a1a;max-width:600px;width:100%">
  <tr><td style="padding:24px 0 8px">
    <h2 style="margin:0;font-size:20px">New Contact Form Submission</h2>
    <p style="margin:4px 0 0;color:#666;font-size:13px">${new Date().toUTCString()}</p>
  </td></tr>
  <tr><td style="padding:16px 0;border-top:1px solid #e5e5e5">
    <table style="width:100%;border-collapse:collapse">
      <tr>
        <td style="padding:8px 16px 8px 0;color:#555;font-size:13px;white-space:nowrap;vertical-align:top">Name</td>
        <td style="padding:8px 0;font-weight:600">${name ?? "—"}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:8px 16px 8px 0;color:#555;font-size:13px;white-space:nowrap;vertical-align:top">Email</td>
        <td style="padding:8px 0"><a href="mailto:${email}" style="color:#1B2150">${email ?? "—"}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 16px 8px 0;color:#555;font-size:13px;white-space:nowrap;vertical-align:top">Phone</td>
        <td style="padding:8px 0">${phone || "—"}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:8px 16px 8px 0;color:#555;font-size:13px;white-space:nowrap;vertical-align:top">Service</td>
        <td style="padding:8px 0">${service || "—"}</td>
      </tr>
      <tr>
        <td style="padding:8px 16px 8px 0;color:#555;font-size:13px;white-space:nowrap;vertical-align:top;width:100px">Message</td>
        <td style="padding:8px 0;white-space:pre-wrap">${message ?? "—"}</td>
      </tr>
    </table>
  </td></tr>
  <tr><td style="padding:16px 0 0;border-top:1px solid #e5e5e5;color:#888;font-size:12px">
    Sent via nexcalltech.com contact form
  </td></tr>
</table>
`.trim();

  if (!resend) {
    return Response.json({ success: true });
  }

  const { error } = await resend.emails.send({
    from: "Contact Form <noreply@nexcalltech.com>",
    to: "HR@nexcalltech.com",
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return Response.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}
