const MEAL_OPTIONS = [
  { value: "CHICKEN", label: "Chicken" },
  { value: "VEGETARIAN", label: "Vegetarian" },
];

type MealSelectionProps = {
  guestId: string;
  meal?: string;
  hasError: boolean;
  onChange: (meal: string) => void;
};

export default function MealSelection({
  guestId,
  meal,
  hasError,
  onChange,
}: MealSelectionProps) {
  return (
    <div
      className={`space-y-3 rounded-xl border bg-stone-50/70 p-4 ${
        hasError ? "border-red-300" : "border-stone-100"
      }`}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
        Meal selection
      </h3>

      <div className="grid gap-2 sm:grid-cols-2">
        {MEAL_OPTIONS.map((option) => (
          <label
            key={option.value}
            className={`flex cursor-pointer items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm text-stone-800 transition hover:border-[#8D9440] ${
              hasError ? "border-red-300" : "border-stone-200"
            }`}
          >
            <input
              type="radio"
              name={`meal-${guestId}`}
              value={option.value}
              checked={meal === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 border-stone-300 text-[#8D9440]"
            />
            {option.label}
          </label>
        ))}
      </div>

      {hasError && (
        <p className="text-sm text-red-600">Please choose a meal option.</p>
      )}
    </div>
  );
}
