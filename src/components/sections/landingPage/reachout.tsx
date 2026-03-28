"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";

import SectionHeader from "@/components/common/section-header";

const Reachout = () => {
  const [copied, setCopied] = useState(false);
  const email = "matias.sanchez.0097@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="reachout">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="Reach out" />

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            {/* Text & Email */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm font-sans sm:text-sm text-foreground/70 leading-relaxed max-w-2xl">
                Let&apos;s build robust systems together.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href={`mailto:${email}`}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm border-2 border-border/90 bg-background px-5 sm:px-6 py-2 sm:py-2.5 transition-all hover:border-foreground/20 hover:bg-secondary/50"
                >
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span className="text-xs sm:text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                    Send email
                  </span>
                </a>

                <button
                  onClick={handleCopy}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm border-2 border-border/90 bg-background px-5 sm:px-6 py-2 sm:py-2.5 transition-all hover:border-foreground/20 hover:bg-secondary/50"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  )}
                  <span className="text-xs sm:text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                    {copied ? "Copied!" : "Copy email"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reachout;
