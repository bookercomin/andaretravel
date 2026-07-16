import Image from "next/image";
import { travelStyles } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function TravelStyles() {
  return (
    <section className="section-pad bg-cream-dim">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Who We Travel With</p>
          <h2 className="mt-4 text-display-md">Designed Around Your Kind of Trip</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {travelStyles.map((style, i) => (
            <Reveal key={style.name} delay={Math.min(i * 0.08, 0.3)}>
              <article className="group relative h-80 overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={style.image}
                  alt={style.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {style.emphasized && (
                    <span className="eyebrow mb-2 inline-block text-terracotta-light">Our Specialty</span>
                  )}
                  <h3 className="font-display text-2xl text-cream">{style.name}</h3>
                  <p className="mt-2 text-sm text-cream/80">{style.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
