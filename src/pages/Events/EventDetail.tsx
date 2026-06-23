import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Clock, User } from "lucide-react";
import { cultureEventsData } from "@/data/city";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function EventDetail() {
  const { id } = useParams();
  const event = cultureEventsData.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-500">未找到该活动</h2>
          <Link to="/events" className="mt-4 text-primary-500 hover:underline">
            返回活动动态页面
          </Link>
        </div>
      </div>
    );
  }

  const pastEvents = [
    { title: "2025祭孔大典", desc: "传统文化活动圆满举办", date: "2025-09" },
    { title: "古城文化节", desc: "吸引游客超10万人次", date: "2025-10" },
    { title: "中山文化研讨会", desc: "学术交流活动成功举办", date: "2025-05" },
  ];

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-primary-500"
        >
          <ArrowLeft className="h-4 w-4" />
          返回活动动态
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <AnimatedSection>
          <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-primary-500 to-teal-500 p-8 text-white">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm">
              即将举办
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">{event.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-bold text-primary-500">活动介绍</h2>
            <p className="leading-relaxed text-ink-400 whitespace-pre-wrap">
              {event.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary-50 to-teal-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary-500" />
              <span className="font-bold text-primary-500">参与方式</span>
            </div>
            <div className="space-y-3 text-sm text-ink-400">
              <p>• 活动时间：{event.date}</p>
              <p>• 活动地点：{event.location}</p>
              <p>• 参与方式：免费开放，无需报名</p>
              <p>• 建议提前30分钟到达现场</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-primary-500">往期精彩</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {pastEvents.map((past, idx) => (
                <div key={idx} className="rounded-xl bg-warm-50 p-4">
                  <div className="text-xs text-accent-500">{past.date}</div>
                  <h4 className="mt-2 font-semibold text-ink-500">{past.title}</h4>
                  <p className="mt-1 text-sm text-ink-300">{past.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-teal-500 p-6 text-white">
            <div className="mb-3 flex items-center gap-3">
              <User className="h-5 w-5" />
              <span className="font-bold">温馨提示</span>
            </div>
            <p className="text-sm text-white/90">
              请文明参与活动，爱护公共设施。保管好个人财物，遵守现场秩序。
              如有疑问可咨询现场工作人员。期待与您相见！
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
