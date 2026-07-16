import Image from "next/image";
import { travelStyles } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function TravelStyles() {
  return (
    <section className="section-pad bg-cream-dim">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Who We Travel With</p>
          <h2 className="mt-4 text-display-md">Designed Around Your Kind of Trip</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travelStyles.map((style, i) => (
            <Reveal key={style.name} delay={Math.min(i * 0.08, 0.3)}>
              <article
                className={cn(
                  "group relative overflow-hidden rounded-2xl shadow-card h-64",
                  style.emphasized && "sm:col-span-2"
                )}
              >
                <Image
                  src={style.image}
                  alt={style.alt}
                  fill
                  sizes={style.emphasized ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {style.emphasized && (
                    <span className="eyebrow mb-2 inline-block text-terracotta-light">Our Specialty</span>
                  )}
                  <h3 className={cn("font-display text-cream", style.emphasized ? "text-3xl" : "text-xl")}>
                    {style.name}
                  </h3>
                  <p className={cn("mt-2 text-cream/80", style.emphasized ? "max-w-sm text-base" : "text-sm")}>
                    {style.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
