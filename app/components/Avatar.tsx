import Image from "next/image";

const SIZE_CLASSES = {
  sm: "size-16 text-sm",
  md: "size-24 text-lg",
  lg: "size-32 text-2xl",
} as const;

type AvatarSize = keyof typeof SIZE_CLASSES;

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0]}${parts[parts.length - 1]![0]}`.toUpperCase();
}

export function Avatar({
  src,
  name,
  size = "md",
}: {
  src?: string;
  name: string;
  size?: AvatarSize;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100 ${SIZE_CLASSES[size]}`}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(min-width: 640px) 8rem, 6rem"
          className="object-cover"
        />
      ) : (
        <span className="font-display absolute inset-0 flex items-center justify-center font-semibold text-stone-500">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}
