import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

const sizes = {
  sm: { image: 32, text: "text-xs" },
  md: { image: 40, text: "text-sm" },
  lg: { image: 56, text: "text-base" },
};

export const COMPANY_NAME = "株式会社\u3000縁RIGHT";

export default function Logo({
  size = "md",
  showText = true,
  className = "",
}: LogoProps) {
  const { image, text } = sizes[size];

  return (
    <span className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <span className="shrink-0 rounded-lg bg-white p-0.5 shadow-sm ring-1 ring-white/10">
        <Image
          src="/logo.png"
          alt={COMPANY_NAME}
          width={image}
          height={image}
          className="object-contain"
          priority={size !== "sm"}
        />
      </span>
      {showText && (
        <span
          className={`truncate font-semibold tracking-tight text-slate-100 ${text}`}
        >
          <span className="font-medium text-slate-400">株式会社</span>
          {"\u3000"}
          <span className="text-slate-100">縁RIGHT</span>
        </span>
      )}
    </span>
  );
}
