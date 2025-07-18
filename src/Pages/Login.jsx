import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Login to Your Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-black mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border-2 border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-zinc-600 outline-none rounded "
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?
                    <Link
                        to="/SignUp"
                        className="text-purple-600 font-medium hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
