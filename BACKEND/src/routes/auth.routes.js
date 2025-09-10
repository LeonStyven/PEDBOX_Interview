import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.post("/signin", register);
authRouter.post("/login", login);

export default authRouter;