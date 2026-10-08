import { notFound } from "next/navigation";
import invitations from "../../../../data/invitations";
import RsvpForm from "../_components/RsvpForm";
import { RSVPPageProps } from "../_components/types";

export default async function RsvpCodePage({ params }: RSVPPageProps) {
  const { code } = await params;
  const normalizedCode = decodeURIComponent(code).trim().toUpperCase();

  const invitation = invitations.find(
    (invitation) => invitation.code === normalizedCode,
  );

  if (!invitation) {
    notFound();
  }

  return <RsvpForm invitation={invitation} />;
}
