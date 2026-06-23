import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cityInfo } from "@/data/city";

function useCountUp(target: number, duration: number = 2000, active: boolean = true): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let animationId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration, active]);

  return count;
}

const stats = [
  { value: 130, suffix: "万", label: "人口" },
  { value: 1283, suffix: "平方公里", label: "面积" },
  { value: 450, suffix: "亿元", label: "GDP" },
  { value: 2600, suffix: "余年", label: "建城历史" },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, isInView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-3xl text-white md:text-4xl">
        <span className="text-accent-400">{count}</span>
        <span className="ml-1 text-lg md:text-xl">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-white/80">{label}</div>
    </div>
  );
}

export default function CityIntro() {
  return (
    <section className="relative flex min-h-[80vh] flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Aerial%20view%20of%20Chinese%20ancient%20city%20with%20modern%20buildings%2C%20pagoda%20tower%20in%20center%2C%20green%20river%2C%20Dingzhou%20city&image_size=landscape_16_9)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl text-white md:text-7xl"
        >
          定州
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          {cityInfo.description}
        </motion.p>
      </div>
      <div className="relative z-10 bg-gradient-to-r from-primary-500 to-teal-500/90 px-4 py-8 md:px-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
