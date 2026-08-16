import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      <section className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 lg:p-10">
        <p className="text-xs tracking-[0.25em] text-stone-600 uppercase">
          June 2027
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
          Welcome to our wedding weekend
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-700 sm:text-base">
          Everything you need is here: schedule details, RSVP, registry, and
          travel tips for guests.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/rsvp"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            RSVP Now
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
          >
            View FAQ
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-stone-900">Ceremony</h2>
          <p className="mt-2 text-sm leading-6 text-stone-700">
            Saturday at 4:00 PM. Please arrive 20 minutes early for seating.
          </p>
        </article>
        <article className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-stone-900">Reception</h2>
          <p className="mt-2 text-sm leading-6 text-stone-700">
            Dinner, toasts, and dancing immediately after the ceremony.
          </p>
        </article>
        <article className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 sm:col-span-2 lg:col-span-1">
          <h2 className="text-lg font-semibold text-stone-900">Planning</h2>
          <p className="mt-2 text-sm leading-6 text-stone-700">
            Use the nav above to check travel notes, registry, and RSVP
            deadline.
          </p>
        </article>
      </section>
    </div>
  );
}
