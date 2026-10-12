"use client";

import { useActionState } from "react";
import { findInvitation } from "./actions";
import CodeLookupForm from "./_components/CodeLookupForm";
import FloralFrame from "./_components/FloralFrame";

export default function RsvpPage() {
  const [state, formAction, pending] = useActionState(findInvitation, {
    error: "",
  });

  return (
    <>
      <FloralFrame />
      {/* Positioned so it paints above the fixed frame. */}
      <div className="relative">
        <CodeLookupForm
          error={state.error}
          pending={pending}
          formAction={formAction}
        />
      </div>
    </>
  );
}
