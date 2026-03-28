import { SeniorityTypes } from "@/data/experience";

interface RoleBadgeProps {
  level: SeniorityTypes
}

export default function RoleBadge ({ level }: RoleBadgeProps) {
  const config = {
    semisenior: { label: 'Semi Senior', color: 'text-blue-400', glow: 'shadow-[0_0_8px_rgba(96,165,250,0.2)]' },
    senior: { label: 'Senior', color: 'text-purple-400', glow: 'shadow-[0_0_8px_rgba(192,132,252,0.2)]' },
    lead: { label: 'Lead', color: 'text-rose-400', glow: 'shadow-[0_0_8px_rgba(251,113,133,0.2)]' },
    fullstack: { label: 'Full Stack', color: 'text-gray-400', glow: '' },
  };

  const { label, color, glow } = config[level] || config.fullstack;

  return (
    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded border border-white/5 bg-white/[0.02] font-mono text-[10px] uppercase tracking-[0.15em] text-gray-500">
      <span className={`${color} ${glow} font-bold`}>[ ]</span>
      <span>{label}</span>
    </div>
  );
};