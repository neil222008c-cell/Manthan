import { MOCK_TESTIMONIALS } from "../types";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? MOCK_TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === MOCK_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-50 border-t border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-sans font-medium block mb-2">
            DESIGN PATRON SATISFACTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-zinc-950">
            Voices of the <span className="italic font-normal">Maison.</span>
          </h2>
          <div className="w-8 h-[1.5px] bg-zinc-900 mx-auto mt-4"></div>
        </div>

        {/* Highlight Quote Layout Slider */}
        <div className="max-w-4xl mx-auto relative px-8">
          <div className="absolute top-0 left-0 text-zinc-200/90 pointer-events-none select-none">
            <Quote className="w-16 h-16 -mt-6 -ml-4" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="text-center relative z-10 flex flex-col items-center pt-8"
            >
              {/* Star Rating Block */}
              <div className="flex gap-1 mb-6 text-zinc-900">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4.5 h-4.5 fill-current ${
                      i < MOCK_TESTIMONIALS[activeIndex].rating
                        ? "text-zinc-950"
                        : "text-zinc-200"
                    }`}
                  />
                ))}
              </div>

              {/* Customer Review Paragraph */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-light text-zinc-800 leading-relaxed max-w-2xl">
                "{MOCK_TESTIMONIALS[activeIndex].quote}"
              </blockquote>

              {/* Customer Profile Block */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={MOCK_TESTIMONIALS[activeIndex].avatar}
                  alt={MOCK_TESTIMONIALS[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover border border-zinc-200 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <cite className="not-italic text-sm font-medium font-sans text-zinc-950 block">
                    {MOCK_TESTIMONIALS[activeIndex].name}
                  </cite>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-light block">
                    {MOCK_TESTIMONIALS[activeIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Slider Pagers */}
          <div className="flex items-center justify-center gap-4 mt-12 z-20 relative">
            <button
              id="prev-testimonial-btn"
              onClick={handlePrev}
              className="border border-zinc-350 hover:border-zinc-950 hover:bg-zinc-100 text-zinc-700 p-3 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            
            {/* Quick Indicator Dots */}
            <div className="flex items-center gap-1.5 px-2">
              {MOCK_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-350 ${
                    idx === activeIndex
                      ? "bg-zinc-950 w-4"
                      : "bg-zinc-300 hover:bg-zinc-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="next-testimonial-btn"
              onClick={handleNext}
              className="border border-zinc-350 hover:border-zinc-950 hover:bg-zinc-100 text-zinc-700 p-3 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Multi-feature details columns layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 border-t border-zinc-200/60 pt-16 text-center max-w-5xl mx-auto">
          <div className="px-4">
            <span className="font-serif text-3xl font-light text-zinc-900 block mb-3">100%</span>
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-zinc-400 mb-2">Trackable Wool Trace</h4>
            <p className="text-xs font-sans text-zinc-500 font-light leading-relaxed max-w-xs mx-auto">
              We list the exact sheep farm cooperatives in Provence and Piedmont that produce our thermal yarn structures.
            </p>
          </div>
          <div className="px-4 border-y sm:border-y-0 sm:border-x border-zinc-200/60 py-8 sm:py-0">
            <span className="font-serif text-3xl font-light text-zinc-900 block mb-3">03 Carbon</span>
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-zinc-400 mb-2">Offset standard</h4>
            <p className="text-xs font-sans text-zinc-500 font-light leading-relaxed max-w-xs mx-auto">
              Every parcel shipping emission is computed and offset by purchasing verified local bio-reserve conservation bonds.
            </p>
          </div>
          <div className="px-4">
            <span className="font-serif text-3xl font-light text-zinc-900 block mb-3">5 Year</span>
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-zinc-400 mb-2">Seam Warranty</h4>
            <p className="text-xs font-sans text-zinc-500 font-light leading-relaxed max-w-xs mx-auto">
              Aurelia elements are formulated for heirloom longevity. We execute state-of-the-art lining and reinforcement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
