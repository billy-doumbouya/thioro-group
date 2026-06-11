"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className, variant = "color", size = "md" }) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 52 },
    lg: { width: 200, height: 65 },
  };

  const { width, height } = sizes[size];
  const isWhite = variant === "white";
  const primaryColor = isWhite ? "#ffffff" : "#0054A6";
  const accentColor = isWhite ? "#ffffff" : "#00AEEF";
  const textColor = isWhite ? "#ffffff" : "#1a1a1a";

  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Thioro Group Logo"
      >
        {/* Icône stylisée: éclair + goutte d'eau fusionnés */}
        <g>
          {/* Cercle de fond */}
          <circle cx="30" cy="32" r="28" fill={primaryColor} opacity="0.1" />
          {/* Éclair électrique */}
          <path
            d="M34 8 L22 32 L30 32 L26 56 L42 28 L34 28 Z"
            fill={primaryColor}
            strokeLinejoin="round"
          />
          {/* Goutte d'eau */}
          <path
            d="M14 36 C14 29 20 22 20 22 C20 22 26 29 26 36 C26 39.3 23.3 42 20 42 C16.7 42 14 39.3 14 36 Z"
            fill={accentColor}
            opacity="0.85"
          />
        </g>

        {/* Texte THIORO */}
        <text
          x="68"
          y="28"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="18"
          fill={primaryColor}
          letterSpacing="2"
        >
          THIORO
        </text>

        {/* Texte GROUP SARLU */}
        <text
          x="69"
          y="45"
          fontFamily="Open Sans, sans-serif"
          fontWeight="400"
          fontSize="10"
          fill={isWhite ? "#ffffff" : "#555555"}
          letterSpacing="3"
        >
          GROUP SARLU
        </text>

        {/* Ligne décorative sous THIORO */}
        <line
          x1="68"
          y1="33"
          x2="155"
          y2="33"
          stroke={accentColor}
          strokeWidth="1.5"
        />
      </svg>
    </Link>
  );
}
