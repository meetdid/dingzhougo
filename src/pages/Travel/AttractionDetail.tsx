import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Ticket } from "lucide-react";
import { attractionsData } from "@/data/attractions";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function AttractionDetail() {
  const { id } = useParams();
  const attraction = attractionsData.find((a) => a.id === id);

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-500">未找到该景点</h2>
          <Link to="/travel" className="mt-4 text-primary-500 hover:underline">
            返回玩转定州页面
          </Link>
        </div>
      </div>
    );
  }

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
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
            <img
              src={attraction.imageUrl}
              alt={attraction.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-gradient-to-r from-primary-500 to-teal-500 px-3 py-1 text-xs font-medium text-white">
                {attraction.category}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                {attraction.name}
              </h1>
              <div className="mt-2 flex items-center gap-1 text-yellow-300">
                {"★".repeat(Math.floor(attraction.rating))}
                <span className="text-white/80 ml-1">{attraction.rating}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8">
          <div className="grid gap-4 md:grid-cols-3">
            {attraction.address && (
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                  <MapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-ink-400">地址</div>
                  <div className="font-medium text-ink-500">{attraction.address}</div>
                </div>
              </div>
            )}
            {attraction.openTime && (
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                  <Clock className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-ink-400">开放时间</div>
                  <div className="font-medium text-ink-500">{attraction.openTime}</div>
                </div>
              </div>
            )}
            {attraction.ticketPrice && (
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100">
                  <Ticket className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-ink-400">门票价格</div>
                  <div className="font-medium text-accent-500">{attraction.ticketPrice}</div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-bold text-primary-500">景点介绍</h2>
            <p className="leading-relaxed text-ink-400 whitespace-pre-wrap">
              {attraction.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-teal-500 p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5" />
              <span className="font-medium">游览建议</span>
            </div>
            <p className="text-sm text-white/90">
              建议游览时间2-3小时，请提前查看开放时间。节假日人流量较大，建议错峰出行。
              景区内设有游客服务中心，可提供咨询、寄存、租赁等服务。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
