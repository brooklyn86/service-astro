import express from "express";
import { AuthController } from "../modules/Auth/controllers/AuthController";
import authUserSchema from "../modules/Auth/schemas/login.schema";
import registerUserSchema from "../modules/Auth/schemas/register.schema";

export const authRoutes = express.Router();

authRoutes.post("/login", async (request, response) => {
  const { username, password } = authUserSchema.parse(request.body);
  const userController = new AuthController();
  const user = await userController.login({ username, password });
  return response.status(200).json(user);
});

authRoutes.post("/register", async (request, response) => {
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    c_password,
    accepted,
  } = registerUserSchema.parse(request.body);

  const userController = new AuthController();
  const user = await userController.register({
    firstName,
    lastName,
    email,
    username,
    password,
    c_password,
    accepted,
  });
  return response
    .status(201)
    .json({ user, message: "User created was success" });
});