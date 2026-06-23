import { Link } from "react-router-dom";
import { Star, Flame } from "lucide-react";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";
import type { FoodItem } from "@/data/city";

interface FoodSectionProps {
  foods: FoodItem[];
}

export default function FoodSection({ foods }: FoodSectionProps) {
  const featured = foods[0];
  const rest = foods.slice(1);

  return (
    <div>
      <AnimatedSection>
        <SectionTitle title="定州美食" subtitle="来了就得尝的地道风味" />
      </AnimatedSection>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedSection delay={0.1}>
          <Link
            to={`/food/${featured.id}`}
            className="group relative block h-full min-h-[320px] overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={featured.imageUrl}
              alt={featured.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-400 px-2.5 py-0.5 text-xs font-bold text-white">
                  <Flame className="w-3 h-3" />
                  必吃
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
                  <span className="text-white text-sm font-medium">{featured.rating}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">{featured.name}</h3>
              <p className="mt-2 text-sm text-white/70 line-clamp-3 leading-relaxed">
                {featured.description}
              </p>
              <div className="mt-3 text-sm text-white/50 group-hover:text-accent-300 transition">
                查看详情 →
              </div>
            </div>
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {rest.map((food) => (
              <Link
                key={food.id}
                to={`/food/${food.id}`}
                className="group flex gap-3 rounded-xl bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={food.imageUrl}
                    alt={food.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h4 className="font-semibold text-ink-500 text-sm group-hover:text-primary-500 transition truncate">
                    {food.name}
                  </h4>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.round(food.rating)
                            ? "fill-accent-400 text-accent-400"
                            : "text-ink-100"
                        }`}
                      />
                    ))}
                    <span className="ml-0.5 text-xs text-ink-300">{food.rating}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-300 line-clamp-2 leading-relaxed">
                    {food.description}
                  </p>
                  <span className="mt-1 text-xs text-primary-400 opacity-0 group-hover:opacity-100 transition">
                    点击查看详情
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
