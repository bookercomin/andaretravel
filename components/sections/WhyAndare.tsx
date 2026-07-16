import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function WhyAndare() {
  return (
    <section className="section-pad">
      <div className="container grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/images/venice-canal-boat.jpg"
              alt="A quiet Venetian canal lined with historic buildings, flowering balconies, and a wooden boat"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Why Andare</p>
          <h2 className="mt-4 text-display-md">Travel Like Someone Who Knows Europe</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
            <p>Most vacations are built around landmarks. We build journeys around experiences and relationships.</p>
            <p className="font-display text-xl italic text-ink/90">
              The hidden vineyard. The family-owned restaurant. The quiet village. The scenic train
              ride. The unforgettable sunset you&apos;ll still talk about years later.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
