import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { attractionsData } from "@/data/attractions";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function AttractionSection() {
  const attractions = attractionsData.slice(0, 4);

  return (
    <section className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="热门打卡" subtitle="定州必去的好地方" />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <AnimatedSection key={attraction.id} delay={index * 0.1}>
              <Link
                to={`/travel/${attraction.id}`}
                className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="img-zoom aspect-[4/3] relative">
                  <img
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium">
                    <Star className="w-3.5 h-3.5 text-accent-400 fill-accent-400" />
                    {attraction.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-ink-500 group-hover:text-primary-500 transition">
                    {attraction.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-300 line-clamp-2">
                    {attraction.description}
                  </p>
                  <div className="mt-3 text-xs text-accent-500 font-medium">
                    {attraction.ticketPrice}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              to="/travel"
              className="group inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition"
            >
              发现更多好去处
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
