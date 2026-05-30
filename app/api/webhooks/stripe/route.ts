import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: string;
  try {
    body = await req.text();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Stripe webhook event processing would go here
  // Keeping minimal until Stripe integration is wired
  void body;

  return NextResponse.json({ received: true });
}
