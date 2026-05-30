import { NextRequest, NextResponse } from "next/server";
import { emailCaptureSchema } from "@/lib/validations";
import { createServerClient } from "@/lib/supabase-server";

const RATE_LIMIT_MAP = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 60_000;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);
  if (!entry || now > entry.reset) {
    RATE_LIMIT_MAP.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = emailCaptureSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const { honeypot, email } = parsed.data;
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  try {
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      const supabase = createServerClient();
      await supabase
        .from("email_subscribers")
        .upsert([{ email, subscribed_at: new Date().toISOString() }], {
          onConflict: "email",
        });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
