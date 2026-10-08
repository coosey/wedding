import Image from "next/image";

export function Footer() {
  return (
    <footer className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-3 border-t border-stone-100 pt-8 pb-12 text-sm leading-7 text-stone-700 sm:mt-20 sm:pt-10">
      <p className="font-display text-3xl font-semibold">C&amp;M</p>
      <Image
        src="/svg/wedding-divider.svg"
        alt=""
        width={936}
        height={112}
        className="h-auto w-40 opacity-80 sm:w-48"
      />
      <p className="text-base sm:text-lg">08.13.2027 ❤️</p>
    </footer>
  );
}
