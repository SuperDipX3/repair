import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", verifyToken, (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.user });
});

export default router;
