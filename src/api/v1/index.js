import { Router } from "express";
export const routes = Router();

import user from "./routes/user.js";

routes.use("/user", user);
