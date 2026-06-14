import React, { useState } from "react";
import { Search, ShoppingBag, User, X, ArrowRight, Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
  onSearchQueryChange?: (query: string) => void;
}

export default function Navbar({ cartCount, onCartOpen, onSearchQueryChange }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchQueryChange) {
      onSearchQueryChange(searchVal);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (onSearchQueryChange) {
      onSearchQueryChange(val);
    }
  };

  return (
    <header id="global-header" className="sticky top-0 z-50 w-full">
      {/* Promo Bar */}
      <div id="promo-banner" className="w-full bg-zinc-950 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-sans py-2.5 text-zinc-100 text-center flex items-center justify-center gap-1.5 px-4">
        <span>Complimentary Courier Shipping on Orders over $250</span>
        <ArrowRight className="w-3 h-3 hover:translate-x-1 transition-transform cursor-pointer" />
      </div>

      {/* Main Navbar */}
      <nav id="main-navigation" className="w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <button
                id="toggle-mobile-menu"
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-600 hover:text-zinc-900 focus:outline-none p-1.5"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Navigation Links - Left */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#categories" className="text-xs uppercase tracking-[0.2em] font-sans text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group">
                Collections
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-350 group-hover:w-full"></span>
              </a>
              <a href="#products-showcase" className="text-xs uppercase tracking-[0.2em] font-sans text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group">
                Ready To Wear
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-350 group-hover:w-full"></span>
              </a>
              <a href="#curated-editorial" className="text-xs uppercase tracking-[0.2em] font-sans text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group">
                Editorial
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-350 group-hover:w-full"></span>
              </a>
            </div>

            {/* Logotype - Center */}
            <div className="flex-1 md:flex-none flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
              <a href="#" className="flex flex-col items-center select-none group">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.35em] text-zinc-950 font-semibold transition-all group-hover:text-zinc-700">
                  AURELIA
                </span>
                <span className="text-[7.5px] sm:text-[9px] tracking-[0.6em] text-zinc-400 font-sans uppercase -mt-0.5">
                  maison de design
                </span>
              </a>
            </div>

            {/* Utility Icons - Right */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              
              {/* Search Toggle icon or expanded search bar */}
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.form
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 180, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onSubmit={handleSearchSubmit}
                      className="hidden sm:block mr-2"
                    >
                      <input
                        type="text"
                        placeholder="Search collection..."
                        value={searchVal}
                        onChange={handleSearchChange}
                        className="w-full text-xs bg-zinc-50 border border-zinc-200 outline-none rounded-none py-1.5 px-3 focus:border-zinc-500 font-sans tracking-wide"
                      />
                    </motion.form>
                  )}
                </AnimatePresence>
                
                <button
                  id="search-trigger-btn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-zinc-600 hover:text-zinc-950 transition-colors p-1"
                  aria-label="Search Collection"
                >
                  <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>

              {/* User Account Mock Button */}
              <button
                id="user-account-btn"
                className="text-zinc-600 hover:text-zinc-950 transition-colors p-1"
                aria-label="User Account"
              >
                <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* Shopping Bag Interactive button */}
              <button
                id="shopping-cart-toggle-btn"
                onClick={onCartOpen}
                className="text-zinc-600 hover:text-zinc-950 transition-colors relative p-1 flex items-center justify-center group"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:scale-105 transition-transform" />
                
                {/* Bag Item Counter Badge */}
                <span className="absolute -top-1 -right-1 bg-zinc-950 text-white font-sans font-medium text-[8px] sm:text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* Mobile menu expanded */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden border-t border-zinc-100 bg-white overflow-hidden"
            >
              <div className="px-5 pt-3 pb-6 space-y-4">
                <div className="pb-3 border-b border-zinc-100">
                  <input
                    type="text"
                    placeholder="Search collection..."
                    value={searchVal}
                    onChange={handleSearchChange}
                    className="w-full text-xs bg-zinc-50 border border-zinc-200 outline-none py-2 px-3 font-sans tracking-wide"
                  />
                </div>
                <a
                  href="#categories"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.2em] font-sans text-zinc-700 hover:text-zinc-950"
                >
                  Collections
                </a>
                <a
                  href="#products-showcase"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.2em] font-sans text-zinc-700 hover:text-zinc-950"
                >
                  Ready To Wear
                </a>
                <a
                  href="#curated-editorial"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.2em] font-sans text-zinc-700 hover:text-zinc-950"
                >
                  Editorial
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.2em] font-sans text-zinc-700 hover:text-zinc-950"
                >
                  Reviews
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
