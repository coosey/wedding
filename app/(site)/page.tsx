import Image from "next/image";

import { Carousel, CountdownTimer, Rsvp } from "../components";

// TODO: UPDATE LATER - MOCK IMAGES
const IMAGES = [
  { src: "/images/test-1.jpg", alt: "test 1" },
  { src: "/images/test-2.jpg", alt: "test 2" },
  { src: "/images/test-3.jpg", alt: "test 3" },
  { src: "/images/test-4.jpg", alt: "test 4" },
  { src: "/images/test-5.jpg", alt: "test 5" },
  { src: "/images/test-6.jpg", alt: "test 6" },
];

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
            <span className="font-display text-4xl tracking-[0.12em] sm:text-6xl sm:tracking-[0.2em] lg:text-7xl">
              CHRISTINE
            </span>

            <span className="flex items-baseline gap-3 sm:gap-4">
              <span className="font-script text-3xl sm:text-5xl lg:text-6xl">
                &amp;
              </span>

              <span className="font-display text-4xl tracking-[0.12em] sm:text-6xl sm:tracking-[0.2em] lg:text-7xl">
                MATTHEW
              </span>
            </span>
          </h1>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-4 py-16 text-center sm:px-10 sm:py-24 lg:py-28">
        <h2 className="mx-auto max-w-3xl font-display text-2xl leading-snug tracking-[0.12em] text-stone-800 sm:text-4xl sm:tracking-[0.15em] lg:text-5xl">
          WE&apos;RE GETTING MARRIED!
        </h2>
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <CountdownTimer />
        </div>
      </section>

      <section>
        <Carousel images={IMAGES} />
      </section>

      <Rsvp />
    </div>
  );
}
