import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Store, Lightbulb, Coins } from "lucide-react";
import { foodData } from "@/data/city";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function FoodDetail() {
  const { id } = useParams();
  const food = foodData.find((f) => f.id === id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-500">未找到该美食</h2>
          <Link to="/travel" className="mt-4 text-primary-500 hover:underline">
            返回玩转定州
          </Link>
        </div>
      </div>
    );
  }

  const otherFoods = foodData.filter((f) => f.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/travel"
          className="inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-primary-500"
        >
          <ArrowLeft className="h-4 w-4" />
          返回玩转定州
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <AnimatedSection>
          <div className="relative h-[260px] md:h-[360px] overflow-hidden rounded-2xl">
            <img
              src={food.imageUrl}
              alt={food.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(food.rating)
                          ? "fill-accent-400 text-accent-400"
                          : "text-white/30"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-white font-medium">{food.rating}</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white md:text-4xl">{food.name}</h1>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-6">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                <MapPin className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <div className="text-xs text-ink-400">在哪吃</div>
                <div className="text-sm font-medium text-ink-500 line-clamp-1">{food.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-100 to-orange-100">
                <Coins className="h-6 w-6 text-accent-500" />
              </div>
              <div>
                <div className="text-xs text-ink-400">参考价格</div>
                <div className="text-sm font-medium text-accent-500">{food.price}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm col-span-2 md:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-pink-100">
                <Lightbulb className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <div className="text-xs text-ink-400">小贴士</div>
                <div className="text-sm font-medium text-ink-500 line-clamp-1">{food.tips}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-bold text-primary-500">详细介绍</h2>
            <p className="leading-relaxed text-ink-400 whitespace-pre-wrap">{food.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-5 h-5 text-primary-500" />
              <h2 className="text-lg font-bold text-primary-500">推荐店铺</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {food.shops.map((shop, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary-50 to-teal-50 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-teal-500 text-sm font-bold text-white">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium text-ink-500">{shop}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-6">
          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-teal-500 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5" />
              <span className="font-bold">吃货小贴士</span>
            </div>
            <p className="text-sm text-white/90">{food.tips}</p>
          </div>
        </AnimatedSection>

        {otherFoods.length > 0 && (
          <AnimatedSection delay={0.5} className="mt-8">
            <h2 className="mb-4 text-lg font-bold text-primary-500">还想尝尝</h2>
            <div className="grid gap-4 grid-cols-3">
              {otherFoods.map((item) => (
                <Link
                  key={item.id}
                  to={`/food/${item.id}`}
                  className="group rounded-xl bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-2">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-ink-500 group-hover:text-primary-500 transition truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-accent-400 text-accent-400" />
                    <span className="text-xs text-ink-300">{item.rating}</span>
                    <span className="text-xs text-ink-200 ml-auto">{item.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
