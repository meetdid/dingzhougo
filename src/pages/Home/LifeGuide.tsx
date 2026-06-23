import { Sun, Phone, Bus, Heart, Building2, UtensilsCrossed, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";

const quickLinks = [
  { icon: Phone, label: "便民热线", value: "12345", color: "text-primary-500", bg: "bg-primary-50" },
  { icon: Bus, label: "公交查询", value: "实时线路", color: "text-teal-500", bg: "bg-teal-50" },
  { icon: Heart, label: "医院挂号", value: "在线预约", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Building2, label: "政务咨询", value: "一站式办理", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: UtensilsCrossed, label: "美食推荐", value: "本地好味道", color: "text-orange-500", bg: "bg-orange-50", link: "/guide/2" },
  { icon: Compass, label: "出行攻略", value: "交通住宿", color: "text-cyan-500", bg: "bg-cyan-50", link: "/guide/6" },
];

export default function LifeGuide() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-teal-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="生活便利贴" subtitle="在定州，这些信息用得上" />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-sm flex flex-col items-center text-center h-full justify-center">
              <div className="w-16 h-16 rounded-full bg-accent-50 flex items-center justify-center mb-3">
                <Sun className="w-8 h-8 text-accent-500" />
              </div>
              <span className="text-3xl font-bold text-primary-500">26°C</span>
              <span className="mt-1 text-ink-400 text-sm">晴</span>
              <span className="mt-2 text-xs text-ink-200">
                {new Date().toLocaleDateString("zh-CN", {
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {quickLinks.map((item) => {
                const content = (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink-500">{item.label}</div>
                      <div className="text-xs text-ink-300 mt-0.5">{item.value}</div>
                    </div>
                  </div>
                );

                if (item.link) {
                  return (
                    <Link key={item.label} to={item.link}>
                      {content}
                    </Link>
                  );
                }
                return <div key={item.label}>{content}</div>;
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
