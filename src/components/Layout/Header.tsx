import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchOverlay from "./SearchOverlay";

const navItems = [
  { label: "首页", path: "/" },
  { label: "玩转定州", path: "/travel" },
  { label: "文化遗产", path: "/heritage" },
  { label: "攻略指南", path: "/guide" },
  { label: "活动动态", path: "/events" },
  { label: "关于定州", path: "/about" },
];

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-warm-200 bg-white/90 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-md"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">定州</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">go</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors duration-300 hover:text-primary-400",
                  isActive
                    ? "text-primary-500"
                    : "text-ink-500"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <SearchOverlay />

          <button
            className="text-ink-400 transition-colors duration-300 hover:text-primary-400 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-64 transform bg-white shadow-xl transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-end px-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-ink-400 transition-colors duration-300 hover:text-primary-400"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "border-b border-warm-200 py-3 text-base font-medium transition-colors duration-300 hover:text-primary-400",
                  isActive ? "text-primary-500" : "text-ink-500"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
