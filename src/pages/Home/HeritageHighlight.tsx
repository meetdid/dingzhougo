import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { heritageData } from "@/data/heritage";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function HeritageHighlight() {
  const intangibleHeritage = heritageData.filter((h) => h.category === "非遗").slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border border-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">非遗瑰宝</h2>
            <p className="mt-2 bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">传承千年的匠心技艺</p>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-accent-400 to-accent-300" />
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {intangibleHeritage.map((heritage, index) => (
            <AnimatedSection key={heritage.id} delay={index * 0.15}>
              <Link
                to={`/heritage/${heritage.id}`}
                className="group block rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="img-zoom aspect-[16/10]">
                  <img
                    src={heritage.imageUrl}
                    alt={heritage.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block rounded-full bg-accent-400/20 text-accent-300 px-2.5 py-0.5 text-xs font-medium">
                      {heritage.type}
                    </span>
                    {heritage.level && (
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <Award className="w-3 h-3" />
                        {heritage.level.replace("非物质文化遗产", "非遗")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent-300 transition">
                    {heritage.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 line-clamp-2">
                    {heritage.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              to="/heritage"
              className="group inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition"
            >
              探索更多非遗
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
