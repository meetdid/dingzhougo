import { Link } from "react-router-dom";
import { ChevronRight, Home, MapPin, Clock, Phone, Utensils, Camera, Calendar } from "lucide-react";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { guideData } from "@/data/guides";

export default function Guide() {
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
          <span className="text-primary-500">攻略指南</span>
        </nav>

        <AnimatedSection>
          <div className="mb-12 text-center">
            <h1 className="text-4xl text-primary-500 md:text-5xl">攻略指南</h1>
            <p className="mt-3 text-ink-300">轻松玩转定州，实用攻略全在这</p>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-primary-400 to-accent-400" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionTitle title="热门攻略" subtitle="精选实用攻略，让你的旅程更轻松" center />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guideData.map((guide) => (
              <Link
                key={guide.id}
                to={`/guide/${guide.id}`}
                className="card-hover overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-teal-100 text-primary-500">
                  {guide.icon === "MapPin" && <MapPin className="h-6 w-6" />}
                  {guide.icon === "Utensils" && <Utensils className="h-6 w-6" />}
                  {guide.icon === "Camera" && <Camera className="h-6 w-6" />}
                  {guide.icon === "Clock" && <Clock className="h-6 w-6" />}
                  {guide.icon === "Calendar" && <Calendar className="h-6 w-6" />}
                  {guide.icon === "Phone" && <Phone className="h-6 w-6" />}
                </div>
                <h3 className="text-lg font-semibold text-ink-500">{guide.title}</h3>
                <p className="mt-2 text-sm text-ink-300">{guide.desc}</p>
                <button className="mt-4 text-sm font-medium text-primary-500 hover:text-primary-600">
                  查看详情 →
                </button>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-16">
          <SectionTitle title="实用信息" subtitle="出行前必备信息" center />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="mb-4 font-semibold text-primary-500">交通信息</h4>
              <ul className="space-y-2 text-sm text-ink-300">
                <li>• 距离石家庄机场60公里</li>
                <li>• 定州高铁站位于新区</li>
                <li>• 市区公交覆盖主要景点</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="mb-4 font-semibold text-primary-500">最佳旅游时间</h4>
              <ul className="space-y-2 text-sm text-ink-300">
                <li>• 春季（3-5月）最佳</li>
                <li>• 秋季（9-11月）气候宜人</li>
                <li>• 节假日游客较多建议错峰</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="mb-4 font-semibold text-primary-500">住宿推荐</h4>
              <ul className="space-y-2 text-sm text-ink-300">
                <li>• 市区酒店交通便利</li>
                <li>• 经济型民宿性价比高</li>
                <li>• 节假日建议提前预订</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
