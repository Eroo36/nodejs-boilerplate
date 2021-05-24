import { Router } from "express";
export const routes = Router();

import user from "./routes/user.js";
import test from "./routes/test.js";

routes.use("/user", user);
routes.use("/test", test);
