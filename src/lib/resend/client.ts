import { Resend } from "resend";
import { requireEnv } from "@/lib/env";

let resend: Resend | null = null;

export function getResend() {
  if (!resend) {
    resend = new Resend(requireEnv("RESEND_API_KEY"));
  }

  return resend;
}

