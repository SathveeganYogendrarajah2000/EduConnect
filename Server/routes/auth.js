import expres from "express";
import { login } from "../controllers/auth.js";

const router = expres.Router();

router.post("/login", login);  // auth/login   since we are importing this file in index.js
export default router;
