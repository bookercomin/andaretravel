"use client";

import { stats } from "@/lib/data";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/Reveal";
import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <section className="border-y border-ink/10 bg-cream-dim">
      <div className="container py-16 md:py-20">
        <StaggerGroup className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <p className="font-display text-display-md text-terracotta-dark">{stat.value}</p>
              <p className="eyebrow mt-3 text-ink/60">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
