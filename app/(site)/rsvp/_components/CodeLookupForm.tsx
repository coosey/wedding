type CodeLookupFormProps = {
  code: string;
  error: string;
  onCodeChange: (code: string) => void;
  onSubmit: () => void;
};

export default function CodeLookupForm({
  code,
  error,
  onCodeChange,
  onSubmit,
}: CodeLookupFormProps) {
  return (
    <main className="text-center mx-auto max-w-3xl space-y-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        RSVP
      </h1>
      <div>
        <p className="text-sm leading-7 text-stone-700 sm:text-base">
          Please enter the RSVP code from your invitation. If you&apos;re
          responding for you and a guest (or your family), you&apos;ll be able
          to RSVP for your entire group.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="mx-auto flex max-w-md flex-col gap-3 text-left sm:flex-row sm:items-start"
      >
        <div className="flex-1">
          <label htmlFor="rsvpCode" className="sr-only">
            RSVP code
          </label>
          <input
            id="rsvpCode"
            name="rsvpCode"
            type="text"
            autoComplete="off"
            maxLength={6}
            required
            placeholder="RSVP code"
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-base text-stone-900 outline-none ring-0 placeholder:text-stone-400 focus:border-stone-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-[#8D9440] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#A3A969]"
        >
          Find my invite
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </main>
  );
}
