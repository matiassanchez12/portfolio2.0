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
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
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
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
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


const PlattyDiagram = () => (
  <svg viewBox="0 0 450 160" className="h-auto w-full overflow-visible">
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
      y="73"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[12px] tracking-tight uppercase dark:fill-gray-300"
    >
      Nextjs 16
    </text>
    <text
      x="60"
      y="88"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[10px] tracking-tight uppercase dark:fill-gray-300"
    >
      (Atomic Design)
    </text>

    <line
      x1="110"
      y1="80"
      x2="160"
      y2="80"
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
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
      y="85"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[12px] uppercase dark:fill-emerald-400"
    >
      Server functions
    </text>

    <line
      x1="280"
      y1="80"
      x2="330"
      y2="80"
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />

    {/* Persistence Layer */}
    <rect
      x="330"
      y="50"
      width="75"
      height="60"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="367"
      y="85"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[12px] uppercase dark:fill-gray-300"
    >
      Postgres
    </text>
  </svg>
);

const ChronoDiagram = () => (
  <svg viewBox="0 0 450 160" className="h-auto w-full overflow-visible">
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
      React
    </text>

    <line
      x1="110"
      y1="80"
      x2="160"
      y2="80"
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
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
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />

    {/* Persistence Layer */}
    <rect
      x="330"
      y="50"
      width="75"
      height="60"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="367"
      y="85"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[12px] uppercase dark:fill-gray-300"
    >
      Postgres
    </text>
  </svg>
);


const TesloDiagram = () => (
  <svg viewBox="0 0 450 160" className="h-auto w-full overflow-visible">
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
      Next.js
    </text>

    <line
      x1="110"
      y1="80"
      x2="160"
      y2="80"
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
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
      y="85"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[12px] uppercase dark:fill-emerald-400"
    >
      Nodejs Api
    </text>

    <line
      x1="280"
      y1="80"
      x2="330"
      y2="80"
      strokeDasharray="4"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />

    {/* Persistence Layer */}
    <rect
      x="330"
      y="50"
      width="75"
      height="60"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="367"
      y="85"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[12px] uppercase dark:fill-gray-300"
    >
      Mongo DB
    </text>
  </svg>
);

export { CeluDiagram, ChronoDiagram, EmailApiDiagram, PlattyDiagram, TesloDiagram };
