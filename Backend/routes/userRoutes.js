import express from "express";
import { signUpUser } from "../controllers/userController.js";
import { validateSignup } from "../middleware/validateRequest.js";
import { getuserDetails } from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", validateSignup, signUpUser);
router.get("/userDetails",getuserDetails)
export default router;
