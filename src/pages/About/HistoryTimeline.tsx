import { HistoryEvent } from "@/data/city";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { cn } from "@/lib/utils";

interface HistoryTimelineProps {
  events: HistoryEvent[];
}

export default function HistoryTimeline({ events }: HistoryTimelineProps) {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container">
        <SectionTitle title="历史沿革" subtitle="千年古城的岁月印记" />
        <div className="relative mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-primary-400 to-teal-400 md:left-1/2 md:-translate-x-px" />
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 ring-4 ring-warm-50 md:left-1/2" />
                <div
                  className={cn(
                    "ml-12 md:ml-0 md:w-1/2",
                    isLeft ? "md:pr-12" : "md:ml-auto md:pl-12"
                  )}
                >
                  <AnimatedSection delay={index * 0.15}>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                      <span className="font-serif text-2xl text-primary-500">{event.year}</span>
                      <h3 className="mt-2 text-lg font-semibold text-ink-500">{event.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">{event.description}</p>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
