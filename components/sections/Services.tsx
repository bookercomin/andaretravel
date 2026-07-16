import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 text-display-md">A Level of Planning for Every Traveler</h2>
          <p className="mt-5 text-lg text-ink/70">
            From a proven itinerary template to a fully personalized concierge experience, choose
            the level of support that fits how you like to travel.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={Math.min(i * 0.08, 0.3)}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft",
                  service.highlight
                    ? "border-terracotta bg-ink text-cream"
                    : "border-ink/10 bg-cream-dim text-ink"
                )}
              >
                <h3 className={cn("font-display text-xl", service.highlight && "text-cream")}>
                  {service.name}
                </h3>
                <p
                  className={cn(
                    "mt-4 font-display text-3xl",
                    service.highlight ? "text-terracotta-light" : "text-terracotta-dark"
                  )}
                >
                  {service.price}
                </p>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    service.highlight ? "text-cream/75" : "text-ink/70"
                  )}
                >
                  {service.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={cn(
                          "mt-0.5 shrink-0",
                          service.highlight ? "text-terracotta-light" : "text-olive"
                        )}
                      />
                      <span className={service.highlight ? "text-cream/85" : "text-ink/80"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={service.highlight ? "light" : "secondary"}
                  className="mt-8 w-full"
                >
                  Get Started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
