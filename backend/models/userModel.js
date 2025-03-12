const users = [
    { email: "test@example.com", password: "password123" },
    { email: "admin@example.com", password: "admin123" },
];

// ฟังก์ชันเช็คว่ามีผู้ใช้งานหรือไม่
export const findUserByEmailAndPassword = (email, password) => {
    return users.find((u) => u.email === email && u.password === password);
};