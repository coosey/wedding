import Link from "next/link";

export function Rsvp() {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
        PLEASE RSVP BY APRIL 14, 2027
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-700 sm:text-base">
        We are so excited to celebrate our wedding with you! Please RSVP by{" "}
        <b>April 14, 2027</b> to let us know if you will be able to attend. Your
        timely response will help us finalize the guest list and make necessary
        arrangements for the big day. We can&apos;t wait to share this special
        moment with you!
      </p>
      <div className="mt-8 flex flex-wrap justify-end gap-3">
        <Link
          href="/rsvp"
          className="rounded-full bg-[#F4C7D7] px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-[#DFA3B8]"
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
