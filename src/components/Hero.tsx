import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero-section" className="relative w-full h-[85vh] sm:h-[90vh] bg-zinc-950 flex items-center overflow-hidden">
      
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 w-full h-full select-none">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 12, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Autumn Winter Editorial"
          className="w-full h-full object-cover object-[center_35%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-white flex flex-col justify-between h-full pt-28 pb-12 sm:pt-36 sm:pb-16">
        
        {/* Subtle Top Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <span className="w-6 h-[1px] bg-zinc-400"></span>
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-zinc-300 font-sans font-medium">
            New Collection / Noir Volume 04
          </span>
        </motion.div>

        {/* Core Slogan & CTAs */}
        <div className="my-auto max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-zinc-50"
          >
            The Great <br className="hidden sm:block" />
            <span className="font-normal italic text-zinc-300">Architecture</span> <br />
            of Overwear.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 text-sm sm:text-base text-zinc-300 max-w-lg font-sans font-light leading-relaxed tracking-wide"
          >
            Curating garments as structured habitable envelopes. Every stitch is placed with geometric purpose, fabricated in sustainable French wool and Italian knit staples.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              id="hero-primary-cta"
              href="#products-showcase"
              className="bg-white text-zinc-950 font-sans font-normal text-xs uppercase tracking-[0.2em] py-4 px-8 text-center hover:bg-zinc-100 transition-colors duration-350 flex items-center justify-center gap-2 group"
            >
              Shop New Arrivals
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <a
              id="hero-secondary-cta"
              href="#categories"
              className="border border-zinc-500/50 text-zinc-200 font-sans font-normal text-xs uppercase tracking-[0.2em] py-4 px-8 text-center hover:border-zinc-100 hover:text-white transition-colors duration-350 bg-black/10 backdrop-blur-xs"
            >
              View Editorial Archive
            </a>
          </motion.div>
        </div>

        {/* Scrolling Signifier & Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-end justify-between border-t border-zinc-800/60 pt-6"
        >
          <div className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.25em] text-zinc-400 font-sans uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">ORIGIN</span>
              <span className="text-zinc-300">FRANCE & ITALY</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">COMPOSITION</span>
              <span className="text-zinc-300">100% RECYCLED WOOL</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">PHILOSOPHY</span>
              <span className="text-zinc-300">SLOW-MADE ARTIFACTS</span>
            </div>
          </div>

          <a
            href="#categories"
            className="flex items-center space-x-3 text-[10px] tracking-[0.25em] text-zinc-400 hover:text-white transition-colors uppercase font-sans py-2"
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-100"></span>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
