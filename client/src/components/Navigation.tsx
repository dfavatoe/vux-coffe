import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const links = [
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "visit", label: "Visit" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-3xl font-bold tracking-tighter uppercase font-display hover:opacity-70 transition-opacity"
        >
          VUX
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium uppercase tracking-widest link-underline transition-colors font-sans text-neutral-500 hover:text-black"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-neutral-100 rounded-none transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-background border-b border-black/10 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-8 text-center">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-2xl font-display uppercase tracking-wider hover:text-neutral-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
