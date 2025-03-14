import express from "express";
import { login } from "../controllers/authController.js"; // ✅ ต้องใส่ `.js`

const router = express.Router();

// Login Route
router.post("/login", login);

export default router;