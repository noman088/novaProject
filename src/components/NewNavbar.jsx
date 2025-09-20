import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/snpslogo.png";

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
            <header className="bg-white border-b border-gray-200 shadow-sm">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 overflow-hidden">
                        <div className="flex items-center flex-shrink-0">
                            <Link
                                to="/"
                                className="transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center rounded-lg overh-10 w-52 ">
                                    <img src={Logo} alt="logo" />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="relative items-center hidden space-x-8 lg:flex">
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
                                        className="absolute z-50 mt-2 transform -translate-x-1/2 top-full left-1/2"
                                        onMouseEnter={() =>
                                            handleMenuEnter("about")
                                        }
                                        onMouseLeave={handleMenuLeave}
                                    >
                                        <div className="bg-white w-[70vw] max-w-5xl rounded-lg shadow-xl border border-gray-200 py-8 px-10 flex space-x-16">
                                            <div className="flex-1">
                                                <h4 className="pl-3 mb-6 text-2xl font-bold text-gray-900 border-l-4 border-green-500">
                                                    What Nova Contains
                                                </h4>
                                                <ul className="space-y-4 text-base font-semibold text-gray-700">
                                                    <li>
                                                        <Link
                                                            to="/Attendence"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
                                                        >
                                                            Attendance
                                                            Management
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/Homework"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
                                                        >
                                                            Homework Tracking
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/AnalyticsReport"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
                                                        >
                                                            Analytics & Reports
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/Behavior"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
                                                        >
                                                            Behavior Monitoring
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="pl-3 mb-6 text-2xl font-bold text-gray-900 border-l-4 border-yellow-500">
                                                    Extra Features
                                                </h4>
                                                <ul className="space-y-4 text-base font-semibold text-gray-700">
                                                    <li>
                                                        <Link
                                                            to="/TecherAttendence"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
                                                        >
                                                            Teacher Attendance
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/HomeWorkAss"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
                                                        >
                                                            Homework Assistance
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/Suggestion"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
                                                        >
                                                            Suggestions
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/IdCard"
                                                            className="block px-3 py-2 transition-all duration-300 rounded-lg hover:translate-x-3 hover:text-purple-700 hover:bg-purple-50"
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
                                    className="px-4 py-2 font-medium text-purple-600 transition-all duration-300 border border-purple-600 rounded-lg hover:bg-purple-50 hover:scale-105"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/SignUp"
                                    className="px-4 py-2 font-medium text-white transition-all duration-300 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 hover:scale-105"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-200 rounded-lg lg:hidden hover:text-purple-700 hover:bg-gray-100"
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
                    <div className="px-4 py-4 space-y-2 bg-white border-t border-gray-200 lg:hidden">
                        <Link
                            to="/"
                            className="block px-4 py-3 font-medium text-gray-700 rounded-lg hover:text-purple-700 hover:bg-purple-50"
                        >
                            Home
                        </Link>

                        {/* About Submenu */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubmenu("about")}
                                className="flex items-center justify-between w-full px-4 py-3 font-medium text-gray-700 rounded-lg hover:text-purple-700 hover:bg-purple-50"
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
                                <div className="p-4 mt-2 space-y-4 rounded-lg bg-gray-50">
                                    <div>
                                        <h4 className="pl-2 mb-2 text-sm font-bold text-gray-900 border-l-4 border-green-500">
                                            What Nova Contains
                                        </h4>
                                        <ul className="space-y-2 text-sm">
                                            <li>
                                                <Link
                                                    to="/Attendence"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
                                                >
                                                    Attendance Management
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/Homework"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
                                                >
                                                    Homework Tracking
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/AnalyticsReport"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
                                                >
                                                    Analytics & Reports
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/Behavior"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
                                                >
                                                    Behavior Monitoring
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="pl-2 mb-2 text-sm font-bold text-gray-900 border-l-4 border-yellow-500">
                                            Extra Features
                                        </h4>
                                        <ul className="space-y-2 text-sm">
                                            <li>
                                                <Link
                                                    to="/TecherAttendence"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
                                                >
                                                    Teacher Attendance
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/HomeWorkAss"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
                                                >
                                                    Homework Assistance
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/Suggestion"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
                                                >
                                                    Suggestions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/IdCard"
                                                    className="block px-3 py-2 rounded-lg hover:text-purple-700 hover:bg-white"
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
                            className="block px-4 py-3 font-medium text-gray-700 rounded-lg hover:text-purple-700 hover:bg-purple-50"
                        >
                            What We Do
                        </Link>
                        <Link
                            to="/ContactUs"
                            className="block px-4 py-3 font-medium text-gray-700 rounded-lg hover:text-purple-700 hover:bg-purple-50"
                        >
                            Contact Us
                        </Link>

                        <Link
                            to="/login"
                            className="block w-full px-4 py-3 font-medium text-center text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="block w-full px-4 py-3 font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700"
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
