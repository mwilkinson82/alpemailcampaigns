import { getResend } from "./client";
import type { ContactProperties } from "@/lib/campaigns/types";

type UpsertContactInput = {
  email: string;
  firstName?: string;
  lastName?: string;
  properties?: ContactProperties;
  segmentIds?: string[];
};

export async function upsertContact(input: UpsertContactInput) {
  const resend = getResend();
  const segmentIds = input.segmentIds ?? [];

  const createResult = await resend.contacts.create({
    email: input.email,
    firstName: input.firstName || undefined,
    lastName: input.lastName || undefined,
    unsubscribed: false,
    properties: input.properties,
    segments: segmentIds.map((id) => ({ id })),
  });

  if (!createResult.error) {
    return createResult.data;
  }

  const updateResult = await resend.contacts.update({
    email: input.email,
    unsubscribed: false,
    properties: input.properties,
  });

  if (updateResult.error) {
    throw updateResult.error;
  }

  await Promise.all(
    segmentIds.map((segmentId) =>
      resend.contacts.segments
        .add({
          email: input.email,
          segmentId,
        })
        .catch(() => null),
    ),
  );

  return updateResult.data;
}

