import { NextResponse } from "next/server";
import { verifyResendWebhook } from "@/lib/resend/webhooks";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.text();

  try {
    const event = verifyResendWebhook(payload, request.headers);
    console.info("resend.webhook", event);

    return NextResponse.json({
      ok: true,
    });
  } catch {
    return new NextResponse("Invalid webhook", { status: 400 });
  }
}

