"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";
import invitations from "../../../data/invitations";
import CodeLookupForm from "./_components/CodeLookupForm";

export default function RsvpPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function findInvitation() {
    const normalizedCode = code.trim().toUpperCase();

    const found = invitations.find(
      (invitation) => invitation.code === normalizedCode,
    );

    if (!found) {
      setError("We couldn't find an invitation with that code.");
      return;
    }

    setError("");
    router.push(`/rsvp/${normalizedCode}`);
  }

  return (
    <CodeLookupForm
      code={code}
      error={error}
      onCodeChange={setCode}
      onSubmit={findInvitation}
    />
  );
}
