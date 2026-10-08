import { Guest } from "../../../../data/invitations";
import ChoiceButton from "./ChoiceButton";
import MealSelection from "./MealSelection";
import { RSVPResponse } from "./types";

type GuestRsvpCardProps = {
  guest: Guest;
  response?: Partial<RSVPResponse>;
  submitAttempted: boolean;
  onChange: (changes: Partial<RSVPResponse>) => void;
};

export default function GuestRsvpCard({
  guest,
  response,
  submitAttempted,
  onChange,
}: GuestRsvpCardProps) {
  const hasAttendanceError =
    submitAttempted && response?.attending === undefined;
  const hasMealError = Boolean(
    submitAttempted &&
    response?.attending &&
    guest.type === "ADULT" &&
    !response.meal,
  );

  return (
    <section
      className={`space-y-5 rounded-2xl border bg-white p-5 shadow-sm sm:p-6 ${
        hasAttendanceError || hasMealError
          ? "border-red-300"
          : "border-stone-200"
      }`}
    >
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">
          {guest.name}
        </h2>
        <p className="text-sm text-stone-700">Will you be attending?</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
        <ChoiceButton
          label="Attending"
          selected={response?.attending === true}
          hasError={hasAttendanceError}
          selectedClassName="border-[#8D9440] bg-[#8D9440] text-white"
          hoverClassName="hover:border-[#8D9440]"
          onClick={() => onChange({ attending: true })}
        />
        <ChoiceButton
          label="Not Attending"
          selected={response?.attending === false}
          hasError={hasAttendanceError}
          selectedClassName="border-stone-700 bg-stone-700 text-white"
          hoverClassName="hover:border-stone-500"
          onClick={() => onChange({ attending: false })}
        />
      </div>

      {hasAttendanceError && (
        <p className="text-sm text-red-600">
          Please choose whether this guest will attend.
        </p>
      )}

      {/* Additional questions */}
      {response?.attending && guest.type === "ADULT" && (
        <MealSelection
          guestId={guest.id}
          meal={response.meal}
          hasError={hasMealError}
          onChange={(meal) => onChange({ meal })}
        />
      )}

      {/* Child section */}
      {response?.attending && guest.type === "CHILD" && (
        <div className="rounded-xl border border-stone-100 bg-stone-50/70 p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
            Children&apos;s meal
          </h3>
          <p className="mt-1 text-sm text-stone-700">
            Child-specific menu details coming soon.
          </p>
        </div>
      )}

      {/* Dietary restrictions */}
      {response?.attending && (
        <div className="space-y-3 rounded-xl border border-stone-100 bg-stone-50/70 p-4">
          <label
            htmlFor={`dietary-${guest.id}`}
            className="block text-sm font-semibold uppercase tracking-wide text-stone-900"
          >
            Dietary restrictions{" "}
            <span className="font-normal normal-case tracking-normal text-stone-500">
              (optional)
            </span>
          </label>
          <textarea
            id={`dietary-${guest.id}`}
            name={`dietary-${guest.id}`}
            rows={2}
            maxLength={500}
            placeholder="Allergies, intolerances, or other dietary needs"
            value={response.dietaryRestrictions ?? ""}
            onChange={(e) => onChange({ dietaryRestrictions: e.target.value })}
            className="w-full resize-y rounded-lg border border-stone-200 bg-white px-3 py-2 text-base text-stone-900 outline-none placeholder:text-stone-400 focus:border-stone-500 sm:text-sm"
          />
        </div>
      )}
    </section>
  );
}
