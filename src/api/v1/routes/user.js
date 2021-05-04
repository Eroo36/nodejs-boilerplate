import { Router } from "express";
import { registerUser } from "../../../services/user/index.js";
const router = Router();

router.post("/register", registerUser);

export default router;
