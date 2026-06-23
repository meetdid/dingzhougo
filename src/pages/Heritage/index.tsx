import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, Home, MapPin, Award } from "lucide-react";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { heritageData } from "@/data/heritage";

export default function Heritage() {
  const [activeCategory, setActiveCategory] = useState<string>("全部");

  const categories = ["全部", "古迹", "非遗"];

  const filteredHeritage =
    activeCategory === "全部"
      ? heritageData
      : heritageData.filter((h) => h.category === activeCategory);

  const heritageCount = {
    古迹: heritageData.filter((h) => h.category === "古迹").length,
    非遗: heritageData.filter((h) => h.category === "非遗").length,
  };

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
          <span className="text-primary-500">文化遗产</span>
        </nav>

        <AnimatedSection>
          <div className="mb-12 text-center">
            <h1 className="text-4xl text-primary-500 md:text-5xl">文化遗产</h1>
            <p className="mt-3 text-ink-300">千年古城的历史见证与非遗瑰宝</p>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-primary-400 to-accent-400" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary-500 to-teal-500 text-white shadow-lg"
                    : "bg-white text-ink-400 hover:bg-primary-50 hover:text-primary-500"
                }`}
              >
                {cat}
                {cat !== "全部" && (
                  <span className="ml-1 text-xs opacity-70">
                    ({heritageCount[cat as keyof typeof heritageCount]})
                  </span>
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionTitle
            title={activeCategory === "全部" ? "全部文化遗产" : activeCategory === "古迹" ? "历史古迹" : "非物质文化遗产"}
            subtitle={
              activeCategory === "全部"
                ? "探索定州珍贵的历史古迹与非物质文化遗产"
                : activeCategory === "古迹"
                ? "千年古城的建筑艺术瑰宝"
                : "传承千年的手工技艺与民间艺术"
            }
            center
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredHeritage.map((heritage) => (
              <Link
                key={heritage.id}
                to={`/heritage/${heritage.id}`}
                className="card-hover overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="img-zoom relative h-48">
                  <img
                    src={heritage.imageUrl}
                    alt={heritage.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block rounded-full bg-gradient-to-r from-primary-500 to-teal-500 px-3 py-1 text-xs font-medium text-white">
                      {heritage.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink-500">
                    {heritage.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-300">
                    {heritage.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-ink-400">
                      {heritage.level && (
                        <>
                          <Award className="h-3 w-3 text-accent-400" />
                          <span>{heritage.level}</span>
                        </>
                      )}
                    </div>
                    <span className="text-xs font-medium text-primary-500">
                      查看详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {filteredHeritage.length === 0 && (
          <div className="mt-12 text-center text-ink-300">
            暂无相关文化遗产
          </div>
        )}
      </div>
    </div>
  );
}
