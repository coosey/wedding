import Link from "next/link";
import { notFound } from "next/navigation";
import invitations from "../../../../../data/invitations";
import { RSVPPageProps } from "../../_components/types";

export default async function RsvpConfirmationPage({ params }: RSVPPageProps) {
  const { code } = await params;
  const normalizedCode = decodeURIComponent(code).trim().toUpperCase();

  const invitation = invitations.find(
    (invitation) => invitation.code === normalizedCode,
  );

  if (!invitation) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl space-y-8 text-center">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Thank you, {invitation.nameOnInvite}!
        </h1>
        <p className="text-sm leading-7 text-stone-700 sm:text-base">
          We&apos;ve received your RSVP. Thank you for letting us know.
        </p>
      </header>

      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/details"
          className="rounded-lg bg-[#8D9440] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#A3A969]"
        >
          View event details
        </Link>
        <Link
          href="/travel"
          className="rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-[#8D9440]"
        >
          Travel &amp; accommodations
        </Link>
      </div>

      <p className="text-sm text-stone-600">
        Need to make a change?{" "}
        <Link
          href={`/rsvp/${invitation.code}`}
          className="font-medium text-stone-900 underline underline-offset-4 hover:text-[#8D9440]"
        >
          Update your RSVP
        </Link>
      </p>
    </main>
  );
}
