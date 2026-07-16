import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <section className="section-pad bg-cream-dim">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">From Our Travelers</p>
          <h2 className="mt-4 text-display-md">Stories, Not Just Reviews</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-8 shadow-card">
                <Quote className="text-terracotta" size={28} aria-hidden="true" />
                <blockquote className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-ink/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4 text-sm">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-ink/60">{t.trip}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
