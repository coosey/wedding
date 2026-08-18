"use client";

import type { AutoplayType } from "embla-carousel-autoplay";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type CarouselImage = {
  src: string;
  alt: string;
};

export function Carousel({
  images,
  autoPlay = true,
  autoPlayDelay = 4000,
}: {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoPlay
      ? [Autoplay({ delay: autoPlayDelay, stopOnInteraction: false })]
      : [],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getAutoplay = useCallback(
    () => emblaApi?.plugins()?.autoplay as AutoplayType | undefined,
    [emblaApi],
  );

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      getAutoplay()?.reset();
    },
    [emblaApi, getAutoplay],
  );
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    getAutoplay()?.reset();
  }, [emblaApi, getAutoplay]);
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    getAutoplay()?.reset();
  }, [emblaApi, getAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  if (images.length === 0) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map(({ src, alt }, index) => (
            <div
              key={src}
              className="relative aspect-4/3 min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 640px) 42rem, 100vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous photo"
            className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white/90 text-stone-700 shadow-sm transition hover:bg-white"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next photo"
            className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white/90 text-stone-700 shadow-sm transition hover:bg-white"
          >
            <ChevronIcon direction="right" />
          </button>

          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Select photo"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to photo ${index + 1}`}
                onClick={() => scrollTo(index)}
                className={`size-2 rounded-full transition ${
                  index === selectedIndex
                    ? "bg-stone-900"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}
