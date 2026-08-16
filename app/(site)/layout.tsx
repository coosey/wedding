import Link from "next/link";
import Nav from "../components/Nav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="text-xs font-semibold tracking-[0.22em] uppercase sm:text-sm"
            >
              Our Wedding
            </Link>
            <Nav />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {children}
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-stone-600 sm:px-6 lg:px-8">
          With love, see you soon.
        </div>
      </footer>
    </div>
  );
}
