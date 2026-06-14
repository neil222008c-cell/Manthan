import React, { useState } from "react";
import { ArrowRight, Instagram, Twitter, Mail, Info, Pocket } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 5000);
    }
  };

  return (
    <footer id="global-footer" className="bg-zinc-950 text-zinc-400 font-sans py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column: Newsletter signup & Brand Slogan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl tracking-[0.35em] text-white font-semibold block mb-2">
                AURELIA
              </span>
              <span className="text-[8.5px] tracking-[0.6em] text-zinc-500 uppercase block font-light">
                maison de design
              </span>
            </div>
            
            <p className="mt-8 text-sm text-zinc-400 font-light leading-relaxed max-w-sm tracking-wide">
              An independent studio formulating garments as architectural volumes. Designed for quiet heirloom permanence, tailored with uncompromising high-grain natural fabrications.
            </p>
          </div>

          <div id="newsletter-subscription-box" className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.25em] text-zinc-300 font-sans uppercase block mb-3 font-medium">
              SUBSCRIBE TO THE ARCHIVE
            </span>
            <p className="text-xs text-zinc-500 font-light mb-6 tracking-wide max-w-xl leading-relaxed">
              Receive private invitations to private capsule edits, architectural design drafts, and curated seasonal lookbooks. Zero redundant marketing — only pure design updates.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex max-w-lg border border-zinc-800 focus-within:border-zinc-400 transition-colors"
                >
                  <div className="relative flex-1 flex items-center px-4 bg-zinc-950">
                    <Mail className="w-4 h-4 text-zinc-500 mr-2" />
                    <input
                      type="email"
                      placeholder="Enter email address..."
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs font-sans text-white bg-transparent outline-none py-4"
                    />
                  </div>
                  <button
                    id="submit-newsletter-btn"
                    type="submit"
                    className="bg-white text-zinc-950 hover:bg-zinc-200 transition-colors px-6 text-xs uppercase tracking-widest font-normal flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Receive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-zinc-900 border border-zinc-805 max-w-lg text-white font-sans text-xs tracking-wide flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-white text-zinc-950 rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>
                    Your coordinate is registered. Welcome to Aurelia's private digital archives.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Middle row: Structured Site lists & Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 text-xs">
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white font-medium">MAISON</h4>
            <ul className="flex flex-col gap-3 font-light text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Manifesto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainable Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Atelier Atelier Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artisan Biographies</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white font-medium">COLLECTIONS</h4>
            <ul className="flex flex-col gap-3 font-light text-zinc-400">
              <li><a href="#products-showcase" className="hover:text-white transition-colors">Autumn/Winter Noir</a></li>
              <li><a href="#products-showcase" className="hover:text-white transition-colors">Structured Outerwear</a></li>
              <li><a href="#products-showcase" className="hover:text-white transition-colors">Premium Knit staples</a></li>
              <li><a href="#products-showcase" className="hover:text-white transition-colors">Calfskin Case bags</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white font-medium">ASSISTANCE</h4>
            <ul className="flex flex-col gap-3 font-light text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Couriers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Secure Returns Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tailoring Consultancy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Atelier</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white font-medium">LEGAL</h4>
            <ul className="flex flex-col gap-3 font-light text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Ordinance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Disclosure</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col justify-between items-start lg:items-end gap-6 mt-8 lg:mt-0">
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors" aria-label="Pinterest">
                <Pocket className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[10.5px] text-zinc-500 leading-relaxed font-light font-mono text-left lg:text-right">
              <span>Aurelia, SRL</span> <br />
              <span>Hangar Q8, Zone Industrielle</span> <br />
              <span>Provence, France</span>
            </div>
          </div>

        </div>

        {/* Lower Row: Copyright labels */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] font-light text-zinc-500 font-mono">
          <span>© {new Date().getFullYear()} Aurelia Corporation. All Intellectual Standards Retained.</span>
          <span className="flex items-center gap-1">
            <Info className="w-3 h-3" />
            <span>Ecologically Manufactured in France & Italy</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
