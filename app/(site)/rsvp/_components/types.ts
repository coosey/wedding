export type RSVPPageProps = {
  params: Promise<{
    code: string;
  }>;
};

export type RSVPResponse = {
  attending: boolean;
  meal: string;
  dietaryRestrictions?: string;
};

export type RSVPSubmission = {
  invitationCode: string;
  submittedAt: string;
  responses: RSVPResponse[];
};
