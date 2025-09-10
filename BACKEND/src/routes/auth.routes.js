import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.post("/signin", register);

export default authRouter;