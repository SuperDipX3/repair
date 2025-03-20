import pool from "../config/database.js";

export const getUsers = async (email, password) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    return result.rows;
};
