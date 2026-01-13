import { useMenu } from "@/hooks/use-menu";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function MenuPage() {
  const { data: items, isLoading } = useMenu();

  const categories = ["Coffee", "Bao", "Sweets", "Savory"];

  if (isLoading) {
    return (
      <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        <SectionHeader title="Loading Menu..." />
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-neutral-100 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            title="Our Menu" 
            subtitle="Curated selection of plant-based delights."
          />
        </motion.div>

        <div className="space-y-24">
          {categories.map((category, catIndex) => {
            const categoryItems = items?.filter(
              (item) => item.category.toLowerCase() === category.toLowerCase()
            );

            if (!categoryItems?.length) return null;

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider">{category}</h3>
                  <div className="h-px flex-1 bg-black/10" />
                </div>

                <div className="grid gap-8">
                  {categoryItems.map((item) => (
                    <div key={item.id} className="group relative">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-bold font-display uppercase tracking-wide group-hover:text-neutral-600 transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-mono text-lg font-medium">{item.price}</span>
                      </div>
                      <p className="font-serif text-neutral-500 italic max-w-xl">
                        {item.description}
                      </p>
                      {!item.isAvailable && (
                        <span className="absolute -right-4 top-0 rotate-12 bg-black text-white text-[10px] uppercase px-2 py-1 font-bold">
                          Sold Out
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
