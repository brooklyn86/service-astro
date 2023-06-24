import express from "express";
import { CategoryController } from "./modules/Category/controllers/CategoryController";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import findCategorySchema from "./modules/Category/schemas/findCategory.schema";
import findManyCategorySchema from "./modules/Category/schemas/findManyCategory.schema";
import createCategorySchema from "./modules/Category/schemas/createCategory.schema";

export const categoryRoutes = express.Router();

categoryRoutes.post("/", AuthMiddleware, async (request, response) => {
  const { title, active } = createCategorySchema.parse(request.body);
  const categoryController = new CategoryController();
  const category = await categoryController.create({ title, active });
  return response.status(201).json(category);
});

categoryRoutes.get("/", async (request, response) => {
  const { id, title, active  } = findManyCategorySchema.parse(request.query);
  const categoryController = new CategoryController();
  //@ts-ignore
  const category = await categoryController.findMany({ id, title, active});
  return response.status(200).json(category);
});

categoryRoutes.get("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findCategorySchema.parse(request.params);
  const categoryController = new CategoryController();
  const category = await categoryController.find({ id });
  return response.status(200).json(category);
});

categoryRoutes.put("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findCategorySchema.parse(request.params);
  const { title, active} = createCategorySchema.parse(request.body);
  const categoryController = new CategoryController();
  await categoryController.update({id, title, active});
  return response.status(204).json();
});

categoryRoutes.delete("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findCategorySchema.parse(request.params);
  const categoryController = new CategoryController();
  await categoryController.delete({ id });
  return response.status(204).json();
});