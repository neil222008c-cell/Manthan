import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface Category {
  key: string;
  title: string;
  subtitle: string;
  image: string;
}

const CATEGORIES_DATA: Category[] = [
  {
    key: "outerwear",
    title: "Outerwear & Jackets",
    subtitle: "Tailored structures of recycled French wool",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop",
  },
  {
    key: "knitwear",
    title: "Structured Knitwear",
    subtitle: "Heavy-gauge organic cotton wraps",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=687&auto=format&fit=crop",
  },
  {
    key: "accessories",
    title: "Aesthetic Accessories",
    subtitle: "Geometric sterling silver & calfskin accordion cases",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=687&auto=format&fit=crop",
  },
  {
    key: "footwear",
    title: "Footwear & Boots",
    subtitle: "Vulcanized raw-leather combat foundations",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=687&auto=format&fit=crop",
  },
];

interface CategoriesProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Categories({ activeCategory, onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-24 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 font-sans font-medium block mb-2.5">
              SECTIONS SHOWCASE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-zinc-950">
              Curated Sculptures of <br />
              <span className="italic font-normal text-zinc-700">Daily Wardrobe.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-xs sm:text-sm text-zinc-500 font-sans font-light leading-relaxed tracking-wide">
            Filter our entire catalog dynamically by highlighting a category block. Each category reflects a focus on clean volume, raw craft, and exceptional structural comfort.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((category) => {
            const isSelected = activeCategory === category.key;
            return (
              <motion.div
                key={category.key}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => onSelectCategory(isSelected ? "all" : category.key)}
                className={`group cursor-pointer bg-white relative flex flex-col justify-between overflow-hidden border transition-all duration-300 aspect-[3/4] ${
                  isSelected 
                    ? "border-zinc-950 shadow-md ring-1 ring-zinc-950" 
                    : "border-zinc-200/60 hover:border-zinc-400"
                }`}
              >
                {/* Image Wrap */}
                <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-zinc-100">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-zinc-950/10" />
                </div>

                {/* Selected Tag */}
                {isSelected && (
                  <div className="absolute top-4 left-4 z-20 bg-zinc-950 text-white font-sans text-[8px] uppercase tracking-[0.2em] px-2 py-1">
                    Active Filter
                  </div>
                )}

                {/* Content Overlay */}
                <div className="relative mt-auto p-6 z-10 text-white flex flex-col">
                  <span className="text-[9px] tracking-[0.25em] text-zinc-300 font-sans uppercase mb-1.5 font-light">
                    EXPLORE COLLECTION
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl tracking-wide font-normal">
                    {category.title}
                  </h3>
                  <p className="text-[10.5px] text-zinc-300 font-sans font-light mt-1.5 opacity-80 leading-relaxed max-w-[90%]">
                    {category.subtitle}
                  </p>
                  
                  {/* Bottom Inline Action */}
                  <div className="flex items-center space-x-2 mt-4 text-[9px] tracking-[0.2em] font-sans uppercase text-white font-medium group-hover:translate-x-1.5 transition-transform duration-300">
                    <span>{isSelected ? "RESET FILTER" : "CHOOSE SECTION"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner helper text */}
        {activeCategory !== "all" && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onSelectCategory("all")}
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-950 border-b border-zinc-300 hover:border-zinc-950 transition-colors pb-1.5 font-medium"
            >
              Showing only {activeCategory}. Click here to clear filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
