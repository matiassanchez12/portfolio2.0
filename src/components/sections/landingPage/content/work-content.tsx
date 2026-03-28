"use client";

import { experience } from "@/data/experience";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import RoleBadge from "../role-badge";

export default function WorkContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2 sm:space-y-3">
      {experience.map((item, index) => (
        <motion.div key={index}>
          <button
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            className="group/item group flex w-full items-center justify-between rounded-xl text-left transition-colors pb-2"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
              <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 sm:gap-2">
                <Link href={item.companyUrl || ""} target="_blank">
                  <h3 className="text-[16px] font-serif text-foreground/80">{item.company}</h3>
                </Link>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-sans text-foreground/60">{item.employmentType}</span>
                  <RoleBadge level={item.seniority} />
                </div>
              </div>
            </div>

            <div className="ml-2 flex shrink-0 items-center gap-3 sm:gap-6">
              <span className="font-mono text-[11px] text-gray-600 uppercase tracking-tighter">
                {item.startDate} — {item.endDate}
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-colors group-hover:text-zinc-600 sm:h-8 sm:w-8 dark:border-white/10 dark:group-hover:text-zinc-200">
                {expandedIndex === index ? (
                  <Minus
                    size={14}
                    className={`sm:h-4 sm:w-4`}
                  />
                ) : (
                  <Plus
                    size={14}
                    className="transition-transform duration-600 group-hover:rotate-90 sm:h-4 sm:w-4"
                  />
                )}
              </div>
            </div>
          </button>

          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0, ease: "circOut" }}
              >
                <div className="mt-6 border-t border-zinc-100 dark:border-white/5">
                  <ul className="space-y-3 sm:space-y-4">
                    {item.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex gap-3 text-xs leading-relaxed text-zinc-600 sm:gap-4 sm:text-sm md:text-[15px] dark:text-zinc-400"
                      >
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 sm:mt-2.5 dark:bg-zinc-600" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                  {item.skills.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {item.skills.map((skill, index) => (
                        <li key={index} className="flex">
                          <Badge>{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
