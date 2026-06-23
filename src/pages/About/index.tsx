import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cityInfo } from "@/data/city";
import AnimatedSection from "@/components/UI/AnimatedSection";
import CityIntro from "./CityIntro";
import HistoryTimeline from "./HistoryTimeline";
import ContactSection from "./ContactSection";

export default function About() {
  return (
    <div>
      <CityIntro />
      <div className="bg-warm-50">
        <AnimatedSection>
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-ink-300">
              <Link to="/" className="flex items-center gap-1 hover:text-primary-500">
                <Home className="h-4 w-4" />
                首页
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-ink-500">关于定州</span>
            </nav>
          </div>
        </AnimatedSection>
        <HistoryTimeline events={cityInfo.history} />
        <ContactSection />
      </div>
    </div>
  );
}
