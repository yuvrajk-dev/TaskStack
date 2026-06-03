const BgSvg = () => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className="absolute inset-0 w-full h-full -z-999 "
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(40 720) rotate(-10)">
          <rect width="140" height="140" />
          <path d="M20 60h80" />
          <path d="M20 90h60" />
        </g>

        {/* bulb */}
        <g transform="translate(60 330)">
          <circle cx="40" cy="40" r="35" />
          <path d="M30 70h20" />
          <path d="M28 78h24" />
        </g>

        {/* bottom plant */}
        <g transform="translate(1500 820)">
          <rect x="20" y="90" width="60" height="50" rx="4" />
          <path d="M50 90V20" />
          <path d="M50 35c-25-20-35 10-10 25" />
          <path d="M50 35c25-20 35 10 10 25" />
        </g>

        {/* top plane */}
        <g transform="translate(1450 50)">
          <path d="M0 30L100 0L40 60L30 35Z" />
        </g>

        {/* FLOATING ELEMENTS */}
        <path d="M600 180c80-60 180-60 260 0" />
        {/* <path d="M1050 180c80 60 180 60 260 0" /> */}

        {/* <path d="M550 900c100-80 250-80 350 0" /> */}
        <path d="M1020 900c100 80 250 80 350 0" />

        {/* STARS */}
        <path d="M520 320l12-12m0 12l-12-12" />

        <path d="M220 120l10-10m0 10l-10-10" />

        <path d="M1550 260l8-8m0 8l-8-8" />
        <path d="M1700 180l12-12m0 12l-12-12" />

        <path d="M620 720l12-12m0 12l-12-12" />

        <path d="M240 920l10-10m0 10l-10-10" />
        <path d="M900 950l12-12m0 12l-12-12" />

        <path d="M1750 900l12-12m0 12l-12-12" />
      </g>

      {/* WATERMARK */}
    </svg>
  );
};

export default BgSvg;
