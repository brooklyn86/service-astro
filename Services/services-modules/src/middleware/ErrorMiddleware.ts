import { Request, Response, NextFunction } from "express";

import { AppMessageError } from "../errors/AppMessageError";

export const ErrorMiddleware = (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppMessageError) {
        return response
            .status(err.statusCode)
            .json({ error: true, message: err.message });
    }
    return response.status(500).json({
        error: true,
        message: `Something went wrong`,
        stack: err.message,
    });
};
