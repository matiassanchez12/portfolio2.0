import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    textButton?: string
    actionButton?: () => void
}

export default function SectionHeader({ title, subtitle, textButton, actionButton }: SectionHeaderProps) {
    return <div className="flex justify-between" key={title}>
        <div className="flex flex-col">
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-foreground/90 mb-1 font-serif font-semibold tracking-tight sm:mb-2 text-lg sm:text-2xl md:mb-3"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="font-sans text-[13px] text-foreground/50"
                >
                    {subtitle}
                </motion.span>
            )}
        </div>
        {
            textButton &&
            <motion.button
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-md text-foreground/40 mb-6 items-center flex cursor-pointer font-[family-name:var(--font-sans-serif)] font-semibold tracking-tight sm:mb-8 sm:text-xl md:mb-10"
                onClick={actionButton}
            >
                {textButton}
                <ArrowRight size={12} className="ml-2" />
            </motion.button>
        }

    </div>;
};