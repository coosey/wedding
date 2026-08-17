"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { href: "/our-story", label: "OUR STORY" },
  { href: "/wedding-party", label: "WEDDING PARTY" },
  { href: "/details", label: "DETAILS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/faq", label: "FAQ" },
  { href: "/registry", label: "REGISTRY" },
  { href: "/rsvp", label: "RSVP" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:flex">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition hover:opacity-70 ${
              pathname === href ? "underline underline-offset-4" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label="Toggle navigation menu"
        className="relative z-50 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-8"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {/* Mobile full-screen overlay menu */}
      {mounted &&
        createPortal(
          <div
            id="mobile-nav-menu"
            aria-hidden={!open}
            className={`fixed inset-0 z-40 sm:hidden ${
              open ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
              className={`absolute inset-0 bg-stone-900/15 transition-opacity duration-150 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`relative flex min-h-full flex-col bg-stone-50 transition-opacity duration-150 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mx-auto flex w-full max-w-6xl justify-end px-4 py-4 sm:px-6 lg:px-8">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  tabIndex={open ? undefined : -1}
                  className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-8"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-8 pb-16 text-lg tracking-wide uppercase">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    tabIndex={open ? undefined : -1}
                    className={`transition-opacity duration-150 hover:opacity-70 ${
                      pathname === href ? "underline underline-offset-4" : ""
                    } ${open ? "opacity-100" : "opacity-0"}`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
