export default function Logo({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ═══════════════════════════
          COASTER — circular base
          ═══════════════════════════ */}
      {/* Outer coaster ring */}
      <ellipse cx="50" cy="88" rx="28" ry="7" fill="#92400e" opacity="0.9" />
      {/* Inner coaster highlight */}
      <ellipse cx="50" cy="88" rx="22" ry="5" fill="#b45309" opacity="0.6" />
      {/* Coaster texture lines */}
      <ellipse cx="50" cy="88" rx="15" ry="3.2" fill="#d97706" opacity="0.35" />
      {/* Coaster rim detail */}
      <ellipse cx="50" cy="88" rx="28" ry="7"
        fill="none"
        stroke="#d97706"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* ═══════════════════════════
          PINT GLASS — classic shape
          wider top, tapers to base
          ═══════════════════════════ */}
      {/* Glass body */}
      <path
        d="M26 30 L30 80 Q30 83 33 83 L67 83 Q70 83 70 80 L74 30 Z"
        fill="none"
        stroke="#fef3c7"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Beer liquid — amber fill */}
      <path
        d="M28 44 L31.5 79 Q31.5 81 33.5 81 L66.5 81 Q68.5 81 68.5 79 L72 44 Z"
        fill="#d97706"
        opacity="0.5"
      />

      {/* Beer liquid shimmer */}
      <path
        d="M32 50 L34 79 L42 79 L40 50 Z"
        fill="#fef3c7"
        opacity="0.07"
      />

      {/* ═══════════════════════════
          FOAM INSIDE — top layer
          ═══════════════════════════ */}
      <path
        d="M27.5 30.5 L29.5 44 L70.5 44 L72.5 30.5 Z"
        fill="#fef3c7"
        opacity="0.88"
      />

      {/* ═══════════════════════════
          FOAM OVERFLOW — top bumps
          organic, irregular, natural
          ═══════════════════════════ */}
      <path
        d="M22 35
           C22 31 24.5 28.5 28 29.5
           C28.5 27 31 25 33.5 26.5
           C35 24 38 23 40.5 24.5
           C42 22.5 45 21.5 47.5 23
           C49 21.5 52 21 54.5 22.5
           C56 20.8 59 20.5 61 22
           C62.5 21 65.5 21.5 67 23.5
           C69.5 22.5 72.5 24.5 73 27.5
           C76 27 79 29 78.5 32.5
           C80 33 82 35.5 80.5 37.5
           L22 37.5 Z"
        fill="#fef3c7"
        opacity="0.97"
      />

      {/* Foam top highlights */}
      <ellipse cx="36" cy="25" rx="3.2" ry="2"   fill="#fef3c7" opacity="0.55" />
      <ellipse cx="52" cy="21.5" rx="2.8" ry="1.8" fill="#fef3c7" opacity="0.5"  />
      <ellipse cx="66" cy="23" rx="2.4" ry="1.6" fill="#fef3c7" opacity="0.45" />
      <ellipse cx="43" cy="22.5" rx="2" ry="1.4" fill="#fef3c7" opacity="0.4"  />

      {/* ═══════════════════════════
          FOAM DRIPS down the glass
          ═══════════════════════════ */}
      {/* Right drip — main large one */}
      <path
        d="M74.5 36 C73.5 40 73 44 74.5 48 C76 52 78 54 77.5 57 C77 60.5 74 62 72 60.5"
        stroke="#fef3c7"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
      {/* Right drip teardrop end */}
      <ellipse cx="72.5" cy="61" rx="2.2" ry="2.8"
        fill="#fef3c7"
        opacity="0.45"
        transform="rotate(-10 72.5 61)"
      />
      {/* Left small drip */}
      <path
        d="M24 37 C23 40.5 23 44 24 47"
        stroke="#fef3c7"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.38"
      />

      {/* ═══════════════════════════
          BUBBLES inside glass
          ═══════════════════════════ */}
      <circle cx="45" cy="68" r="1.4" fill="#fef3c7" opacity="0.28" />
      <circle cx="57" cy="60" r="1.8" fill="#fef3c7" opacity="0.2"  />
      <circle cx="51" cy="74" r="1.1" fill="#fef3c7" opacity="0.25" />
      <circle cx="63" cy="70" r="1.5" fill="#fef3c7" opacity="0.18" />
      <circle cx="40" cy="58" r="0.9" fill="#fef3c7" opacity="0.22" />
      <circle cx="60" cy="52" r="1.2" fill="#fef3c7" opacity="0.18" />
      <circle cx="48" cy="55" r="0.8" fill="#fef3c7" opacity="0.2"  />
    </svg>
  );
}
