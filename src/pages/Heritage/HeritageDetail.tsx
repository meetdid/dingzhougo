import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Award, Clock } from "lucide-react";
import { heritageData } from "@/data/heritage";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function HeritageDetail() {
  const { id } = useParams();
  const heritage = heritageData.find((h) => h.id === id);

  if (!heritage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-500">未找到该文化遗产</h2>
          <Link to="/heritage" className="mt-4 text-primary-500 hover:underline">
            返回文化遗产页面
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/heritage"
          className="inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-primary-500"
        >
          <ArrowLeft className="h-4 w-4" />
          返回文化遗产
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <AnimatedSection>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
            <img
              src={heritage.imageUrl}
              alt={heritage.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-gradient-to-r from-primary-500 to-teal-500 px-3 py-1 text-xs font-medium text-white">
                {heritage.category}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                {heritage.name}
              </h1>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {heritage.level && (
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                  <Award className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-ink-400">保护级别</div>
                  <div className="font-medium text-ink-500">{heritage.level}</div>
                </div>
              </div>
            )}
            {heritage.type && (
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                  <Calendar className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-ink-400">类别</div>
                  <div className="font-medium text-ink-500">{heritage.type}</div>
                </div>
              </div>
            )}
            {heritage.address && (
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                  <MapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-ink-400">地址</div>
                  <div className="font-medium text-ink-500">{heritage.address}</div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-bold text-primary-500">详细介绍</h2>
            <p className="leading-relaxed text-ink-400 whitespace-pre-wrap">
              {heritage.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-teal-500 p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5" />
              <span className="font-medium">温馨提示</span>
            </div>
            <p className="text-sm text-white/90">
              {heritage.category === "古迹"
                ? `建议游览时间2-3小时，请文明参观，保护文物。开放时间请以景区实际情况为准。`
                : `如需了解更多非遗技艺，可关注定州非遗传承基地举办的展示活动。`}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
