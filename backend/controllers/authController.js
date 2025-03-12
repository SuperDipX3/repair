import { findUserByEmailAndPassword } from "../models/userModel.js";

export const login = (req, res) => {
    const { email, password } = req.body;
    const user = findUserByEmailAndPassword(email, password);

    if (user) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
};
