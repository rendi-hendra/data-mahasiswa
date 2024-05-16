import express from "express";
import { router } from "../route/api";
import { errorMiddleware } from "../middleware/error-middleware";

export const web = express();
web.use(express.json());
web.use(router);
web.use(errorMiddleware);
