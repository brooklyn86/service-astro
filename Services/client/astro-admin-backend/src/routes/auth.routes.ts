import express from "express";
import { AuthController } from "../modules/Auth/controllers/AuthController";

export const authRoutes = express.Router();

authRoutes.post("/login", async (request, response) => {
  const { username, password } = request.body;
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
  } = request.body;
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

authRoutes.get("/tiktok/login", async (request, response) => {
  const csrfState = Math.random().toString(36).substring(2);
  // request.signedCookies('csrfState', csrfState, { maxAge: 60000 });

  let url = 'https://www.tiktok.com/auth/authorize/';

  url += `?client_key=${process.env.TIKTOK_CLIENT_KEY}`;
  url += '&scope=user.info.basic,video.list';
  url += '&response_type=code';
  url += `&redirect_uri=${process.env.TIKTOK_SERVER_ENDPOINT_REDIRECT}`;
  url += '&state=' + csrfState;

  response.redirect(url);
});

authRoutes.get("/tiktok/callback", async (request, response) => {
  console.log(request)
});