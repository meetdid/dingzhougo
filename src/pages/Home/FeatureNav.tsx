import { Link } from "react-router-dom";
import { MapPin, Landmark, BookOpen, CalendarDays } from "lucide-react";
import AnimatedSection from "@/components/UI/AnimatedSection";

const features = [
  {
    icon: MapPin,
    title: "玩转定州",
    desc: "景点打卡，美食探店",
    path: "/travel",
    gradient: "from-primary-500 to-teal-500",
    bg: "bg-primary-50",
  },
  {
    icon: Landmark,
    title: "文化遗产",
    desc: "古迹寻踪，非遗体验",
    path: "/heritage",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: BookOpen,
    title: "攻略指南",
    desc: "实用攻略，轻松出行",
    path: "/guide",
    gradient: "from-teal-500 to-cyan-500",
    bg: "bg-teal-50",
  },
  {
    icon: CalendarDays,
    title: "活动动态",
    desc: "精彩活动，不容错过",
    path: "/events",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
  },
];

export default function FeatureNav() {
  return (
    <section className="py-16 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <Link
                to={feature.path}
                className="group block rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`w-7 h-7 bg-gradient-to-r ${feature.gradient} bg-clip-text`}
                    style={{
                      color: "transparent",
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  />
                </div>
                <h3 className="font-semibold text-ink-500 group-hover:text-primary-500 transition">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-ink-300">{feature.desc}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
