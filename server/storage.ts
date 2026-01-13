import { db } from "./db";
import { menuItems, galleryItems, openingHours, type MenuItem, type InsertMenuItem, type GalleryItem, type InsertGalleryItem, type OpeningHours, type InsertOpeningHours } from "@shared/schema";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  getGalleryItems(): Promise<GalleryItem[]>;
  getOpeningHours(): Promise<OpeningHours[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getMenuItems(): Promise<MenuItem[]> {
    return await db.select().from(menuItems);
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems);
  }

  async getOpeningHours(): Promise<OpeningHours[]> {
    return await db.select().from(openingHours);
  }

  async seedData(): Promise<void> {
    // Seed Menu Items
    const existingMenu = await db.select().from(menuItems);
    if (existingMenu.length === 0) {
      await db.insert(menuItems).values([
        { name: "Flat White", price: "3.80", category: "Coffee", description: "Double shot espresso with microfoam" },
        { name: "Filter Coffee", price: "3.50", category: "Coffee", description: "Rotating single origin beans" },
        { name: "Iced Oat Latte", price: "4.20", category: "Coffee", description: "Cold brew concentrate with oat milk" },
        { name: "Tofu Peanut Bao", price: "6.50", category: "Bao", description: "Steamed bun, marinated tofu, crushed peanuts, coriander" },
        { name: "Mushroom Hoisin Bao", price: "6.50", category: "Bao", description: "Glazed mushrooms, pickled cucumber, spring onion" },
        { name: "Kimchi Seitan Bao", price: "6.50", category: "Bao", description: "Spicy seitan, homemade kimchi, sesame" },
        { name: "Banana Bread", price: "3.50", category: "Sweets", description: "Toasted with vegan butter" },
        { name: "Chocolate Cake", price: "4.50", category: "Sweets", description: "Rich, dense, gluten-free option available" },
        { name: "Cinnamon Bun", price: "4.00", category: "Sweets", description: "Classic Swedish style" },
      ]);
    }

    // Seed Opening Hours
    const existingHours = await db.select().from(openingHours);
    if (existingHours.length === 0) {
      await db.insert(openingHours).values([
        { day: "Wed - Fri", hours: "12:00 - 18:00" },
        { day: "Sat - Sun", hours: "11:00 - 18:00" },
        { day: "Mon - Tue", hours: "Closed" },
      ]);
    }

    // Seed Gallery Items
    const existingGallery = await db.select().from(galleryItems);
    if (existingGallery.length === 0) {
      await db.insert(galleryItems).values([
        { imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", caption: "Morning light", altText: "Coffee cup in sunlight" },
        { imageUrl: "https://images.unsplash.com/photo-1561758033-d8f19662cb23?q=80&w=800&auto=format&fit=crop", caption: "Bao selection", altText: "Steamed buns on a plate" },
        { imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", caption: "Berlin vibes", altText: "Minimalist cafe interior" },
        { imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", caption: "Plant based", altText: "Healthy green food" },
        { imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop", caption: "Coffee art", altText: "Latte art close up" },
        { imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", caption: "Details", altText: "Cafe detail shot" },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
