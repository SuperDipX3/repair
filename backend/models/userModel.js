import pool from "../config/database.js";
import bcrypt from "bcryptjs";

// ✅ ค้นหา User จาก Email
export const getUser = async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
};

// ✅ ลงทะเบียน User ใหม่
export const createUser = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
        [email, hashedPassword]
    );
    return result.rows[0];
};

