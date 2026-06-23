import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { cultureEventsData } from "@/data/city";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function EventsPreview() {
  const events = cultureEventsData.slice(0, 3);

  return (
    <section className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="近期活动" subtitle="精彩活动等你来" />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <AnimatedSection key={event.id} delay={index * 0.1}>
              <Link
                to={`/events/${event.id}`}
                className="group block rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary-500 to-teal-500 p-5 flex items-center gap-4">
                  <div className="text-center text-white min-w-[56px]">
                    <div className="text-2xl font-bold">{event.date.split("-")[0]}</div>
                    <div className="text-xs opacity-80">{event.date.split("-").slice(1).join("/")}</div>
                  </div>
                  <h3 className="text-white font-semibold line-clamp-2">
                    {event.title}
                  </h3>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-ink-400">
                    <MapPin className="w-4 h-4 shrink-0 text-primary-400" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-ink-300 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="mt-4 text-sm font-medium text-primary-500 group-hover:text-primary-600 transition">
                    了解详情 →
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition"
            >
              查看全部活动
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
