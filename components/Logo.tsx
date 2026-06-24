import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "default" | "watermark";
}

export default function Logo({ size = 40, className = "", variant = "default" }: LogoProps) {
  const isWatermark = variant === "watermark";

  return (
    <Image
      src="/Arch.png"
      alt={isWatermark ? "" : "ArchTech logo"}
      width={size}
      height={size}
      className={className}
      loading={isWatermark ? "lazy" : "eager"}
      priority={!isWatermark}
      aria-hidden={isWatermark ? true : undefined}
      draggable={false}
    />
  );
}
