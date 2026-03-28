"use client";

import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="mt-2 sm:mt-4 md:mt-6 mb-8 sm:mb-10 md:mb-12">
      <Separator className="mb-6" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex  flex-col text-foreground sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 text-xs opacity-70">
          {/* Left */}
          <div>
            Designed & Developed by
            <span className="text-primary"> Matias Sanchez</span>
            <br />
            © {new Date().getFullYear()} All rights reserved.
          </div>

          {/* Right */}
          <div className="">
            <span>
              {new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
