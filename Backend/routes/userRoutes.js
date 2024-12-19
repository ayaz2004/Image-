import express from "express";
import { signUpUser } from "../controllers/userController.js";
import { validateSignup } from "../middleware/validateRequest.js";

const router = express.Router();

router.post("/signup", validateSignup, signUpUser);

export default router;
