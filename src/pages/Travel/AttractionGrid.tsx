import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star } from "lucide-react";
import type { Attraction } from "@/data/attractions";

interface AttractionGridProps {
  attractions: Attraction[];
}

const categories = ["全部", "古迹", "自然", "文化", "休闲"] as const;

export default function AttractionGrid({ attractions }: AttractionGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("全部");

  const filtered =
    activeCategory === "全部"
      ? attractions
      : attractions.filter((a) => a.category === activeCategory);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-primary-500 to-teal-500 text-white shadow-lg"
                : "bg-white text-ink-400 hover:bg-primary-50 hover:text-primary-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((attraction) => (
          <Link
            key={attraction.id}
            to={`/travel/${attraction.id}`}
            className="card-hover overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div className="img-zoom relative h-56">
              <img
                src={attraction.imageUrl}
                alt={attraction.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  {attraction.name}
                </h3>
                <div className="mt-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
                  <span className="text-sm text-white/90">
                    {attraction.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 p-4">
              <div className="flex items-center gap-2 text-sm text-ink-400">
                <MapPin className="h-4 w-4 shrink-0 text-primary-500" />
                <span className="truncate">{attraction.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-400">
                <Clock className="h-4 w-4 shrink-0 text-primary-500" />
                <span>{attraction.openTime}</span>
              </div>
              <div className="pt-1 text-sm font-medium text-accent-500">
                {attraction.ticketPrice}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
