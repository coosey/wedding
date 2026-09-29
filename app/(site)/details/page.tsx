import Image from "next/image";
import { Card, CountdownTimer, Rsvp } from "../../components";

const DETAILS = [
  {
    title: "Ceremony",
    description: `4:30 PM at the Tuscan Lawn.`,
  },
  {
    title: "Reception",
    description: "Dinner, toasts, and dancing immediately after the ceremony.",
  },
  {
    title: "Planning",
    description:
      "Use the nav above to check travel notes, registry, and RSVP deadline.",
  },
];

export default function DetailsPage() {
  return (
    <div className="space-y-14 sm:space-y-20 lg:space-y-28">
      <section className="text-center mx-auto max-w-3xl space-y-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          THE DETAILS
        </h1>
        <div>
          <p className="text-lg leading-relaxed text-stone-700 sm:text-xl">
            Please join us for our wedding celebration on
          </p>
          <p className="text-lg leading-relaxed text-stone-700 sm:text-xl">
            August 13, 2027
          </p>
          <p className="text-base text-md pt-12 text-stone-700 sm:text-base">
            The Tuscan Estate at Monserate Winery
          </p>
          <p className="text-base text-md text-stone-700 sm:text-base">
            2757 Gird Rd, Fallbrook, CA 92028
          </p>
        </div>
        <div>
          <Image
            src="/images/tuscan-estate-sketch.webp"
            alt="tuscan estate sketch"
            priority
            width="2048"
            height="1638"
          />
        </div>
        <CountdownTimer />
      </section>
      <section className="text-center mx-auto max-w-3xl space-y-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Schedule of Events
        </h2>
      </section>
      <section className="grid gap-4 pt-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {DETAILS.map((detail) => (
          <Card
            key={detail.title}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </section>
      <Rsvp />
    </div>
  );
}
