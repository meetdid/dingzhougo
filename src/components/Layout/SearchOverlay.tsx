import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, MapPin, Utensils, BookOpen, Landmark, CalendarDays } from "lucide-react";
import { attractionsData } from "@/data/attractions";
import { heritageData } from "@/data/heritage";
import { guideData } from "@/data/guides";
import { foodData, cultureEventsData } from "@/data/city";

interface SearchResult {
  id: string;
  title: string;
  desc: string;
  category: string;
  categoryLabel: string;
  icon: React.ReactNode;
  link: string;
}

const categoryConfig: Record<string, { label: string; icon: React.ReactNode; getLink: (id: string) => string }> = {
  attraction: { label: "景点", icon: <MapPin className="w-4 h-4" />, getLink: (id) => `/travel/${id}` },
  heritage: { label: "文化遗产", icon: <Landmark className="w-4 h-4" />, getLink: (id) => `/heritage/${id}` },
  food: { label: "美食", icon: <Utensils className="w-4 h-4" />, getLink: (id) => `/food/${id}` },
  guide: { label: "攻略", icon: <BookOpen className="w-4 h-4" />, getLink: (id) => `/guide/${id}` },
  event: { label: "活动", icon: <CalendarDays className="w-4 h-4" />, getLink: (id) => `/events/${id}` },
};

function buildAllResults(): SearchResult[] {
  const results: SearchResult[] = [];

  attractionsData.forEach((a) => {
    results.push({
      id: a.id,
      title: a.name,
      desc: a.description,
      category: "attraction",
      categoryLabel: categoryConfig.attraction.label,
      icon: categoryConfig.attraction.icon,
      link: categoryConfig.attraction.getLink(a.id),
    });
  });

  heritageData.forEach((h) => {
    results.push({
      id: h.id,
      title: h.name,
      desc: h.description,
      category: "heritage",
      categoryLabel: categoryConfig.heritage.label,
      icon: categoryConfig.heritage.icon,
      link: categoryConfig.heritage.getLink(h.id),
    });
  });

  foodData.forEach((f) => {
    results.push({
      id: f.id,
      title: f.name,
      desc: f.description,
      category: "food",
      categoryLabel: categoryConfig.food.label,
      icon: categoryConfig.food.icon,
      link: categoryConfig.food.getLink(f.id),
    });
  });

  guideData.forEach((g) => {
    results.push({
      id: g.id,
      title: g.title,
      desc: g.desc,
      category: "guide",
      categoryLabel: categoryConfig.guide.label,
      icon: categoryConfig.guide.icon,
      link: categoryConfig.guide.getLink(g.id),
    });
  });

  cultureEventsData.forEach((e) => {
    results.push({
      id: e.id,
      title: e.title,
      desc: e.description,
      category: "event",
      categoryLabel: categoryConfig.event.label,
      icon: categoryConfig.event.icon,
      link: categoryConfig.event.getLink(e.id),
    });
  });

  return results;
}

const allResults = buildAllResults();

const hotKeywords = ["开元寺塔", "定州焖子", "定瓷", "缂丝", "一日游", "贡院", "鸭梨"];

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return allResults.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.categoryLabel.includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchResult[]>();
    filtered.forEach((r) => {
      const list = map.get(r.category) || [];
      list.push(r);
      map.set(r.category, list);
    });
    return map;
  }, [filtered]);

  const handleResultClick = () => {
    setOpen(false);
  };

  const handleHotKeyword = (kw: string) => {
    setQuery(kw);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filtered.length > 0) {
      navigate(filtered[0].link);
      setOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-full bg-warm-100 px-3 py-1.5 text-sm text-ink-400 transition-colors duration-300 hover:bg-primary-50 hover:text-primary-500"
      >
        <Search size={16} />
        <span className="hidden sm:inline">搜索</span>
        <kbd className="hidden ml-1 rounded bg-warm-200 px-1.5 py-0.5 text-[10px] text-ink-300 sm:inline-block">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative mx-auto mt-[10vh] w-full max-w-2xl px-4">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <form onSubmit={handleSubmit} className="flex items-center border-b border-warm-200 px-4">
                <Search className="h-5 w-5 shrink-0 text-ink-300" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="搜索景点、美食、攻略、活动..."
                  className="flex-1 px-3 py-4 text-base outline-none placeholder:text-ink-200"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="shrink-0 rounded-full p-1 text-ink-300 hover:bg-warm-100 hover:text-ink-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="ml-2 shrink-0 rounded-md border border-warm-200 px-2 py-0.5 text-xs text-ink-300 hover:bg-warm-100"
                >
                  ESC
                </button>
              </form>

              <div className="max-h-[60vh] overflow-y-auto">
                {!query.trim() && (
                  <div className="px-4 py-5">
                    <div className="text-xs font-medium text-ink-300 mb-3">热门搜索</div>
                    <div className="flex flex-wrap gap-2">
                      {hotKeywords.map((kw) => (
                        <button
                          key={kw}
                          onClick={() => handleHotKeyword(kw)}
                          className="rounded-full bg-warm-100 px-3 py-1.5 text-sm text-ink-400 transition hover:bg-primary-50 hover:text-primary-500"
                        >
                          {kw}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {query.trim() && filtered.length === 0 && (
                  <div className="px-4 py-10 text-center">
                    <div className="text-4xl mb-3">🔍</div>
                    <p className="text-ink-300">没有找到「{query}」相关内容</p>
                    <p className="mt-1 text-xs text-ink-200">试试换个关键词搜索</p>
                  </div>
                )}

                {Array.from(grouped.entries()).map(([category, items]) => {
                  const config = categoryConfig[category];
                  return (
                    <div key={category} className="border-t border-warm-100 first:border-t-0">
                      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
                        <span className="text-primary-500">{config.icon}</span>
                        <span className="text-xs font-medium text-ink-300">{config.label}</span>
                        <span className="text-xs text-ink-200">({items.length})</span>
                      </div>
                      <div className="px-2 pb-2">
                        {items.slice(0, 5).map((item) => (
                          <Link
                            key={`${category}-${item.id}`}
                            to={item.link}
                            onClick={handleResultClick}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-primary-50"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warm-100 text-ink-300">
                              {config.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-ink-500 truncate">
                                {item.title}
                              </div>
                              <div className="text-xs text-ink-300 truncate">
                                {item.desc.slice(0, 60)}...
                              </div>
                            </div>
                            <span className="shrink-0 text-xs text-ink-200">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {query.trim() && filtered.length > 0 && (
                  <div className="border-t border-warm-100 px-4 py-3 text-center text-xs text-ink-200">
                    共找到 {filtered.length} 条结果，按回车跳转第一条
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
