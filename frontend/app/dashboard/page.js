"use client"; // Ensure it works in the client-side

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For redirecting after logout
import axios from "axios";

export default function DashboardPage() {
    const [user, setUser] = useState(null);  // To store user data
    const router = useRouter();

    // Fetch user data when component mounts (i.e., check if the user is authenticated)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token"); // Retrieve token from localStorage
                if (!token) {
                    alert('กรุณาเข้าสู่ระบบ');
                    router.push("/login");
                    return;
                }
    
                const response = await axios.get("http://localhost:1410/api/verifyToken/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Send token with request
                    },
                });
    
                // Set the user email
                setUser(response.data.user.email);  // Corrected to access email in response.data.user
    
            } catch (error) {
                // Handle errors (invalid token or other issues)
                console.error("Error fetching user data:", error);
                router.push("/login");  // Redirect to login on error
            }
        };
    
        fetchUserData();
    }, [router]);

    // Logout function
    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem("token");  // Remove token from localStorage
        router.push("/login");  // Redirect to login page
    };

    // If user data is not yet loaded, show a loading state
    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
            <h1 className="text-2xl mb-4">Welcome to your Dashboard</h1>
            <p className="mb-4">Hello, {user}</p>  {/* Display the user's email */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}
