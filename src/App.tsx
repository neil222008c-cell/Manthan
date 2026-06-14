/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Product, CartItem, MOCK_PRODUCTS } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import EditorialSection from "./components/EditorialSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import { X, Trash2, ShieldCheck, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Total item count inside shopping cart
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  // Handler to add individual product
  const handleAddToBag = (product: Product, size: string, color: string) => {
    const chosenSize = size || product.sizes[0] || "OS";
    const chosenColor = color || product.colors[0] || "";

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === chosenSize &&
          item.selectedColor === chosenColor
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [
        ...prevItems,
        {
          product,
          quantity: 1,
          selectedSize: chosenSize,
          selectedColor: chosenColor,
        },
      ];
    });
  };

  const handleUpdateQty = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const copy = [...prev];
      copy[index].quantity = quantity;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleMockCheckout = () => {
    setIsCheckingOut(true);
    // Simulate luxury order submission
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsCheckoutSuccess(true);
      setCartItems([]);
    }, 1800);
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-zinc-50 flex flex-col font-sans antialiased text-zinc-900 scroll-smooth">
      
      {/* 1. Header (Navbar) Component */}
      <Navbar
        cartCount={totalCartCount}
        onCartOpen={() => setIsCartOpen(true)}
        onSearchQueryChange={(query) => {
          setSearchQuery(query);
          if (query) {
            const el = document.getElementById("products-showcase");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* 2. Hero Interactive Campaign Panel */}
      <Hero />

      {/* 3. Category Showcase Grid Filter */}
      <Categories
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. Product Cards Grid Section list */}
      <ProductGrid
        products={MOCK_PRODUCTS}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onAddToBag={handleAddToBag}
        searchQuery={searchQuery}
      />

      {/* 5. Editorial Content Lookbook Campaign */}
      <EditorialSection />

      {/* 6. Testimonial Slides deck */}
      <Testimonials />

      {/* 7. Footer Block */}
      <Footer />

      {/* SLIDEOUT SHOPPING BAG DRAWER CONTAINER */}
      <AnimatePresence>
        {isCartOpen && (
          <div id="shopping-bag-drawer-root" className="fixed inset-0 z-50 overflow-hidden">
            
            {/* Sliding Drawer Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Slider Sheet frame */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className="w-screen max-w-md bg-white border-l border-zinc-100 flex flex-col justify-between shadow-2xl h-full"
              >
                
                {/* Header of Drawer */}
                <div className="p-6 border-b border-zinc-150 flex items-center justify-between bg-zinc-50">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-zinc-950" />
                    <h2 className="font-serif text-lg tracking-wide text-zinc-950 font-medium">
                      Shopping Bag ({totalCartCount})
                    </h2>
                  </div>
                  <button
                    id="close-shopping-bag-drawer-btn"
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 px-2.5 bg-zinc-200/60 hover:bg-zinc-200 text-zinc-700 transition-colors"
                    aria-label="Close Shopping Bag"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content / Items container */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  
                  {/* Empty Bag State */}
                  {cartItems.length === 0 && !isCheckoutSuccess && (
                    <div className="h-full flex flex-col items-center justify-center text-center py-20 px-4">
                      <span className="font-serif text-6xl text-zinc-200 italic mb-4 select-none">Empty.</span>
                      <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed tracking-wide">
                        Your architectural garment reservoir is currently void. Explore our latest ready-to-wear jackets, boots, and silver artifacts.
                      </p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="mt-6 bg-zinc-950 text-white text-xs uppercase tracking-[0.2em] font-sans py-3.5 px-6 hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        Return to Catalog
                      </button>
                    </div>
                  )}

                  {/* Checkout Success Screen layout */}
                  {isCheckoutSuccess && (
                     <motion.div
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="py-12 px-4 text-center flex flex-col items-center justify-center"
                     >
                       <div className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center mb-6">
                         <ShieldCheck className="w-6 h-6" />
                       </div>
                       <h3 className="font-serif text-xl sm:text-2xl font-light text-zinc-950 mb-3 tracking-wide">
                         Order Placed Successfully!
                       </h3>
                       <p className="text-xs text-zinc-500 font-sans font-light max-w-xs leading-relaxed tracking-wide mb-6">
                         Your secure reservation has been logged at our European workshop under transit registration. An archive validation check has been emailed to you.
                       </p>
                       <button
                         onClick={() => {
                           setIsCheckoutSuccess(false);
                           setIsCartOpen(false);
                         }}
                         className="bg-zinc-950 text-white text-xs uppercase tracking-[0.2em] font-sans py-3 px-6 hover:bg-zinc-800 transition-colors w-full"
                       >
                         Continue Archiving
                       </button>
                     </motion.div>
                  )}

                  {/* Cart Item rows list */}
                  {!isCheckoutSuccess && cartItems.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-4 pb-6 border-b border-zinc-100 last:border-b-0 items-start"
                    >
                      {/* Product side thumbnail */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 sm:w-20 aspect-[3/4] object-cover bg-zinc-100 border border-zinc-100"
                        referrerPolicy="no-referrer"
                      />

                      {/* Item details */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-sans">
                          {item.product.category} Collection
                        </span>
                        
                        <h4 className="font-serif text-xs sm:text-sm text-zinc-900 truncate font-normal leading-tight mt-0.5">
                          {item.product.name}
                        </h4>

                        <div className="flex items-center gap-3 mt-1.5 text-[10px] text-zinc-500 font-sans">
                          <span className="bg-zinc-100 px-2 py-0.5 border border-zinc-200">
                            Size: {item.selectedSize}
                          </span>
                          <span className="flex items-center gap-1 bg-zinc-100 px-2 py-0.5 border border-zinc-200">
                            Finish: 
                            <span
                              style={{ backgroundColor: item.selectedColor }}
                              className="w-2 h-2 rounded-full border border-zinc-300"
                            />
                          </span>
                        </div>

                        {/* Adjust qty indicators */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-zinc-200 bg-zinc-50 text-xs">
                            <button
                              onClick={() => handleUpdateQty(index, item.quantity - 1)}
                              className="px-2.5 py-1 text-zinc-500 hover:text-zinc-950 transition-colors"
                            >
                              -
                            </button>
                            <span className="px-2 py-1 text-zinc-950 font-medium font-sans">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQty(index, item.quantity + 1)}
                              className="px-2.5 py-1 text-zinc-500 hover:text-zinc-950 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          
                          <span className="text-xs font-sans text-zinc-950 font-medium ml-2">
                            ${item.product.price * item.quantity}.00
                          </span>
                        </div>

                      </div>

                      {/* Trash action button */}
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="p-1 px-1.5 text-zinc-400 hover:text-zinc-950 transition-all cursor-pointer"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                    </motion.div>
                  ))}

                </div>

                {/* Subtotals & checkout action footer row */}
                {cartItems.length > 0 && !isCheckoutSuccess && (
                  <div className="p-6 border-t border-zinc-150 bg-zinc-50 flex flex-col gap-4">
                    
                    {/* Price Summaries */}
                    <div className="space-y-1.5 text-xs text-zinc-650 font-sans">
                      <div className="flex justify-between">
                        <span>Courier Courier Subtotal</span>
                        <span className="text-zinc-950 font-medium">${subtotal}.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duty Ingress Taxes</span>
                        <span className="text-zinc-500 italic">Complimentary</span>
                      </div>
                      <div className="flex justify-between border-t border-zinc-200/60 pt-3 text-sm text-zinc-950 font-medium">
                        <span>Total Checkout Liability</span>
                        <span className="font-sans font-semibold">${subtotal}.00</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-2 space-y-2">
                      <button
                        id="checkout-trigger-btn"
                        onClick={handleMockCheckout}
                        disabled={isCheckingOut}
                        className="w-full bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-400 text-white text-xs uppercase tracking-[0.2em] font-sans py-4 font-normal transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isCheckingOut ? (
                          <span>Verifying Security Protocol...</span>
                        ) : (
                          <>
                            <span>Secure Checkout (Stripe Enabled)</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                        }}
                        className="w-full text-[10.5px] uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-950 font-sans transition-colors py-2 text-center"
                      >
                        Continue Wardrobe Architecture
                      </button>
                    </div>

                  </div>
                )}

              </motion.div>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

