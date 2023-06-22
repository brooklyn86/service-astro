require("dotenv").config();
import express from "express";
import "express-async-errors";
import cors from "cors";
// import { userRoutes } from "./routes/user.routes";
import { authRoutes } from "./routes/auth.routes";
import { shopRoutes } from "./routes/shop.routes";
import { clientRoutes } from "./routes/client.routes";
// import { productsRoutes } from "./routes/products.routes";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware";
import cookieParser from "cookie-parser";
import { categoryRoutes } from "./routes/category.routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/shop", shopRoutes);
app.use("/client", clientRoutes);
app.use("/category", categoryRoutes);


app.listen(8002);

app.use(ErrorMiddleware);

console.log(`Server is running on port 8002`);
