import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20city%20panorama%20with%20pagoda%20tower%20and%20traditional%20architecture%2C%20golden%20hour%20lighting%2C%20aerial%20view%2C%20Dingzhou%20ancient%20city%2C%20dramatic%20clouds%2C%20cinematic&image_size=landscape_16_9"
          alt="定州古城"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-warm-50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-accent-400" />
          千年古都 · 活力新城
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl text-white font-bold leading-tight"
        >
          定州
          <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
            go
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/80 mt-4 font-light"
        >
          探索定州，发现属于你的精彩
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base text-white/60 mt-3"
        >
          古迹寻踪 · 非遗体验 · 美食探店 · 活力生活
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            to="/travel"
            className="group bg-gradient-to-r from-primary-500 to-teal-500 text-white px-8 py-3.5 rounded-full font-medium hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            开始探索
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            to="/heritage"
            className="border-2 border-white/40 text-white px-8 py-3.5 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:-translate-y-1"
          >
            探秘非遗
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
