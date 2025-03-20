import express from "express";
import { getAllUsers } from "../controllers/authController.js"; // ✅ ต้องใส่ `.js`

const router = express.Router();

// Login Route
router.post("/login", getAllUsers);

export default router;