import express from "express";
import { AuthController } from "../modules/Auth/controllers/AuthController";
import { ShopController } from "../modules/Shop/controllers/ShopController";

export const shopRoutes = express.Router();

shopRoutes.post("/", async (request, response) => {
  const { title, profile } = request.body;
  const shopController = new ShopController();
  const shop = await shopController.create({ title, profile });
  return response.status(201).json(shop);
});

shopRoutes.get("/", async (request, response) => {
  const { id, title } = request.query;
  const shopController = new ShopController();
  const shop = await shopController.findMany({ id, title });
  return response.status(200).json(shop);
});

shopRoutes.get("/:id", async (request, response) => {
  const { id } = request.params;
  const shopController = new ShopController();
  const shop = await shopController.find({ id });
  return response.status(200).json(shop);
});

shopRoutes.put("/:id", async (request, response) => {
  const { title, active, profile } = request.body;
  const { id } = request.params;
  const shopController = new ShopController();
  await shopController.update({ id, title, active, profile });
  return response.status(204);
});

shopRoutes.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const shopController = new ShopController();
  await shopController.delete({ id });
  return response.status(204);
});