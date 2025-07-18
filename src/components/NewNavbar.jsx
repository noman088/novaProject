import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/novaLogo.png";

const NewNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileActiveMenu, setMobileActiveMenu] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setMobileActiveMenu(null);
    };

    const handleMenuEnter = (menu) => setActiveMenu(menu);
    const handleMenuLeave = () => setActiveMenu(null);
    const toggleMobileSubmenu = (menu) =>
        setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);

    return (
        <div className="relative">
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center flex-shrink-0">
                            <Link
                                to="/"
                                className="transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="w-32 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                    <img src={Logo} alt="logo" />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8 relative">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-purple-700 font-medium transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Home
                            </Link>

                            <div
                                className="relative"
                                onMouseEnter={() => handleMenuEnter("about")}
                                onMouseLeave={handleMenuLeave}
                            >
                                <button className="flex items-center space-x-1 h-16 -m-2 text-gray-700 hover:text-purple-700 font-medium transition-all duration-300 hover:-translate-y-0.5">
                                    <span>About</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {activeMenu === "about" && (
                                    <div
                                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
                                        onMouseEnter={() =>
                                            handleMenuEnter("about")
                                        }
                                        onMouseLeave={handleMenuLeave}
                                    >
                                        <div className="bg-white w-[70vw] max-w-5xl rounded-lg shadow-xl border border-gray-200 py-8 px-10 flex space-x-16">
                                            <div className="flex-1">
                                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-green-500 pl-3">
                                                    What Nova Contains
                                                </h4>
                                                <ul className="space-y-4 text-base text-gray-700 font-semibold">
                                                    <li>
                                                        <Link
                                                            to="/Attendence"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            Attendance
                                                            Management
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/Homework"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            Homework Tracking
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/AnalyticsReport"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            Analytics & Reports
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/Behavior"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            Behavior Monitoring
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-500 pl-3">
                                                    Extra Features
                                                </h4>
                                                <ul className="space-y-4 text-base text-gray-700 font-semibold">
                                                    <li>
                                                        <Link
                                                            to="/TecherAttendence"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            Teacher Attendance
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/HomeWorkAss"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            Homework Assistance
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/Suggestion"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            Suggestions
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/IdCard"
                                                            className="block px-3 py-2 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                                                        >
                                                            ID Card Generation
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/WhatWeDo"
                                className="text-gray-700 hover:text-purple-700 font-medium transition-all duration-300 hover:-translate-y-0.5"
                            >
                                What We Do
                            </Link>

                            <Link
                                to="/ContactUs"
                                className="text-gray-700 hover:text-purple-700 font-medium transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Contact Us
                            </Link>

                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 font-medium transition-all duration-300 hover:scale-105"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/SignUp"
                                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-all duration-300 hover:scale-105 shadow-md"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-purple-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
                        <Link
                            to="/"
                            className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-purple-50 font-medium rounded-lg"
                        >
                            Home
                        </Link>

                        {/* About Submenu */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubmenu("about")}
                                className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-purple-50 font-medium rounded-lg"
                            >
                                <span>About</span>
                                <ChevronRight
                                    className={`w-4 h-4 transition-transform ${
                                        mobileActiveMenu === "about"
                                            ? "rotate-90"
                                            : ""
                                    }`}
                                />
                            </button>

                            {mobileActiveMenu === "about" && (
                                <div className="bg-gray-50 rounded-lg p-4 mt-2 space-y-4">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2 border-l-4 border-green-500 pl-2">
                                            What Nova Contains
                                        </h4>
                                        <ul className="text-sm space-y-2">
                                            <li>
                                                <Link
                                                    to="/Attendence"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    Attendance Management
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/Homework"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    Homework Tracking
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/AnalyticsReport"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    Analytics & Reports
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/Behavior"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    Behavior Monitoring
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2 border-l-4 border-yellow-500 pl-2">
                                            Extra Features
                                        </h4>
                                        <ul className="text-sm space-y-2">
                                            <li>
                                                <Link
                                                    to="/TecherAttendence"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    Teacher Attendance
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/HomeWorkAss"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    Homework Assistance
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/Suggestion"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    Suggestions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/IdCard"
                                                    className="block px-3 py-2 hover:text-purple-700 hover:bg-white rounded-lg"
                                                >
                                                    ID Card Generation
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/WhatWeDo"
                            className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-purple-50 font-medium rounded-lg"
                        >
                            What We Do
                        </Link>
                        <Link
                            to="/ContactUs"
                            className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-purple-50 font-medium rounded-lg"
                        >
                            Contact Us
                        </Link>

                        <Link
                            to="/login"
                            className="w-full block text-center px-4 py-3 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 font-medium"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="w-full block text-center px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
};

export default NewNavbar;
