import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ProjectDetailProps {
    isOpen: boolean
    children: ReactNode
}

export default function ProjectDetail({ isOpen, children }: ProjectDetailProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                    animate={{
                        height: "auto",
                        opacity: 1,
                        marginBottom: 24, // Controlamos el espacio desde el JS para que se anime
                        transition: {
                            height: { type: "spring", stiffness: 100, damping: 20 },
                            opacity: { duration: 0.2, delay: 0.1 }
                        }
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        marginBottom: 0,
                        transition: {
                            height: { duration: 0.3, ease: "easeInOut" },
                            opacity: { duration: 0.2 }
                        }
                    }}
                    className="overflow-hidden" // IMPORTANTE: Sin paddings aquí
                >
                    {/* ENCAPSULAMOS EL PADDING AQUÍ DENTRO. 
         Esto evita que el padding interfiera con el cálculo de altura del contenedor animado.
      */}
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};