"use client"; // เพื่อให้คอมโพเนนต์ทำงานในฝั่ง Client

import { useState } from "react";
import { useRouter } from "next/navigation"; // ใช้สำหรับการ redirect
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ส่งข้อมูล login ไปที่ Backend API
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success == true) {
        router.push("/dashboard");
      } else if (response.data.success == false) {
        setErrorMessage(response.data.message);
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-500">เข้าสู่ระบบ</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-9 px-2 py-1 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-9 px-2 py-1 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          SIGN IN
        </button>

        {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
}
