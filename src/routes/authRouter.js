import { Router } from "express";
import { singUp } from "../controllers/authController.js";
import { validatesSchemas } from "../middlewares/validateSchemas.js";

const authRouter = Router();

authRouter.post("/sign-up", validatesSchemas("auth"), singUp);

export { authRouter };
