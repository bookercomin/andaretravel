import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function PlanningProcess() {
  return (
    <section className="section-pad">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-4 text-display-md">A Simple, Guided Process</h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-8">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-8 hidden h-px w-[calc(100%-4rem)] -translate-x-1/2 bg-ink/15 md:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative flex flex-col items-center text-center md:items-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-terracotta bg-cream font-display text-xl text-terracotta-dark">
                {step.number}
              </div>
              <h3 className="mt-6 font-display text-xl">{step.title}</h3>
              <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-ink/65">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
