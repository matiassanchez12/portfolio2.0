import { ProjectCard } from "@/types/project";

export default function ProjectNode({ project }: { project: ProjectCard }) {
  const Diagram = project.diagram;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      {/* Columna del Diagrama (60%) */}
      <div className="rounded-sm border border-gray-200 border-white/5 bg-black/40 bg-gray-100 p-6 lg:col-span-7 dark:border-white/5 dark:bg-black/40">
        <h4 className="mb-6 font-mono text-[9px] tracking-[0.3em] text-emerald-600 uppercase dark:text-emerald-500/60">
          System_Architecture
        </h4>
        <Diagram />
      </div>

      {/* Columna de Texto (40%) */}
      <div className="space-y-6 self-center lg:col-span-5">
        <p className="font-sans text-sm leading-relaxed text-gray-600 italic dark:text-gray-400">
          {project.description}
        </p>

        {project.metrics && (
          <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 dark:border-white/5">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="block font-mono text-[9px] text-gray-500 uppercase dark:text-gray-600">
                  {m.label}
                </span>
                <span className="font-serif text-lg text-gray-800 dark:text-white">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
