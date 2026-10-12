"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import invitations from "../../../data/invitations";

export type FindInvitationState = { error: string };

export async function findInvitation(
  _prev: FindInvitationState,
  formData: FormData,
): Promise<FindInvitationState> {
  const code = String(formData.get("code") ?? "")
    .trim()
    .toUpperCase();
  if (!invitations.some((i) => i.code === code)) {
    return { error: "We couldn't find an invitation with that code." };
  }
  redirect(`/rsvp/${code}`);
}

const submissionSchema = z.object({
  invitationCode: z.string().min(1),
  responses: z.array(
    z.object({
      guestId: z.string().min(1),
      attending: z.boolean(),
      meal: z.enum(["CHICKEN", "VEGETARIAN"]).optional(),
      dietaryRestrictions: z.string().trim().max(500).optional(),
    }),
  ),
});

export type SubmitRsvpResult = { error?: string };

export async function submitRsvp(input: unknown): Promise<SubmitRsvpResult> {
  const parsed = submissionSchema.safeParse(input);
  if (!parsed.success) {
    return { error: "Invalid RSVP submission." };
  }

  const { invitationCode, responses } = parsed.data;
  const invitation = invitations.find(
    (i) => i.code === invitationCode.trim().toUpperCase(),
  );
  if (!invitation) {
    return { error: "We couldn't find your invitation." };
  }

  const responsesById = new Map(responses.map((r) => [r.guestId, r]));
  if (
    responsesById.size !== responses.length ||
    responses.length !== invitation.guests.length ||
    invitation.guests.some((guest) => !responsesById.has(guest.id))
  ) {
    return { error: "Invalid RSVP submission." };
  }

  const record = {
    invitationCode: invitation.code,
    submittedAt: new Date().toISOString(),
    responses: invitation.guests.map((guest) => {
      const response = responsesById.get(guest.id)!;
      return {
        guestId: guest.id,
        name: guest.name,
        type: guest.type,
        attending: response.attending,
        meal: response.attending ? response.meal : undefined,
        dietaryRestrictions: response.attending
          ? response.dietaryRestrictions || undefined
          : undefined,
      };
    }),
  };

  const missingMeal = record.responses.some(
    (r) => r.attending && r.type === "ADULT" && !r.meal,
  );
  if (missingMeal) {
    return { error: "Please complete the required questions." };
  }

  // TODO: persist (e.g. Google Sheets).
  console.log("RSVP received:", record);

  return {};
}
