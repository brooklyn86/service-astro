require("dotenv").config();
import express from "express";
import "express-async-errors";
import cors from "cors";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware";
import cookieParser from "cookie-parser";
import { categoryRoutes } from "./routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/category", categoryRoutes);


app.listen(8006);

app.use(ErrorMiddleware);

console.log(`Server is running on port 8006`);
