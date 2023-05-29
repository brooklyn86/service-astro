import express from "express";
import { AuthController } from "../modules/Auth/controllers/AuthController";
import { ShopController } from "../modules/Shop/controllers/ShopController";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

export const shopRoutes = express.Router();

shopRoutes.post("/", AuthMiddleware, async (request, response) => {
  const { title, profile, category_id, client_id } = request.body;
  const shopController = new ShopController();
  const shop = await shopController.create({ title, profile, category_id, client_id });
  return response.status(201).json(shop);
});

shopRoutes.get("/", async (request, response) => {
  const { id, title, category_id, client_id, active  } = request.query;
  const shopController = new ShopController();
  //@ts-ignore
  const shop = await shopController.findMany({ id, title,  category_id, client_id, active });
  return response.status(200).json(shop);
});

shopRoutes.get("/:id", AuthMiddleware, async (request, response) => {
  const { id } = request.params;
  const shopController = new ShopController();
  const shop = await shopController.find({ id });
  return response.status(200).json(shop);
});

shopRoutes.put("/:id", AuthMiddleware, async (request, response) => {
  const { id } = request.params;
  const { title, active, profile } = request.body;
  const shopController = new ShopController();
  await shopController.update({ id, title, active, profile });
  return response.status(204).json();
});

shopRoutes.delete("/:id", AuthMiddleware, async (request, response) => {
  const { id } = request.params;
  const shopController = new ShopController();
  await shopController.delete({ id });
  return response.status(204).json();
});