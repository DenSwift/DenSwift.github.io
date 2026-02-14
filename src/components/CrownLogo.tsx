const CrownLogo = ({ className = "w-10 h-10" }: {className?: string;}) =>
<svg
  viewBox="0 0 200 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg" className="">


    {/* Left wing */}
    <g opacity="0.9">
      {/* Main wing feathers - left */}
      <path
      d="M50 58C46 52 38 44 28 40C22 38 14 38 8 42C14 36 22 32 30 30C24 26 16 22 6 22C14 20 24 22 32 26C28 20 22 14 14 10C22 12 30 18 36 26C34 20 30 12 26 6C32 12 36 22 38 30C38 24 36 16 36 10C38 18 40 28 40 36C42 28 42 20 44 14C44 22 44 32 42 40C46 34 48 26 52 20C50 28 48 36 46 44C50 38 54 32 58 28C54 34 52 42 48 48L50 58Z"
      fill="currentColor" />

      {/* Wing detail lines */}
      <path
      d="M48 50C44 44 36 36 26 34"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.4" />

      <path
      d="M46 46C40 38 32 30 20 26"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.4" />

      <path
      d="M44 42C38 34 30 24 18 18"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.4" />

    </g>

    {/* Right wing (mirrored) */}
    <g opacity="0.9">
      <path
      d="M150 58C154 52 162 44 172 40C178 38 186 38 192 42C186 36 178 32 170 30C176 26 184 22 194 22C186 20 176 22 168 26C172 20 178 14 186 10C178 12 170 18 164 26C166 20 170 12 174 6C168 12 164 22 162 30C162 24 164 16 164 10C162 18 160 28 160 36C158 28 158 20 156 14C156 22 156 32 158 40C154 34 152 26 148 20C150 28 152 36 154 44C150 38 146 32 142 28C146 34 148 42 152 48L150 58Z"
      fill="currentColor" />

      <path
      d="M152 50C156 44 164 36 174 34"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.4" />

      <path
      d="M154 46C160 38 168 30 180 26"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.4" />

      <path
      d="M156 42C162 34 170 24 182 18"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.4" />

    </g>

    {/* Tiara */}
    <g>
      {/* Tiara base band */}
      <path
      d="M72 58C72 56 76 52 80 50L84 48L88 44L92 40L96 36L100 30L104 36L108 40L112 44L116 48L120 50C124 52 128 56 128 58"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none" />

      {/* Tiara filled shape */}
      <path
      d="M76 56C78 52 82 48 86 46L90 42L94 38L98 34L100 30L102 34L106 38L110 42L114 46C118 48 122 52 124 56Z"
      fill="currentColor"
      opacity="0.3" />

      {/* Center spire */}
      <path
      d="M96 38L100 22L104 38"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.6" />

      {/* Left spires */}
      <path
      d="M88 46L86 32L92 42"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.5" />

      <path
      d="M80 52L76 40L84 48"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.5" />

      {/* Right spires */}
      <path
      d="M112 46L114 32L108 42"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.5" />

      <path
      d="M120 52L124 40L116 48"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.5" />

      {/* Tiara base */}
      <rect x="72" y="56" width="56" height="4" rx="1.5" fill="currentColor" />
      {/* Gems */}
      <circle cx="100" cy="24" r="2.5" fill="currentColor" />
      <circle cx="86" cy="34" r="1.8" fill="currentColor" />
      <circle cx="114" cy="34" r="1.8" fill="currentColor" />
      <circle cx="76" cy="42" r="1.5" fill="currentColor" />
      <circle cx="124" cy="42" r="1.5" fill="currentColor" />
      {/* Small decorative dots along base */}
      <circle cx="84" cy="57" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="92" cy="57" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="57" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="108" cy="57" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="116" cy="57" r="1" fill="currentColor" opacity="0.6" />
    </g>
  </svg>;


export default CrownLogo;