"use client";

import { socialLinks } from "@/data/social-links";
import Name from "./components/name";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative mt-12 md:mt-20">
      <div className="max-w-3xl space-y-8">
        <Name />

        {/* About text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-sans leading-relaxed text-foreground/70"
        >
          Architecting distributed systems and clean, maintainable infrastructures with <span className="text-foreground">modern technologies</span>. 
          Focused on database optimization, low-latency <span className="text-foreground/90">APIs</span>, and <span className="text-foreground/90">high-traffic data persistence</span>.
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-5">
            {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-foreground/50 hover:text-foreground/100 transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
