import { auth } from "@nexack/auth/server.ts";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";

const app: Express = express();

const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({
        message: "Hurray!! we create our first server on bun js",
        success: true,
      });
    } catch (error: unknown) {
      next(new Error((error as Error).message));
    }
  },
);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
