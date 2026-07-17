import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints can be added here if needed in the future
  // For now, all functionality is client-side

  // Create and return HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
