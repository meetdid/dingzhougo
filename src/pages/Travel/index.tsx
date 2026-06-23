import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { attractionsData } from "@/data/attractions";
import { foodData, cultureEventsData } from "@/data/city";
import AnimatedSection from "@/components/UI/AnimatedSection";
import AttractionGrid from "./AttractionGrid";
import FoodSection from "./FoodSection";
import CultureEvents from "./CultureEvents";

export default function Travel() {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-ink-300">
          <Link to="/" className="transition-colors hover:text-primary-500">
            首页
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-ink-500">玩转定州</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl text-primary-500 md:text-5xl">
          玩转定州
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink-300">
          带你发现定州好吃好玩有趣的地方
        </p>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-primary-400 to-accent-400" />
      </div>

      <AnimatedSection className="container mx-auto section-padding px-4">
        <AttractionGrid attractions={attractionsData} />
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="container mx-auto section-padding px-4">
        <FoodSection foods={foodData} />
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="container mx-auto section-padding px-4">
        <CultureEvents events={cultureEventsData} />
      </AnimatedSection>
    </div>
  );
}
