"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectDetail from "./project-detail";
import ProjectNode from "./project-node";

const statusConfig = {
  running: {
    label: 'Production',
    color: 'text-emerald-500',
    glow: 'shadow-[0_0_8px_rgba(16,185,129,0.3)]',
  },
  building: {
    label: 'In Development',
    color: 'text-amber-500',
    glow: 'shadow-[0_0_8px_rgba(245,158,11,0.3)]',
  },
  abandoned: {
    label: 'Archived',
    color: 'text-gray-500',
    glow: '',
  },
};

export default function ProjectsContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2 sm:space-y-3">
      {projectsData.map((item, index) => {
        const { label, color, glow } = statusConfig[item.status || 'running'] || statusConfig.building;

        return (
          <motion.div key={index}>
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="group/item group flex w-full items-center justify-between rounded-xl text-left transition-colors pb-2"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 sm:gap-1">
                  <h3 className="text-[16px] font-serif text-foreground/">
                    {item.title}
                  </h3>
                  {
                    !item.href ?
                      <span className={`text-[14px] font-sans text-muted-foreground/40`}>
                        Coming soon
                      </span> :
                      <Link href={item.href || ""} rel="noopener noreferrer" target="_blank">
                        <span className={`text-[14px] font-sans text-gray-400`}>
                          View live
                        </span>
                      </Link>
                  }

                  <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded border border-white/5 bg-white/[0.02] font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 transition-all duration-300 hover:border-white/10">
                    <span className={`${color} ${glow} font-bold`}>
                      [ ]
                    </span>

                    <span className={item.status === 'building' ? 'animate-pulse' : ''}>
                      {label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-2 flex shrink-0 items-center gap-3 sm:gap-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-colors group-hover:text-zinc-600 sm:h-8 sm:w-8 dark:border-white/10 dark:group-hover:text-zinc-200">
                  {expandedIndex === index ? (
                    <Minus
                      size={14}
                      className="sm:h-4 sm:w-4"
                    />
                  ) : (
                    <Plus
                      size={14}
                      className="transition-transform duration-500 group-hover:rotate-90 sm:h-4 sm:w-4"
                    />
                  )}
                </div>
              </div>
            </button>

            <ProjectDetail isOpen={expandedIndex === index}>
              <div className="space-y-6">
               <ProjectNode key={item.id} project={item} />   
              </div>
            </ProjectDetail>
          </motion.div>
        )
      })}
    </div>
  );
}
