import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white">
            <div className="max-w-md w-full space-y-6">
                {/* Logo and Header */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div>
                        <h1 className="text-lg font-semibold text-gray-800">
                            Tagsol Nova
                        </h1>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Create an Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Join us by creating your account
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Create password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        <input
                            type="checkbox"
                            className="accent-purple-600 mr-2"
                        />
                        <span>
                            I agree to the{" "}
                            <a
                                href="#"
                                className="text-purple-600 hover:underline"
                            >
                                Terms and Conditions
                            </a>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/Login"
                        className="text-purple-600 font-medium hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
