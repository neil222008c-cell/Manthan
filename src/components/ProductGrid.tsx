import React, { useState } from "react";
import { Product } from "../types";
import { Plus, Eye, ShoppingCart, Star, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onAddToBag: (product: Product, size: string, color: string) => void;
  searchQuery: string;
}

export default function ProductGrid({
  products,
  activeCategory,
  onSelectCategory,
  onAddToBag,
  searchQuery,
}: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalSize, setModalSize] = useState("");
  const [modalColor, setModalColor] = useState("");
  const [justAddedNotify, setJustAddedNotify] = useState<string | null>(null);

  // Filter products by category AND search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenQuickView = (product: Product) => {
    setSelectedProduct(product);
    setModalSize(product.sizes[0] || "OS");
    setModalColor(product.colors[0] || "");
  };

  const handleCloseQuickView = () => {
    setSelectedProduct(null);
  };

  const handleModalAddToBag = () => {
    if (selectedProduct) {
      onAddToBag(selectedProduct, modalSize, modalColor);
      setJustAddedNotify(selectedProduct.name);
      setTimeout(() => setJustAddedNotify(null), 3000);
      handleCloseQuickView();
    }
  };

  const handleDirectAddToBag = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || "OS";
    const defaultColor = product.colors[0] || "";
    onAddToBag(product, defaultSize, defaultColor);
    setJustAddedNotify(product.name);
    setTimeout(() => setJustAddedNotify(null), 3000);
  };

  return (
    <section id="products-showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Elements */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-sans font-medium block mb-2">
            CONTEMPORARY ASSEMBLAGE
          </span>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-light tracking-tight text-zinc-950">
            Selected Seasonal Wardrobe.
          </h2>
          <div className="w-12 h-[1.5px] bg-zinc-900 mx-auto mt-6"></div>
        </div>

        {/* Categories Tab Selector Bar */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 mb-16 border-b border-zinc-100 pb-8">
          {["all", "outerwear", "knitwear", "accessories", "footwear"].map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`text-xs font-sans uppercase tracking-[0.2em] py-2 px-5 transition-all duration-300 ${
                  isSelected
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50 border border-transparent"
                }`}
              >
                {cat === "all" ? "All Editions" : cat}
              </button>
            );
          })}
        </div>

        {/* Global Notification Banner if item added */}
        <AnimatePresence>
          {justAddedNotify && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 bg-zinc-950 text-white font-sans text-xs tracking-wider p-4 flex items-center justify-between shadow-xl border border-zinc-800 gap-6 w-80 rounded-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-white text-zinc-950 rounded-full flex items-center justify-center">
                  <Check className="w-3 select-none" />
                </div>
                <span>
                  <strong>{justAddedNotify}</strong> added to bag.
                </span>
              </div>
              <button
                onClick={() => setJustAddedNotify(null)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state under filters */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center">
            <p className="text-zinc-400 font-sans text-sm tracking-wide">
              No architectural garments match your exact selection filter.
            </p>
            <button
              onClick={() => onSelectCategory("all")}
              className="mt-4 bg-zinc-900 text-white text-xs uppercase tracking-[0.2em] font-sans py-3 px-6 hover:bg-zinc-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Interactive Responsive Grid of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group relative flex flex-col justify-between"
            >
              {/* Product Frame */}
              <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden border border-zinc-100 mb-4 cursor-pointer" onClick={() => handleOpenQuickView(product)}>
                
                {/* Badges (New, Sale, Popular) */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
                  {product.isNew && (
                    <span className="bg-zinc-950 text-zinc-50 font-sans font-medium text-[8px] uppercase tracking-[0.2em] px-2 py-0.5">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-zinc-500 text-white font-sans font-medium text-[8px] uppercase tracking-[0.2em] px-2 py-0.5">
                      Sale
                    </span>
                  )}
                  {product.isPopular && (
                    <span className="bg-amber-800 text-white font-sans font-medium text-[8px] uppercase tracking-[0.2em] px-2 py-0.5">
                      Popular
                    </span>
                  )}
                </div>

                {/* Primary Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Secondary Hover Image */}
                <img
                  src={product.secondaryImage}
                  alt={`${product.name} styling angle`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Visual Action Overlay Buttons */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    id={`quick-add-${product.id}`}
                    onClick={(e) => handleDirectAddToBag(product, e)}
                    className="flex-1 bg-white hover:bg-zinc-950 hover:text-white text-zinc-950 font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] py-2.5 px-3 flex items-center justify-center gap-1.5 shadow-sm transition-all duration-250 cursor-pointer"
                    aria-label={`Buy ${product.name}`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Quick Add</span>
                  </button>
                  <button
                    id={`quick-view-${product.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenQuickView(product);
                    }}
                    className="bg-zinc-950 hover:bg-zinc-800 text-white p-2.5 shadow-sm transition-colors cursor-pointer"
                    aria-label={`Quickview ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Ambient glow wrapper */}
                <div className="absolute inset-0 bg-black/3 pointer-events-none group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Product Info Block */}
              <div className="flex flex-col gap-1 px-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-sans font-light">
                  {product.category}
                </span>
                
                <h3 className="font-serif text-sm tracking-wide text-zinc-900 font-normal hover:text-zinc-600 transition-colors cursor-pointer" onClick={() => handleOpenQuickView(product)}>
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-sans text-zinc-900 font-medium">
                      ${product.price}.00
                    </span>
                    {product.originalPrice && (
                      <span className="text-[10px] font-sans text-zinc-400 line-through">
                        ${product.originalPrice}.00
                      </span>
                    )}
                  </div>
                  
                  {/* Small Star rating */}
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-zinc-400 fill-zinc-400" />
                    <span className="text-[10px] font-sans text-zinc-500 font-light">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Multi Color Swatches representation */}
                <div className="flex gap-1.5 mt-2">
                  {product.colors.map((colorVal) => (
                    <span
                      key={colorVal}
                      style={{ backgroundColor: colorVal }}
                      className="w-2.5 h-2.5 border border-zinc-200"
                    />
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Callout row */}
        <div className="mt-20 border-t border-zinc-200/60 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-serif text-lg italic text-zinc-500">Pure Craft.</span>
            <div className="w-[1.5px] h-4 bg-zinc-200 hidden md:block"></div>
            <span className="text-zinc-400 font-sans text-xs font-light max-w-md">
              Every item is packaged in flat-packed, custom unpainted recycled greyboard presentation boxes.
            </span>
          </div>
          <a
            href="#curated-editorial"
            className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-zinc-900 hover:text-zinc-650 border-b border-zinc-900 pb-1 self-start md:self-auto"
          >
            Read Our Sourcing Standard →
          </a>
        </div>

      </div>

      {/* QUICK VIEW SLIDEOUT MODAL SCREEN */}
      <AnimatePresence>
        {selectedProduct && (
          <div id="quickview-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseQuickView}
              className="absolute inset-0 bg-zinc-950"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto"
            >
              
              {/* Close Button element */}
              <button
                id="close-quickview-btn"
                onClick={handleCloseQuickView}
                className="absolute top-4 right-4 z-30 bg-zinc-100 hover:bg-zinc-200 p-2.5 rounded-none text-zinc-600 transition-colors"
                aria-label="Close dialogue"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Multi Image slider or primary illustration preview */}
              <div className="w-full md:w-1/2 aspect-square relative bg-zinc-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Secondary styling corner flag */}
                <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-xs py-1.5 px-3.5">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-zinc-800 font-medium whitespace-nowrap">
                    Slow Crafted Standard / No. {selectedProduct.id}
                  </span>
                </div>
              </div>

              {/* Right Column: Spec Selector details */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  
                  {/* Category Details */}
                  <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-sans uppercase block mb-1">
                    {selectedProduct.category} Collection
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl tracking-wide text-zinc-950 font-medium">
                    {selectedProduct.name}
                  </h3>

                  {/* Price Row */}
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-base font-sans text-zinc-950 font-semibold">
                      ${selectedProduct.price}.00
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs font-sans text-zinc-400 line-through">
                        ${selectedProduct.originalPrice}.00
                      </span>
                    )}
                    <span className="bg-zinc-100 text-zinc-600 px-2 py-0.5 text-[8.5px] uppercase tracking-wider font-sans ml-auto">
                      Duty Included
                    </span>
                  </div>

                  {/* Ratings Bar */}
                  <div className="flex items-center gap-1.5 mt-4 text-zinc-500 text-xs">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(selectedProduct.rating)
                              ? "fill-amber-500"
                              : "text-zinc-200 fill-zinc-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-sans text-[11px] font-normal tracking-wide text-zinc-600">
                      {selectedProduct.rating} rating / {selectedProduct.reviewsCount} verified reviews
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 font-sans font-light leading-relaxed mt-5 border-t border-b border-zinc-100 py-4 tracking-wide">
                    {selectedProduct.description}
                  </p>

                  {/* Size Configurator */}
                  {selectedProduct.sizes && selectedProduct.sizes[0] !== "OS" && (
                    <div className="mt-5">
                      <span className="text-[10px] tracking-[0.2em] text-zinc-400 font-sans uppercase block mb-2">
                        CHOOSE SIZE (Standard Fit)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setModalSize(size)}
                            className={`w-10 h-10 border text-xs font-sans tracking-wide transition-all ${
                              modalSize === size
                                ? "border-zinc-950 bg-zinc-950 text-white font-medium"
                                : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Color Swatch Selector */}
                  <div className="mt-5">
                    <span className="text-[10px] tracking-[0.2em] text-zinc-400 font-sans uppercase block mb-2">
                      CHOOSE FINISH
                    </span>
                    <div className="flex items-center gap-3">
                      {selectedProduct.colors.map((colorHex) => (
                        <button
                          key={colorHex}
                          onClick={() => setModalColor(colorHex)}
                          style={{ backgroundColor: colorHex }}
                          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-transform ${
                            modalColor === colorHex
                              ? "scale-110 ring-2 ring-zinc-950 ring-offset-2 border-zinc-400"
                              : "border-zinc-300 hover:scale-105"
                          }`}
                        >
                          {modalColor === colorHex && (
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                colorHex === "#fafafa" || colorHex === "#efeae2" || colorHex === "#f4f4f5"
                                  ? "bg-zinc-950"
                                  : "bg-white"
                              }`}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* CTA Action button in footer of quickview modal */}
                <div className="mt-8">
                  <button
                    id="add-from-modal-btn"
                    onClick={handleModalAddToBag}
                    className="w-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs uppercase tracking-[0.2em] font-sans py-4 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add To Shopping Bag ( Duty Free )</span>
                  </button>
                  <p className="text-[9.5px] text-center text-zinc-400 font-sans mt-3 tracking-wide">
                    Shipped internationally with carbon-neutral courier logistics. Returns accepted within 14 days.
                  </p>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
