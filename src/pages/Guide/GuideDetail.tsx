import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Users, Lightbulb } from "lucide-react";
import { guideData } from "@/data/guides";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function GuideDetail() {
  const { id } = useParams();
  const guide = guideData.find((g) => g.id === id);

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-500">未找到该攻略</h2>
          <Link to="/guide" className="mt-4 text-primary-500 hover:underline">
            返回攻略指南页面
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/guide"
          className="inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-primary-500"
        >
          <ArrowLeft className="h-4 w-4" />
          返回攻略指南
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <AnimatedSection>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary-500 md:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-3 text-lg text-ink-300">{guide.desc}</p>
          </div>
        </AnimatedSection>

        {guide.bestTime && (
          <AnimatedSection delay={0.1}>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              {guide.bestTime && (
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                    <Calendar className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-400">最佳时间</div>
                    <div className="font-medium text-ink-500">{guide.bestTime}</div>
                  </div>
                </div>
              )}
              {guide.duration && (
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                    <Clock className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-400">建议时长</div>
                    <div className="font-medium text-ink-500">{guide.duration}</div>
                  </div>
                </div>
              )}
              {guide.suitable && (
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                    <Users className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-400">适合人群</div>
                    <div className="font-medium text-ink-500">{guide.suitable}</div>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-bold text-primary-500">详细内容</h2>
            <div className="prose prose-lg max-w-none">
              {guide.content.split('\n').map((paragraph, idx) => (
                paragraph.trim() && <p key={idx} className="mb-4 leading-relaxed text-ink-400 whitespace-pre-wrap">{paragraph}</p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {guide.tips && guide.tips.length > 0 && (
          <AnimatedSection delay={0.3}>
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary-500 to-teal-500 p-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="h-6 w-6" />
                <span className="text-lg font-bold">实用小贴士</span>
              </div>
              <ul className="space-y-2">
                {guide.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
