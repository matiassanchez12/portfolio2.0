"use client";

import { ThemeToggleButton } from "@/components/theme/theme-switch";

export default function Name() {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-6 lg:flex-row lg:items-center lg:gap-8 mb-6 sm:mb-8">
      {/* Text Content */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex flex-row gap-2 items-center justify-center h-full">
            <span className="h-2 w-2 rounded-full animate-pulse bg-green-600"/>
            <p className="m-0 text-sm text-foreground/90 font-mono">Available for hire</p> 
          </div>
           <p className="font-inter text-xl sm:text-1xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
            Matias Sanchez
          </p>
        </div>

        <span className="text-sm font-serif sm:text-sm text-foreground/70 leading-relaxed">
           Software Developer | Backend & Fullstack | Tech Blogger
        </span>
      </div>

      <div>
        {/* <div className="opacity-60 top-0 right-0 text-sm">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div> */}
      </div>
    </div>
  );
}
