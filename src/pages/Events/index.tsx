import { Link } from "react-router-dom";
import { ChevronRight, Home, Calendar, MapPin } from "lucide-react";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { cultureEventsData } from "@/data/city";

export default function Events() {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-1 text-sm text-ink-300">
          <Link
            to="/"
            className="flex items-center gap-1 transition-colors hover:text-primary-500"
          >
            <Home className="h-4 w-4" />
            首页
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary-500">活动动态</span>
        </nav>

        <AnimatedSection>
          <div className="mb-12 text-center">
            <h1 className="text-4xl text-primary-500 md:text-5xl">活动动态</h1>
            <p className="mt-3 text-ink-300">不错过定州精彩活动</p>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-primary-400 to-accent-400" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionTitle title="近期活动" subtitle="正在进行或即将开始的精彩活动" center />
          <div className="mt-8 space-y-6">
            {cultureEventsData.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="card-hover flex flex-col gap-6 overflow-hidden rounded-2xl bg-white p-6 shadow-sm md:flex-row"
              >
                <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 px-6 py-4 text-center text-white min-w-[100px]">
                  <div className="text-3xl font-bold">{event.date.split("-")[0]}</div>
                  <div className="text-sm opacity-80">{event.date.split("-").slice(1).join("-")}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-ink-500">{event.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-ink-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </span>
                  </div>
                  <p className="mt-3 text-ink-300">{event.description}</p>
                  <button className="mt-4 rounded-full bg-gradient-to-r from-primary-500 to-teal-500 px-5 py-2 text-sm font-medium text-white hover:shadow-lg transition">
                    了解详情
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-16">
          <SectionTitle title="往期精彩" subtitle="回顾定州精彩活动" center />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "2025祭孔大典", desc: "传统文化活动圆满举办", date: "2025-09" },
              { title: "古城文化节", desc: "吸引游客超10万人次", date: "2025-10" },
              { title: "中山文化研讨会", desc: "学术交流活动成功举办", date: "2025-05" },
            ].map((item, idx) => (
              <div key={idx} className="card-hover overflow-hidden rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-xs text-accent-500">{item.date}</div>
                <h4 className="mt-2 font-semibold text-ink-500">{item.title}</h4>
                <p className="mt-2 text-sm text-ink-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
