import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const heights = { sm: 36, md: 44, lg: 56 };
  const h = heights[size];
  const w = Math.round(h * (220 / 56));

  const navyMark = variant === "white" ? "#ffffff" : "#0d1f3c";
  const blueMark  = variant === "white" ? "#90b4f0" : "#1e4d9b";
  const silverMark= variant === "white" ? "#c8d8eb" : "#8ea3bc";
  const textColor = variant === "white" ? "#ffffff" : "#0d1f3c";
  const subColor  = variant === "white" ? "rgba(255,255,255,0.55)" : "#6b7e96";

  return (
    <Link href="/" aria-label="National As Built Inc. — Home" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      {/* Icon mark — stylised N with diagonal silver slash, echoing the original logo geometry */}
      <svg width={h} height={h} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="56" height="56" rx="6" fill={navyMark}/>
        {/* Left vertical bar of N */}
        <rect x="10" y="10" width="8" height="36" fill={blueMark}/>
        {/* Right vertical bar of N */}
        <rect x="38" y="10" width="8" height="36" fill={blueMark}/>
        {/* Diagonal silver slash (signature element from original logo) */}
        <path d="M18 10 L38 46 L34 46 L14 10 Z" fill={silverMark}/>
        {/* Blue overlay diagonal to complete N shape */}
        <path d="M18 10 L38 10 L38 20 L26 10 Z" fill={blueMark} opacity="0.6"/>
        <path d="M18 46 L38 46 L38 36 L26 46 Z" fill={blueMark} opacity="0.6"/>
        {/* Bottom accent line */}
        <rect x="10" y="50" width="36" height="2" rx="1" fill={silverMark} opacity="0.5"/>
      </svg>

      {/* Wordmark */}
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <text
          x="0" y={size === "sm" ? 22 : size === "md" ? 27 : 34}
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="600"
          fontSize={size === "sm" ? 15 : size === "md" ? 18 : 22}
          fill={textColor}
          letterSpacing="-0.3"
        >
          NATIONAL AS BUILT
        </text>
        <text
          x="1" y={size === "sm" ? 32 : size === "md" ? 40 : 50}
          fontFamily="'Outfit', system-ui, sans-serif"
          fontWeight="500"
          fontSize={size === "sm" ? 9 : size === "md" ? 10 : 13}
          fill={subColor}
          letterSpacing="1.8"
        >
          INC. · NATIONWIDE SURVEYS
        </text>
      </svg>
    </Link>
  );
}
