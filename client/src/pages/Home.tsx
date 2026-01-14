import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, Coffee, Wheat, Leaf, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

const STATIC_MENU = [
  { name: "Flat White", price: "3.80", category: "Coffee", description: "Double shot espresso with microfoam" },
  { name: "Filter Coffee", price: "3.50", category: "Coffee", description: "Rotating single origin beans" },
  { name: "Tofu Peanut Bao", price: "6.50", category: "Bao", description: "Steamed bun, marinated tofu, crushed peanuts" },
  { name: "Mushroom Hoisin Bao", price: "6.50", category: "Bao", description: "Glazed mushrooms, pickled cucumber" },
  { name: "Banana Bread", price: "3.50", category: "Sweets", description: "Toasted with vegan butter" }
];

const STATIC_GALLERY = [
  { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800", caption: "Morning light" },
  { url: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=800", caption: "Bao selection" },
  { url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800", caption: "Berlin vibes" }
];

const STATIC_HOURS = [
  { day: "Wed - Fri", hours: "12:00 - 18:00" },
  { day: "Sat - Sun", hours: "11:00 - 18:00" },
  { day: "Mon - Tue", hours: "Closed" }
];

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
            alt="Hero" className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-display font-bold leading-none tracking-tighter uppercase mb-6"
          >
            VUX Coffee
          </motion.h1>
          <p className="font-serif text-xl md:text-2xl text-neutral-800 italic max-w-2xl mx-auto mb-10">
            Specialty Coffee. Steamed Bao Buns. All Vegan.
          </p>
          <button 
            onClick={() => scrollTo('menu')}
            className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest border border-black px-8 py-4 hover:bg-black hover:text-white transition-all"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="about" className="py-24 px-6 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center space-x-12 mb-8">
            <div className="flex flex-col items-center space-y-2">
              <Coffee className="w-6 h-6 stroke-1" />
              <span className="text-[10px] uppercase tracking-widest">Coffee</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Wheat className="w-6 h-6 stroke-1" />
              <span className="text-[10px] uppercase tracking-widest">Bao</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Leaf className="w-6 h-6 stroke-1" />
              <span className="text-[10px] uppercase tracking-widest">Vegan</span>
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <p className="font-sans text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Menu" subtitle="Simple. Honest. Plant-based." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-12">
            {STATIC_MENU.map((item, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-neutral-200 pb-4">
                <div className="space-y-1">
                  <h3 className="font-display text-lg uppercase font-bold">{item.name}</h3>
                  <p className="font-serif text-sm text-neutral-500 italic">{item.description}</p>
                </div>
                <span className="font-mono">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATIC_GALLERY.map((item, idx) => (
            <div key={idx} className="relative aspect-square group overflow-hidden">
              <img src={item.url} alt={item.caption} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Visit Us" subtitle="Wipperstrasse 14, Berlin-Neukölln" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 mt-1 text-neutral-400" />
                <div>
                  <h4 className="font-display uppercase font-bold mb-2">Hours</h4>
                  <div className="space-y-1 text-neutral-600 font-serif">
                    {STATIC_HOURS.map((h, i) => (
                      <div key={i} className="flex justify-between w-40">
                        <span>{h.day}</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-1 text-neutral-400" />
                <div>
                  <h4 className="font-display uppercase font-bold mb-2">Contact</h4>
                  <a href="mailto:hello@vuxcoffee.com" className="text-neutral-600 hover:text-black transition-colors">hello@vuxcoffee.com</a>
                </div>
              </div>
              <div className="pt-4 flex space-x-6">
                <a href="#" className="font-display text-xs uppercase font-bold tracking-widest hover:underline">Instagram</a>
                <a href="#" className="font-display text-xs uppercase font-bold tracking-widest hover:underline">Facebook</a>
              </div>
            </div>
            <div className="h-80 bg-neutral-100 grayscale border border-neutral-200 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-neutral-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
