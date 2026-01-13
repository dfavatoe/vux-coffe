import { pgTable, text, serial, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: text("price").notNull(), // Using text for flexibility (e.g. "4.50")
  category: text("category").notNull(), // "Coffee", "Bao", "Sweets", "Savory"
  isAvailable: boolean("is_available").default(true),
});

export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  altText: text("alt_text"),
});

export const openingHours = pgTable("opening_hours", {
  id: serial("id").primaryKey(),
  day: text("day").notNull(), // "Mon-Fri", "Sat", "Sun"
  hours: text("hours").notNull(), // "12:00 - 18:00"
});

// === SCHEMAS ===

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({ id: true });
export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({ id: true });
export const insertOpeningHoursSchema = createInsertSchema(openingHours).omit({ id: true });

// === TYPES ===

export type MenuItem = typeof menuItems.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;

export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;

export type OpeningHours = typeof openingHours.$inferSelect;
export type InsertOpeningHours = z.infer<typeof insertOpeningHoursSchema>;
