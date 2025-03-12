import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // ✅ ต้องใส่ `.js`

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
