import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function ItalySpotlight() {
  return (
    <section id="italy" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden select-none font-display text-[22vw] font-light leading-none text-cream/[0.04] md:block"
      >
        Italia
      </div>

      <div className="container relative grid gap-16 md:grid-cols-2 md:gap-12">
        <div className="order-2 md:order-1">
          <Reveal>
            <div className="relative">
              <p className="eyebrow text-terracotta-light">The Country That Inspired Everything</p>
              <h2 className="mt-4 text-display-md text-cream">
                Meet Your Consultant
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-cream/80">
            <p>Hi, I&apos;m Booker.</p>
            <p>
              I&apos;ve always believed the best trips aren&apos;t measured by how many places you visit, but
              by how deeply you experience them.
            </p>
            <p>
              A few years ago, I had the opportunity to spend an extended period living in Italy.
              During that time, I learned Italian, immersed myself in the culture, and explored
              everything from iconic cities to quiet villages that rarely make it into travel
              guides. Some of my favorite memories came from long train rides, family-owned
              restaurants, getting lost down cobblestone streets, and discovering places I never
              would have found if I had lived through the typical tourist experience.
            </p>
            <p>
              Those experiences changed the way I travel, and they&apos;re the reason I started Andare
              Travel. I love helping people experience Europe in a way that feels personal,
              authentic, and completely their own.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-9 border-l-2 border-terracotta pl-6">
            <p className="font-display text-2xl italic text-cream md:text-3xl">
              &ldquo;I can&apos;t wait to help you fall in love with Europe the way I did.&rdquo;
            </p>
          </Reveal>
        </div>

        <div className="order-1 md:order-2">
          <Reveal delay={0.05} className="relative mx-auto aspect-square max-w-md md:max-w-none md:aspect-auto md:h-[560px]">
            <div className="absolute left-0 top-0 h-[62%] w-[72%] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/florence-duomo-skyline.jpg"
                alt="The Florence skyline at dusk, with the dome of the Duomo rising above the rooftops"
                fill
                sizes="(min-width: 768px) 30vw, 60vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[55%] w-[58%] overflow-hidden rounded-2xl border-4 border-ink shadow-soft">
              <Image
                src="/images/venice-grand-canal-gondola.jpg"
                alt="The Grand Canal in Venice at sunset, with a gondola moored beside historic palazzos"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="absolute right-8 top-10 h-[30%] w-[32%] overflow-hidden rounded-xl border-4 border-ink shadow-soft md:right-10 md:top-6">
              <Image
                src="/images/cinque-terre-coastline.jpg"
                alt="The rugged coastline of Cinque Terre meeting the turquoise Ligurian Sea"
                fill
                sizes="20vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
