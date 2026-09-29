import Image from "next/image";

import { Carousel, CountdownTimer, Rsvp } from "../components";

// TODO: UPDATE LATER - MOCK IMAGES
const IMAGES = [
  { src: "/images/test-1.jpg", alt: "test 1" },
  { src: "/images/test-2.jpg", alt: "test 2" },
  { src: "/images/test-3.jpg", alt: "test 3" },
];

const PANEL =
  "relative z-10 rounded-3xl border border-stone-200 bg-white px-6 py-12 text-center sm:px-10 sm:py-20 lg:px-12 lg:py-24";

export default function Page() {
  return (
    <div className="space-y-14 sm:space-y-20 lg:space-y-28">
      <section className="relative left-1/2 right-1/2 -mx-[50vw] flex min-h-[740px] w-screen items-center justify-center overflow-hidden text-center text-stone-800 sm:min-h-[640px]">
        <Image
          src="/images/floral-lily-background.webp"
          alt="floral lily"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-50/55" />

        <div className="relative z-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em]">
            August 13, 2027
          </p>

          <h1 className="flex flex-col items-center text-stone-900">
            <span className="font-display text-5xl tracking-[0.2em] sm:text-6xl lg:text-7xl">
              CHRISTINE
            </span>

            <span className="flex items-baseline gap-4">
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl">
                &amp;
              </span>

              <span className="font-display text-5xl tracking-[0.2em] sm:text-6xl lg:text-7xl">
                MATTHEW
              </span>
            </span>
          </h1>
        </div>
      </section>

      <section className={PANEL}>
        <div className="flex flex-col items-center">
          <p className="max-w-xl text-lg leading-relaxed text-stone-800 sm:text-xl">
            With love and gratitude, we invite you to
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-stone-800 sm:text-xl">
            share in the joy of our wedding day.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-1 sm:mt-14">
          <p className="text-base text-stone-700 sm:text-lg">
            Friday, August 13, 2027
          </p>
          <p className="text-base text-stone-700 sm:text-lg">
            Tuscan Estate at Monserate Winery
          </p>
          <p className="text-base text-stone-700 sm:text-lg">Fallbrook, CA</p>
        </div>
        <div className="mt-10 sm:mt-14">
          <CountdownTimer />
        </div>
      </section>

      <section className={PANEL}>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-4xl tracking-[0.2em] text-stone-900 sm:text-5xl">
            Our Story
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-stone-700 sm:text-base">
            Write a paragraph that tells your story as a couple. You can include
            details like how you met, your journey together, and what makes your
            relationship unique. This is your chance to share your personality
            and connect with your guests, giving them a glimpse into your love
            story and what this special day means to you.
          </p>
        </div>
      </section>

      <section>
        <Carousel images={IMAGES} />
      </section>

      <Rsvp />
    </div>
  );
}
