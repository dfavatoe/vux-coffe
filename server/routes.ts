import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Initialize seed data
  await storage.seedData();

  app.get(api.menu.list.path, async (req, res) => {
    const menu = await storage.getMenuItems();
    res.json(menu);
  });

  app.get(api.gallery.list.path, async (req, res) => {
    const gallery = await storage.getGalleryItems();
    res.json(gallery);
  });

  app.get(api.openingHours.list.path, async (req, res) => {
    const hours = await storage.getOpeningHours();
    res.json(hours);
  });

  return httpServer;
}
