"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2027-08-13T16:00:00-07:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(WEDDING_DATE));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(WEDDING_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const isPast =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isPast) {
    return (
      <p className="font-display text-2xl tracking-[0.15em] text-stone-900 sm:text-3xl">
        We&apos;re married!
      </p>
    );
  }

  return (
    <div
      className="flex items-start justify-center gap-2 sm:gap-5"
      aria-label="Countdown to the wedding"
      role="timer"
    >
      {UNITS.map(({ key, label }, i) => (
        <div key={key} className="flex items-start gap-2 sm:gap-5">
          {i > 0 && (
            <span
              aria-hidden="true"
              className="font-display text-4xl leading-none font-light text-stone-300 sm:text-7xl"
            >
              :
            </span>
          )}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <span className="font-display text-5xl leading-none font-light tabular-nums text-stone-900 sm:text-7xl">
              {String(display[key]).padStart(2, "0")}
            </span>
            <span className="text-[0.65rem] tracking-[0.25em] text-stone-500 uppercase sm:text-xs">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
