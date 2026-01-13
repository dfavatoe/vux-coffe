import { useMenu } from "@/hooks/use-menu";
import { useGallery } from "@/hooks/use-gallery";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, Coffee, Wheat, Leaf } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { data: menuItems } = useMenu();
  const { data: galleryItems } = useGallery();

  const featuredMenu = menuItems?.filter(item => item.isAvailable).slice(0, 4);
  const featuredGallery = galleryItems?.slice(0, 3);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Unsplash: Minimalist coffee shop interior, black and white aesthetic */}
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-8xl md:text-[10rem] font-display font-bold leading-none tracking-tighter uppercase mb-6"
          >
            VUX Coffee
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-xl md:text-2xl text-neutral-800 italic max-w-2xl mx-auto mb-10"
          >
            Specialty Coffee. Steamed Bao Buns. All Vegan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/menu" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300">
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center space-x-12 mb-8">
            <div className="flex flex-col items-center space-y-4">
              <Coffee className="w-8 h-8 stroke-1" />
              <span className="text-xs uppercase tracking-widest">Specialty Roast</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Wheat className="w-8 h-8 stroke-1" />
              <span className="text-xs uppercase tracking-widest">Handmade Bao</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Leaf className="w-8 h-8 stroke-1" />
              <span className="text-xs uppercase tracking-widest">100% Vegan</span>
            </div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-neutral-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <p className="font-sans text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeader 
              title="Selected Items" 
              subtitle="A glimpse into our daily rotation."
              className="mb-0"
            />
            <Link href="/menu" className="hidden md:block link-underline text-sm uppercase tracking-widest pb-1">
              See All Items
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8">
            {featuredMenu ? (
              featuredMenu.map((item) => (
                <div key={item.id} className="group flex justify-between items-baseline border-b border-neutral-200 pb-4 hover:border-black transition-colors duration-300">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl uppercase font-bold group-hover:pl-2 transition-all">{item.name}</h3>
                    <p className="font-serif text-sm text-neutral-500 italic">{item.description}</p>
                  </div>
                  <span className="font-mono text-lg">{item.price}</span>
                </div>
              ))
            ) : (
              // Loading skeletons
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="h-20 bg-neutral-200 animate-pulse" />
              ))
            )}
          </div>
          
          <div className="mt-12 md:hidden text-center">
            <Link href="/menu" className="link-underline text-sm uppercase tracking-widest pb-1">
              See All Items
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY / MOOD */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {featuredGallery ? (
            featuredGallery.map((item, idx) => (
              <div key={item.id} className="relative aspect-square group overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10 duration-500" />
                <img 
                  src={item.imageUrl} 
                  alt={item.altText || "Gallery Image"} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs uppercase tracking-widest bg-black px-2 py-1">
                    {item.caption || "VUX Moments"}
                  </span>
                </div>
              </div>
            ))
          ) : (
             // Fallback images if API empty
             <>
               {/* Unsplash: Minimal coffee pour */}
               <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" className="w-full h-full object-cover" alt="Pour over" />
               </div>
               {/* Unsplash: Bao buns */}
               <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80" className="w-full h-full object-cover" alt="Bao" />
               </div>
               {/* Unsplash: Urban Berlin vibes */}
               <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80" className="w-full h-full object-cover" alt="Berlin" />
               </div>
             </>
          )}
        </div>
      </section>

      {/* BANNER */}
      <section className="py-32 bg-black text-white text-center px-6">
        <h2 className="text-5xl md:text-9xl font-display uppercase font-bold tracking-tighter mb-8">
          Visit Us
        </h2>
        <p className="font-serif text-xl text-neutral-400 mb-12">Wipperstrasse 14, Berlin-Neukölln</p>
        <Link href="/contact" className="inline-block border border-white px-10 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
          Get Directions
        </Link>
      </section>
    </div>
  );
}
