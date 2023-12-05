import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import { registerBusiness } from "../controllers/businessController.js";

router.route("/").post(registerBusiness);

export default router;
