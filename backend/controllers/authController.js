import { getUserLogin , getUserRegister ,createUser } from "../models/userModel.js";

export const processLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUserLogin(email, password);
        // res.json({user});
        if (user.length !== 0) {
            res.json({ success: true, message: "Login successful" });
        } else {
            res.json({ success: false, message: "* ไม่พบบัญชีผู้ใช้งาน"});
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const processRegister = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUserRegister(email);
        if (user.length === 0) {
            res.json({ success: true, message: "บัญชีผู้ใช้งานใช้ได้" });
        } else {
            res.json({ success: false, message: "มีบัญชีผู้ใช้งานนี้แล้ว" });
        }

        const userRegis = await createUser(email,password);
        console.log(userRegis);
        

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


