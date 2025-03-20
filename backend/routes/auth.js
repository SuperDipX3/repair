import express from "express";
import { processLogin , processRegister } from "../controllers/authController.js"; // ✅ ต้องใส่ `.js`

const router = express.Router();

// Login Route
router.post("/login", processLogin);
router.post("/register", processRegister);

export default router;