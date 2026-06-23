import { MapPin } from "lucide-react";
import SectionTitle from "@/components/Layout/SectionTitle";
import type { CultureEvent } from "@/data/city";

interface CultureEventsProps {
  events: CultureEvent[];
}

export default function CultureEvents({ events }: CultureEventsProps) {
  return (
    <div>
      <SectionTitle title="文化活动" subtitle="参与定州文化盛事" />

      <div className="space-y-4">
        {events.map((event) => {
          const parts = event.date.split(/[月日-]/);
          const month = parts[0]?.replace(/[^\d]/g, "") || "";
          const day = parts[1]?.replace(/[^\d]/g, "") || "";

          return (
            <div
              key={event.id}
              className="card-hover flex gap-5 rounded-lg bg-white p-5 shadow-sm"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-primary-500 text-white">
                {day ? (
                  <>
                    <span className="text-2xl font-bold leading-none">
                      {day}
                    </span>
                    <span className="mt-1 text-xs">{month}月</span>
                  </>
                ) : (
                  <span className="px-2 text-center text-xs leading-tight">
                    {event.date}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-ink-500">
                  {event.title}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-ink-300">
                  <MapPin className="h-4 w-4 shrink-0 text-primary-500" />
                  <span>{event.location}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-300">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
