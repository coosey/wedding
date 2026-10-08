type ChoiceButtonProps = {
  label: string;
  selected: boolean;
  hasError: boolean;
  /** Classes applied when this choice is selected. */
  selectedClassName: string;
  /** Hover border class applied when unselected and not in an error state. */
  hoverClassName: string;
  onClick: () => void;
};

export default function ChoiceButton({
  label,
  selected,
  hasError,
  selectedClassName,
  hoverClassName,
  onClick,
}: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-[border-color] ${
        selected
          ? selectedClassName
          : hasError
            ? "border-red-300 bg-red-50 text-red-800 hover:border-red-400"
            : `border-stone-300 bg-white text-stone-800 ${hoverClassName}`
      }`}
    >
      {label}
    </button>
  );
}
