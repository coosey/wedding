import type { WeddingParty } from "../../../data/weddingParty";
import { BRIDESMAIDS, GROOMSMEN } from "../../../data/weddingParty";
import { Avatar } from "../../components";

function PartySection({
  title,
  members,
}: {
  title: string;
  members: WeddingParty[];
}) {
  return (
    <div className="space-y-4">
      <h2 className="flex flex-col items-center font-display text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="flex flex-col items-center gap-6">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center gap-3 text-center"
          >
            <Avatar name={member.name} src={member.src} size="md" />
            <span className="text-base text-stone-900">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WeddingPartyPage() {
  return (
    <section className="flex flex-col items-center mx-auto max-w-3xl space-y-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        WEDDING PARTY
      </h1>
      <p className="text-sm leading-7 text-stone-700 sm:text-base">
        Information about the wedding party will be shared here in a simple
        mobile-friendly format.
      </p>
      <div className="space-y-10 pt-8">
        <PartySection title="Bridesmaids" members={BRIDESMAIDS} />
        <PartySection title="Groomsmen" members={GROOMSMEN} />
      </div>
    </section>
  );
}
