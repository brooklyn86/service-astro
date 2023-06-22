import { AppMessageError } from "./../errors/AppMessageError";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = <string>req.headers["authorization"];

  try {
    const jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = jwtPayload;
    next();
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    throw new AppMessageError("Token inválido", 401);
  }

  //   //The token is valid for 1 hour
  //   //We want to send a new token on every request
  //   const { userId, email } = jwtPayload;
  //   const newToken = jwt.sign({ userId, email }, config.jwtSecret, {
  //     expiresIn: "36h",
  //   });
  //   res.setHeader("token", newToken);

  //   //Call the next middleware or controller
};
