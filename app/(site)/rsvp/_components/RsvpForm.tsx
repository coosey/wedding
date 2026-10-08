"use client";

import { useState } from "react";
import { Invitation } from "../../../../data/invitations";
import GuestRsvpCard from "./GuestRsvpCard";
import { RSVPResponse } from "./types";

type RsvpFormProps = {
  invitation: Invitation;
};

export default function RsvpForm({ invitation }: RsvpFormProps) {
  const [responses, setResponses] = useState<Record<string, RSVPResponse>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    // Make sure every invited guest has answered
    const missingResponses = invitation.guests.filter(
      (guest) => responses[guest.id]?.attending === undefined,
    );

    if (missingResponses.length > 0) {
      setError("Please let us know whether each guest will be attending.");
      return;
    }

    // Make sure attending guests have completed required questions
    const incompleteGuests = invitation.guests.filter((guest) => {
      const response = responses[guest.id];

      if (!response?.attending) {
        return false;
      }

      if (guest.type === "ADULT" && !response.meal) {
        return true;
      }

      // Add additional validation here.

      return false;
    });

    if (incompleteGuests.length > 0) {
      setError("Please complete the required questions.");
      return;
    }

    setError("");

    const submission = {
      invitationCode: invitation.code,
      submittedAt: new Date().toISOString(),
      responses: invitation.guests.map((guest) => ({
        guestId: guest.id,
        name: guest.name,
        type: guest.type,
        ...responses[guest.id],
        dietaryRestrictions:
          responses[guest.id]?.dietaryRestrictions?.trim() || undefined,
      })),
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        throw new Error("Failed to submit RSVP");
      }

      // Todo: replace this with a confirmation screen.
      console.log("RSVP submitted:", submission);
    } catch (error) {
      console.error(error);
      setError(
        "Something went wrong while submitting your RSVP. Please try again.",
      );
    }
  }

  /**
   * Updates the RSVP response for a specific guest.
   * @param guestId - The ID of the guest whose response is being updated.
   * @param changes - Partial changes to the guest's RSVP response.
   */
  function updateResponse(guestId: string, changes: Partial<RSVPResponse>) {
    setResponses((current) => ({
      ...current,
      [guestId]: {
        ...current[guestId],
        ...changes,
      },
    }));
  }

  return (
    <main className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Welcome, {invitation.nameOnInvite}
        </h1>
        <p className="text-sm leading-7 text-stone-700 sm:text-base">
          Please let us know if you&apos;ll be joining us.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {invitation.guests.map((guest) => (
          <GuestRsvpCard
            key={guest.id}
            guest={guest}
            response={responses[guest.id]}
            submitAttempted={submitAttempted}
            onChange={(changes) => updateResponse(guest.id, changes)}
          />
        ))}

        <button
          type="submit"
          className="w-full rounded-lg bg-[#8D9440] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#A3A969] sm:w-auto"
        >
          Submit RSVP
        </button>

        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </main>
  );
}
