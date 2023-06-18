import express from "express";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import { ClientController } from "../modules/Client/controllers/ClientController";
import findClientSchema from "../modules/Client/schemas/findClient.schema";
import createClientSchema from "../modules/Client/schemas/createClient.schema";
import findManyClientSchema from "../modules/Client/schemas/findManyClient.schema";

export const clientRoutes = express.Router();

clientRoutes.post("/", AuthMiddleware, async (request, response) => {
  const { firstName, lastName, cnpj, active } = createClientSchema.parse(request.body);
  const clientController = new ClientController();
  const client = await clientController.create({ firstName, lastName, cnpj, active });
  return response.status(201).json(client);
});

clientRoutes.get("/", async (request, response) => {
  const { id, firstName, lastName, cnpj, active } = findManyClientSchema.parse(request.query);
  const clientController = new ClientController();
  //@ts-ignore
  const client = await clientController.findMany({ id, firstName, lastName, cnpj, active });
  return response.status(200).json(client);
});

clientRoutes.get("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findClientSchema.parse(request.params);
  const clientController = new ClientController();
  const client = await clientController.find({ id });
  return response.status(200).json(client);
});

clientRoutes.put("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findClientSchema.parse(request.params);
  const { firstName, lastName, cnpj, active } = request.body;
  const clientController = new ClientController();
  await clientController.update({ id, firstName, lastName, cnpj, active });
  return response.status(204).json();
});

clientRoutes.delete("/:id", AuthMiddleware, async (request, response) => {
  const { id } = findClientSchema.parse(request.params);
  const clientController = new ClientController();
  await clientController.delete({ id });
  return response.status(204).json();
});