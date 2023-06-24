require("dotenv").config();
import express from "express";
import "express-async-errors";
import cors from "cors";
import { clientRoutes } from "./router";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/client", clientRoutes);

app.listen(8005);

app.use(ErrorMiddleware);

console.log(`Server is running on port 8005`);
