const EmailApiDiagram = () => (
  <svg viewBox="0 0 450 140" className="h-auto w-full overflow-visible">
    <rect
      x="10"
      y="40"
      width="90"
      height="60"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="55"
      y="75"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[13px] dark:fill-gray-300"
    >
      [Client App]
    </text>

    <line
      x1="100"
      y1="70"
      x2="150"
      y2="70"
      stroke="white"
      strokeOpacity="0.1"
      strokeDasharray="4"
      className="animate-dash hidden dark:block"
    />
    <line
      x1="100"
      y1="70"
      x2="150"
      y2="70"
      stroke="black"
      strokeOpacity="0.2"
      strokeDasharray="4"
      className="animate-dash block dark:hidden"
    />

    <rect
      x="155"
      y="40"
      width="120"
      height="60"
      className="fill-emerald-100 stroke-emerald-300 dark:fill-black/40 dark:stroke-emerald-500/40"
    />
    <text
      x="215"
      y="75"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[13px] dark:fill-emerald-400"
    >
      Email Proxy API
    </text>

    <line
      x1="275"
      y1="70"
      x2="325"
      y2="70"
      stroke="white"
      strokeOpacity="0.1"
      strokeDasharray="4"
      className="animate-dash hidden dark:block"
    />
    <line
      x1="275"
      y1="70"
      x2="325"
      y2="70"
      stroke="black"
      strokeOpacity="0.2"
      strokeDasharray="4"
      className="animate-dash block dark:hidden"
    />

    <rect
      x="330"
      y="40"
      width="110"
      height="60"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="385"
      y="75"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[13px] dark:fill-gray-300"
    >
      [SMTP Server]
    </text>
  </svg>
);

const CeluDiagram = () => (
  <svg viewBox="0 0 450 180" className="h-auto w-full overflow-visible">
    <rect
      x="10"
      y="60"
      width="90"
      height="60"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="55"
      y="95"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[13px] dark:fill-gray-300"
    >
      Next.js UI
    </text>

    <line
      x1="100"
      y1="90"
      x2="155"
      y2="90"
      stroke="white"
      strokeOpacity="0.1"
      strokeDasharray="4"
      className="animate-dash hidden dark:block"
    />
    <line
      x1="100"
      y1="90"
      x2="155"
      y2="90"
      stroke="black"
      strokeOpacity="0.2"
      strokeDasharray="4"
      className="animate-dash block dark:hidden"
    />

    <rect
      x="160"
      y="60"
      width="130"
      height="60"
      className="fill-blue-100 stroke-blue-300 dark:fill-black/40 dark:stroke-blue-500/40"
    />
    <text
      x="225"
      y="95"
      textAnchor="middle"
      className="fill-blue-700 font-mono text-[13px] dark:fill-blue-400"
    >
      Express Backend
    </text>

    <path
      d="M 290 90 H 320 V 45 H 350"
      fill="none"
      className="animate-dash stroke-gray-400/50"
      strokeDasharray="4"
    />
    <path
      d="M 290 90 H 320 V 125 H 350"
      fill="none"
      className="animate-dash stroke-gray-400/50"
      strokeDasharray="4"
    />

    <rect
      x="355"
      y="15"
      width="85"
      height="45"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="397"
      y="43"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[12px] dark:fill-gray-300"
    >
      MySQL Cluster
    </text>

    <rect
      x="355"
      y="105"
      width="85"
      height="45"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="397"
      y="133"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[12px] dark:fill-gray-300"
    >
      VPS Don Web
    </text>
  </svg>
);

const ChronoDiagram = () => (
  <svg viewBox="0 0 450 160" className="h-auto w-full overflow-visible">
    <defs>
      <marker
        id="arrow-green"
        markerWidth="10"
        markerHeight="10"
        refX="9"
        refY="5"
        orient="auto"
      >
        <path
          d="M0,0 L10,5 L0,10 Z"
          className="fill-emerald-600/40 dark:fill-emerald-500/40"
        />
      </marker>
    </defs>

    {/* Frontend */}
    <rect
      x="10"
      y="50"
      width="100"
      height="60"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="60"
      y="85"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[12px] tracking-tight uppercase dark:fill-gray-300"
    >
      Next.js UI
    </text>

    <line
      x1="110"
      y1="80"
      x2="160"
      y2="80"
      stroke="#059669"
      strokeOpacity="0.6"
      strokeDasharray="4"
      className="animate-dash"
      markerEnd="url(#arrow-green)"
    />

    {/* Edge Layer */}
    <rect
      x="165"
      y="50"
      width="115"
      height="60"
      className="fill-emerald-100 stroke-emerald-300 dark:fill-black/60 dark:stroke-emerald-500/40"
    />
    <text
      x="222"
      y="78"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[12px] uppercase dark:fill-emerald-400"
    >
      Edge Logic
    </text>
    <text
      x="222"
      y="95"
      textAnchor="middle"
      className="fill-emerald-700/60 font-mono text-[10px] tracking-[0.2em] uppercase dark:fill-emerald-500/50"
    >
      (Prisma/Neon)
    </text>

    <line
      x1="280"
      y1="80"
      x2="330"
      y2="80"
      stroke="#059669"
      strokeOpacity="0.6"
      strokeDasharray="4"
      className="animate-dash"
      markerEnd="url(#arrow-green)"
    />

    {/* Persistence Layer */}
    <path
      d="M 335 80 H 355 V 45 H 385"
      fill="none"
      className="animate-dash stroke-gray-400/50"
      strokeDasharray="4"
      markerEnd="url(#arrow-green)"
    />
    <path
      d="M 335 80 H 355 V 115 H 385"
      fill="none"
      className="animate-dash stroke-gray-400/50"
      strokeDasharray="4"
      markerEnd="url(#arrow-green)"
    />

    <rect
      x="390"
      y="15"
      width="50"
      height="45"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="415"
      y="43"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[10px] uppercase dark:fill-gray-300"
    >
      Zustand
    </text>

    <rect
      x="390"
      y="95"
      width="50"
      height="45"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="415"
      y="123"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[10px] uppercase dark:fill-gray-300"
    >
      Postgres
    </text>
  </svg>
);

export { CeluDiagram, ChronoDiagram, EmailApiDiagram };
