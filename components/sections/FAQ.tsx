import { Reveal } from "@/components/motion/Reveal";

export const faqs = [
  {
    question: "How far in advance should I start planning my Italy trip?",
    answer:
      "For custom itineraries, we recommend starting 4–9 months ahead, especially for peak season (May–September) or honeymoons at in-demand properties along the Amalfi Coast or Lake Como.",
  },
  {
    question: "Do you only plan trips to Italy?",
    answer:
      "Italy is our specialty, but we design custom itineraries across Europe, including France, Switzerland, Greece, Croatia, and more.",
  },
  {
    question: "What's the difference between DIY Planning and Concierge Planning?",
    answer:
      "With DIY Planning, we hand you a custom itinerary and recommendations, and you handle the bookings. With Concierge Planning, we coordinate reservations and logistics for you from start to finish.",
  },
  {
    question: "Can you plan a honeymoon in Italy?",
    answer:
      "Yes — honeymoon planning is one of our core specialties, from the Amalfi Coast and Tuscany to Lake Como and beyond.",
  },
];

export function FAQ() {
  return (
    <section className="section-pad">
      <div className="container max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">Good to Know</p>
          <h2 className="mt-4 text-display-md">Frequently Asked Questions</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-cream-dim">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.06, 0.24)} className="p-7 md:p-8">
              <h3 className="font-display text-lg text-ink">{faq.question}</h3>
              <p className="mt-2 text-ink/70">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
