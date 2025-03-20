import pool from "../config/database.js";
import bcrypt from 'bcrypt'; 

export const getUserLogin = async (email, password) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    return result.rows;
};

export const getUserRegister = async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1 ", [email]);
    return result.rows;
};

export const createUser = async (email, password) => {
    try {
      // ทำการ hash รหัสผ่านก่อน
      const hashedPassword = await bcrypt.hash(password, 10); // 10 คือค่า rounds
  
      // สร้างคำสั่ง SQL เพื่อเพิ่มข้อมูลผู้ใช้ใหม่พร้อมรหัสผ่านที่ถูก hash
      const result = await pool.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
        [email, hashedPassword]
      );
      return result.rows[0]; // คืนค่าผู้ใช้ที่ถูกสร้างขึ้น
    } catch (err) {
      throw new Error('Error creating user: ' + err.message); // ถ้ามีข้อผิดพลาดในการสร้างผู้ใช้
    }
  };
