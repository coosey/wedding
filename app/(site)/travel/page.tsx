import { HOTELS } from "../../../data/travel";

export default function TravelPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="mx-auto max-w-3xl space-y-4 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          TRAVEL
        </h1>
        <p className="text-sm leading-7 text-stone-700 sm:text-base">
          We`&apos;re so excited to celebrate with you in Fallbrook. To make
          planning easier, we&apos;ve listed nearby hotel options for your stay.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {HOTELS.map((hotel) => (
          <article
            key={hotel.name}
            className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6"
          >
            <h2 className="text-lg font-semibold text-stone-900">
              {hotel.name}
            </h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
              <p>{hotel.address}</p>
              <p>
                <span className="font-medium text-stone-900">Phone: </span>
                <a
                  href={`tel:${hotel.phone}`}
                  className="underline decoration-stone-300 underline-offset-2 transition hover:text-stone-900"
                >
                  {hotel.phone}
                </a>
              </p>
              <a
                href={hotel.website}
                target="_blank"
                rel="noreferrer"
                className="inline-block font-medium text-[#8D9440] underline decoration-[#8D9440]/60 underline-offset-2 transition hover:text-[#6f7632]"
              >
                View Website
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
