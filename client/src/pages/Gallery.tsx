import { useGallery } from "@/hooks/use-gallery";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function GalleryPage() {
  const { data: items, isLoading } = useGallery();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        <SectionHeader title="Loading Gallery..." />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Visual Diary" 
          subtitle="Snapshots from our Neukölln space."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-zoom-in"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.altText || "Gallery Image"} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              
              {item.caption && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="font-display uppercase text-xs tracking-widest">{item.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* If empty, show some placeholders so the page isn't blank */}
          {!items?.length && (
            <>
              {/* Unsplash: Latte art */}
              <div className="break-inside-avoid relative aspect-[3/4] grayscale hover:grayscale-0 transition-all">
                <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80" className="w-full h-full object-cover" alt="Latte" />
              </div>
              {/* Unsplash: Minimalist interior */}
              <div className="break-inside-avoid relative aspect-[4/3] grayscale hover:grayscale-0 transition-all">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" className="w-full h-full object-cover" alt="Interior" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
