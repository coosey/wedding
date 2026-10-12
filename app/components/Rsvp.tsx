import Link from "next/link";

export function Rsvp() {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-4 py-16 text-center sm:px-10 sm:py-24 lg:py-28">
      <h2 className="mx-auto max-w-3xl font-display text-2xl leading-snug font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
        We hope you&apos;ll join us on this special day.
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-stone-700 sm:mt-8 sm:text-lg sm:leading-8">
        Please RSVP by <b>April 14, 2027</b> to let us know if you will be able
        to attend. Your timely response will help us finalize the guest list and
        make necessary arrangements for the big day. We can&apos;t wait to share
        this special moment with you!
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
        <Link
          href="/rsvp"
          className="rounded-full bg-[#DFA3B8] px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-[#EEE2DD]"
        >
          RSVP
        </Link>
        <Link
          href="/registry"
          className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
        >
          REGISTRY
        </Link>
      </div>
    </section>
  );
}
