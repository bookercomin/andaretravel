"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-6">
      <nav
        aria-label="Primary"
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 md:px-7",
          scrolled
            ? "border-ink/10 bg-cream/85 shadow-card backdrop-blur-md"
            : "border-transparent bg-cream/20 backdrop-blur-sm"
        )}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
          Andare <span className="text-terracotta-dark">Travel</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/80 transition-colors hover:text-terracotta-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            size="sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Call
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-full p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 right-4 top-[76px] rounded-3xl border border-ink/10 bg-cream p-6 shadow-soft md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} className="font-display text-2xl text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full"
              onClick={() => {
                setOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
