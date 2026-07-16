import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function BookACall() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/venice-sunset-silhouette-bw.jpg"
          alt="Silhouette of a European skyline against a glowing sun over the water at sunset"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="container relative text-center">
        <Reveal>
          <p className="eyebrow text-terracotta-light">Let&apos;s Talk</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-display-md text-cream">
            Let&apos;s Plan Something You&apos;ll Remember Forever.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80">
            A complimentary consultation, no obligation — just a conversation about the trip you&apos;re
            dreaming about.
          </p>
          <Button size="lg" variant="light" className="mt-9">
            Book My Complimentary Consultation
          </Button>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl rounded-2xl border border-cream/20 bg-cream/10 p-6 text-sm text-cream/70 backdrop-blur-sm">
          Calendly scheduling embed placeholder — will display available consultation times here.
        </Reveal>
      </div>
    </section>
  );
}
