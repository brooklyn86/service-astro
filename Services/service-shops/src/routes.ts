import express from "express";
import { ShopController } from "./modules/Shop/controllers/ShopController";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import findShopSchema from "./modules/Shop/schemas/findShop.schema";
import findManyShopSchema from "./modules/Shop/schemas/findManyShop.schema";
import createShopSchema from "./modules/Shop/schemas/createShop.schema";

export const shopRoutes = express.Router();

shopRoutes.post("/", AuthMiddleware, async (request, response) => {
  const { title, profile, category_id, client_id, active } = createShopSchema.parse(request.body);
  const shopController = new ShopController();
  const shop = await shopController.create({ title, category_id, client_id, profile, active });
  return response.status(201).json(shop);
});

shopRoutes.get("/", async (request, response) => {
  const { id, title, category_id, client_id, active  } = findManyShopSchema.parse(request.query);
  const shopController = new ShopController();
  //@ts-ignore
  const shop = await shopController.findMany({ id, title,  category_id, client_id, active });
  return response.status(200).json(shop);
});

shopRoutes.get("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findShopSchema.parse(request.params);
  const shopController = new ShopController();
  const shop = await shopController.find({ id });
  return response.status(200).json(shop);
});

shopRoutes.put("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findShopSchema.parse(request.params);
  const { title, client_id, category_id, active, profile } = createShopSchema.parse(request.body);
  const shopController = new ShopController();
  await shopController.update({id, title, client_id, category_id, active, profile});
  return response.status(204).json();
});

shopRoutes.delete("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findShopSchema.parse(request.params);
  const shopController = new ShopController();
  await shopController.delete({ id });
  return response.status(204).json();
});