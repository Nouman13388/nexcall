// TODO: integrate an email provider here (e.g. Resend, SendGrid, Nodemailer)
// and forward the parsed body to the configured recipient address.

export async function POST(request: Request) {
  const body = await request.json();

  console.log("[Contact Form]", body);

  return Response.json({ success: true, message: "Message received" });
}
