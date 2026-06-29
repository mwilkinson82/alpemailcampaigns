import { Resend } from "resend";
import { campaignEventDefinitions } from "../src/lib/resend/register-events";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is required");
}

const resend = new Resend(apiKey);

for (const eventDefinition of campaignEventDefinitions) {
  const { data, error } = await resend.events.create(eventDefinition);

  if (error) {
    console.error(`Failed to create ${eventDefinition.name}`, error);
    process.exitCode = 1;
  } else {
    console.log(`Created ${eventDefinition.name}`, data);
  }
}

