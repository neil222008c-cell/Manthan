import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function EditorialSection() {
  return (
    <section id="curated-editorial" className="py-28 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Stack */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            
            {/* Background geometric block */}
            <div className="absolute inset-y-12 right-12 left-0 bg-zinc-50 pointer-events-none -z-10" />

            {/* Inset Main lookbook Model block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-8 bg-zinc-100 aspect-[3/4] overflow-hidden shadow-xs border border-zinc-200/40 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?q=80&w=800&auto=format&fit=crop"
                alt="Autumn Winter Campaign model posing"
                className="w-full h-full object-cover grayscale-[15%] hover:scale-103 transition-transform duration-[6s]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Label */}
              <div className="absolute top-4 left-4 bg-zinc-950 text-white font-mono text-[8px] uppercase tracking-[0.2em] px-2 py-1">
                CAMPAIGN NOIR / VOL 04
              </div>
            </motion.div>

            {/* Secondary details close-up blocks */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-5 col-start-8 -mt-24 sm:-mt-36 z-15 bg-zinc-100 aspect-[4/5] overflow-hidden shadow-md border border-zinc-200/50"
            >
              <img
                src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600&auto=format&fit=crop"
                alt="Close-up design fabric stitch texture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[4s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* floating designer annotation */}
            <div className="col-span-4 col-start-1 text-left pt-6 hidden sm:block">
              <span className="font-serif text-5xl italic text-zinc-300 font-light select-none">Atelier.</span>
              <p className="text-[10px] font-sans font-light text-zinc-400 uppercase tracking-[0.2em] mt-1.5 leading-relaxed">
                N° 1024 / Provence Drafts
              </p>
            </div>

          </div>

          {/* Right Column: Editorial story manifest */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-sans font-medium block mb-3">
              THE ART OF THE FORM
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4.5xl font-light tracking-tight text-zinc-950 leading-[1.12]">
              Designed for life. <br />
              Tailored for <span className="font-normal italic text-zinc-700">Heritage.</span>
            </h2>

            <div className="w-16 h-[1.5px] bg-zinc-950 my-6"></div>

            <p className="text-xs sm:text-sm text-zinc-500 font-sans font-light leading-relaxed tracking-wide space-y-4">
              Our designs reject the high-turnover noise of fast wardrobe cycles. We treat clothing as wearable architectures, crafting items that provide a protective, comfortable, and structured envelope for the human body.
              <br />
              <br />
              Each piece undergoes multiple rounds of fitting and adjustment in our French workshop to guarantee perfect drape, pocket alignment, and seam durability. We partner exclusively with small European spinning mills that utilize regeneratively farmed fibers.
            </p>

            {/* Interactive Sourcing Accordions */}
            <div className="mt-8 border-t border-zinc-200/60 flex flex-col pt-4 gap-4">
              
              <div className="flex items-center justify-between text-xs tracking-wider font-sans group cursor-pointer hover:text-zinc-950 py-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 font-mono">01</span>
                  <span className="text-zinc-700 group-hover:text-zinc-950 font-normal">REGENERATIVE SOURCING PROMISE</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
              </div>

              <div className="flex items-center justify-between text-xs tracking-wider font-sans group cursor-pointer hover:text-zinc-950 py-1 border-t border-zinc-100 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 font-mono">02</span>
                  <span className="text-zinc-700 group-hover:text-zinc-950 font-normal">LOCAL EUROPEAN MANUFACTURE</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
              </div>

              <div className="flex items-center justify-between text-xs tracking-wider font-sans group cursor-pointer hover:text-zinc-950 py-1 border-t border-zinc-100 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 font-mono">03</span>
                  <span className="text-zinc-700 group-hover:text-zinc-950 font-normal">HEIRLOOM CARE COMPANIONSHIP</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
