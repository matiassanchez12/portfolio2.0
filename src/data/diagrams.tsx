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
      Next.js 14
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
  <svg viewBox="0 0 1000 350" className="h-auto w-full overflow-visible">
    {/* Vercel - Deploy Server */}
    <rect
      x="30"
      y="120"
      width="180"
      height="100"
      className="fill-black stroke-gray-700 dark:fill-white/10 dark:stroke-white/20"
    />
    <text
      x="120"
      y="175"
      textAnchor="middle"
      className="fill-white font-mono text-[24px] font-bold uppercase dark:fill-gray-200"
    >
      Vercel
    </text>

    <line
      x1="210"
      y1="170"
      x2="280"
      y2="170"
      strokeDasharray="8"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />

    {/* Frontend - Next.js */}
    <rect
      x="290"
      y="120"
      width="180"
      height="100"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="380"
      y="175"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[24px] tracking-tight uppercase dark:fill-gray-300"
    >
      Nextjs 16
    </text>

    <line
      x1="470"
      y1="170"
      x2="540"
      y2="170"
      strokeDasharray="8"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />
    {/* Auth & Role Validation labels */}
    <rect x="478" y="140" width="70" height="28" rx="6" className="fill-blue-50 stroke-blue-200 dark:fill-blue-900/40 dark:stroke-blue-700/50" />
    <text x="513" y="159" textAnchor="middle" className="fill-blue-600 font-mono text-[14px] font-bold dark:fill-blue-300">
      AUTH
    </text>
    <rect x="478" y="172" width="70" height="28" rx="6" className="fill-purple-50 stroke-purple-200 dark:fill-purple-900/40 dark:stroke-purple-700/50" />
    <text x="513" y="191" textAnchor="middle" className="fill-purple-600 font-mono text-[14px] font-bold dark:fill-purple-300">
      ROLES
    </text>

    {/* Edge Layer - Server Functions */}
    <rect
      x="550"
      y="120"
      width="180"
      height="100"
      className="fill-emerald-100 stroke-emerald-300 dark:fill-black/60 dark:stroke-emerald-500/40"
    />
    <text
      x="640"
      y="155"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[24px] uppercase dark:fill-emerald-400"
    >
      Server
    </text>
    <text
      x="640"
      y="190"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[20px] uppercase dark:fill-emerald-400"
    >
      Functions
    </text>

    {/* Branch to S3 */}
    <line
      x1="640"
      y1="220"
      x2="640"
      y2="270"
      strokeDasharray="8"
      className="animate-dash stroke-amber-500/50 dark:stroke-amber-400/50"
    />
    <line
      x1="640"
      y1="270"
      x2="860"
      y2="270"
      strokeDasharray="8"
      className="animate-dash stroke-amber-500/50 dark:stroke-amber-400/50"
    />
    <line
      x1="860"
      y1="270"
      x2="860"
      y2="250"
      strokeDasharray="8"
      className="animate-dash stroke-amber-500/50 dark:stroke-amber-400/50"
    />

    {/* AWS S3 */}
    <rect
      x="790"
      y="250"
      width="140"
      height="70"
      className="fill-amber-100 stroke-amber-300 dark:fill-black/60 dark:stroke-amber-500/40"
    />
    <text
      x="860"
      y="290"
      textAnchor="middle"
      className="fill-amber-700 font-mono text-[20px] uppercase dark:fill-amber-400"
    >
      AWS S3
    </text>

    {/* Branch to Postgres */}
    <line
      x1="730"
      y1="170"
      x2="800"
      y2="170"
      strokeDasharray="8"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />

    {/* Postgres */}
    <rect
      x="810"
      y="120"
      width="160"
      height="100"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="890"
      y="175"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[24px] uppercase dark:fill-gray-300"
    >
      Postgres
    </text>
  </svg>
);


const TheDevHouseDiagram = () => (
  <svg viewBox="0 0 1000 350" className="h-auto w-full overflow-visible">
    Aquí tienes el código actualizado con las tecnologías de The Dev House (Laravel, Sail, Inertia.js, PostgreSQL y Shadcn):

    {/* Laravel - Deploy Server */}
    <rect
      x="30"
      y="120"
      width="180"
      height="100"
      className="fill-black stroke-gray-700 dark:fill-white/10 dark:stroke-white/20"
    />
    <text
      x="120"
      y="175"
      textAnchor="middle"
      className="fill-white font-mono text-[24px] font-bold uppercase dark:fill-gray-200"
    >
      Laravel
    </text>

    <line
      x1="210"
      y1="170"
      x2="280"
      y2="170"
      strokeDasharray="8"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />

    {/* Frontend - Inertia.js */}
    <rect
      x="290"
      y="120"
      width="180"
      height="100"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="380"
      y="175"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[24px] tracking-tight uppercase dark:fill-gray-300"
    >
      Inertiajs
    </text>

    <line
      x1="470"
      y1="170"
      x2="540"
      y2="170"
      strokeDasharray="8"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />
    {/* Auth & Role Validation labels */}
    <rect x="478" y="140" width="70" height="28" rx="6" className="fill-blue-50 stroke-blue-200 dark:fill-blue-900/40 dark:stroke-blue-700/50" />
    <text x="513" y="159" textAnchor="middle" className="fill-blue-600 font-mono text-[14px] font-bold dark:fill-blue-300">
      AUTH
    </text>
    <rect x="478" y="172" width="70" height="28" rx="6" className="fill-purple-50 stroke-purple-200 dark:fill-purple-900/40 dark:stroke-purple-700/50" />
    <text x="513" y="191" textAnchor="middle" className="fill-purple-600 font-mono text-[14px] font-bold dark:fill-purple-300">
      ROLES
    </text>

    {/* Edge Layer - Sail */}
    <rect
      x="550"
      y="120"
      width="180"
      height="100"
      className="fill-emerald-100 stroke-emerald-300 dark:fill-black/60 dark:stroke-emerald-500/40"
    />
    <text
      x="640"
      y="155"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[24px] uppercase dark:fill-emerald-400"
    >
      Laravel
    </text>
    <text
      x="640"
      y="190"
      textAnchor="middle"
      className="fill-emerald-700 font-mono text-[20px] uppercase dark:fill-emerald-400"
    >
      Sail
    </text>

    {/* Branch to S3 */}
    <line
      x1="640"
      y1="220"
      x2="640"
      y2="270"
      strokeDasharray="8"
      className="animate-dash stroke-amber-500/50 dark:stroke-amber-400/50"
    />
    <line
      x1="640"
      y1="270"
      x2="860"
      y2="270"
      strokeDasharray="8"
      className="animate-dash stroke-amber-500/50 dark:stroke-amber-400/50"
    />
    <line
      x1="860"
      y1="270"
      x2="860"
      y2="250"
      strokeDasharray="8"
      className="animate-dash stroke-amber-500/50 dark:stroke-amber-400/50"
    />

    {/* AWS S3 */}
    <rect
      x="790"
      y="250"
      width="140"
      height="70"
      className="fill-amber-100 stroke-amber-300 dark:fill-black/60 dark:stroke-amber-500/40"
    />
    <text
      x="860"
      y="290"
      textAnchor="middle"
      className="fill-amber-700 font-mono text-[20px] uppercase dark:fill-amber-400"
    >
      AWS S3
    </text>

    {/* Branch to PostgreSQL */}
    <line
      x1="730"
      y1="170"
      x2="800"
      y2="170"
      strokeDasharray="8"
      className="animate-dash stroke-emerald-600/60 dark:stroke-emerald-500/60"
    />

    {/* PostgreSQL */}
    <rect
      x="810"
      y="120"
      width="160"
      height="100"
      className="fill-gray-100 stroke-gray-300 dark:fill-black/40 dark:stroke-white/20"
    />
    <text
      x="890"
      y="175"
      textAnchor="middle"
      className="fill-gray-700 font-mono text-[24px] uppercase dark:fill-gray-300"
    >
      PostgreSQL
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
      (Prisma)
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
