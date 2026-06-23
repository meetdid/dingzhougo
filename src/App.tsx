import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Home from "@/pages/Home";
import Travel from "@/pages/Travel";
import AttractionDetail from "@/pages/Travel/AttractionDetail";
import FoodDetail from "@/pages/Travel/FoodDetail";
import Heritage from "@/pages/Heritage";
import HeritageDetail from "@/pages/Heritage/HeritageDetail";
import Guide from "@/pages/Guide";
import GuideDetail from "@/pages/Guide/GuideDetail";
import Events from "@/pages/Events";
import EventDetail from "@/pages/Events/EventDetail";
import About from "@/pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-warm-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/travel/:id" element={<AttractionDetail />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/heritage/:id" element={<HeritageDetail />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/:id" element={<GuideDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}
