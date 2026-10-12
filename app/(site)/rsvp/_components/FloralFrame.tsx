import Image from "next/image";

const panelClassName =
  "fixed inset-y-0 hidden w-[min(33.333vh,calc((100vw-48rem)/2+4rem))] lg:block";

const mobileSizes = "(min-width: 1024px) 1px, 100vw";
const panelSizes = "(min-width: 1024px) 67vh, 1px";

export default function FloralFrame() {
  return (
    <div aria-hidden className="pointer-events-none mix-blend-multiply">
      <div className="fixed inset-x-0 top-1/2 aspect-[4167/5833] -translate-y-1/2 opacity-70 [mask-image:linear-gradient(transparent,black_12%,black_88%,transparent)] lg:hidden">
        <Image
          src="/images/floral-frame-2.jpg"
          alt=""
          fill
          sizes={mobileSizes}
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className={`${panelClassName} left-0`}>
        <Image
          src="/images/floral-frame-2.jpg"
          alt=""
          fill
          sizes={panelSizes}
          loading="eager"
          className="object-cover object-left"
        />
      </div>
      <div className={`${panelClassName} right-0`}>
        <Image
          src="/images/floral-frame-2.jpg"
          alt=""
          fill
          sizes={panelSizes}
          loading="eager"
          className="object-cover object-right"
        />
      </div>
    </div>
  );
}
