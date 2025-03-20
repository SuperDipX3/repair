import { getUsers } from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUsers(email, password);
        // res.json({user});
        if (user) {
            res.json({ success: true, message: "Login successful", datauser: user });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

