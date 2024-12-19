import express from "express";
import { signupUser } from "../controllers/userController.js";
import { validateSignup } from "../middleware/validateRequest.js";

const router = express.Router();

router.post("/signup", validateSignup, signupUser);

export default router;
