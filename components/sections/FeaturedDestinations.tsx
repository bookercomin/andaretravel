import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedDestinations() {
  const italy = destinations.find((d) => d.featured)!;
  const rest = destinations.filter((d) => !d.featured);

  return (
    <section id="experiences" className="section-pad bg-cream-dim">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Featured Destinations</p>
          <h2 className="mt-4 text-display-md">Where We Take Our Travelers</h2>
          <p className="mt-5 text-lg text-ink/70">
            Thirteen countries, one philosophy: travel beyond the guidebooks.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={0.05}>
          <article className="group relative grid overflow-hidden rounded-3xl shadow-soft md:grid-cols-2">
            <div className="relative h-72 md:h-full">
              <Image
                src={italy.image}
                alt={italy.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center bg-ink p-10 text-cream md:p-14">
              <p className="eyebrow text-terracotta-light">Our Specialty</p>
              <h3 className="mt-3 font-display text-4xl text-cream">Italy</h3>
              <p className="mt-5 max-w-md text-cream/75">{italy.description}</p>
              <Link
                href="#italy"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cream hover:text-terracotta-light"
              >
                Discover Italy <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((dest, i) => (
            <Reveal key={dest.slug} delay={Math.min(i * 0.06, 0.3)}>
              <article className="group relative overflow-hidden rounded-2xl shadow-card">
                <div className="relative h-64">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl text-cream">{dest.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-cream/80">{dest.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-terracotta-light">
                      Explore <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
