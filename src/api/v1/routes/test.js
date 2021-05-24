import { Router } from "express";
import { test } from "../../../services/test/index.js";
const router = Router();

router.get("/", test);

export default router;
