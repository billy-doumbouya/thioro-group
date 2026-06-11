"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionWrapper({ children, className, id, delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn("py-16 md:py-24", className)}
    >
      {children}
    </motion.section>
  );
}
