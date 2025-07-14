import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../assets/novaLogo.png";
const NovaHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMenuEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMenuLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className="relative">
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a target="_blank" href="https://nova.tagsol.tech/">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="h-16 w-40 cursor-pointer"
                                />
                            </a>
                        </div>

                        <nav className="hidden lg:flex items-center space-x-8 relative ">
                            <div
                                className="relative"
                                onMouseEnter={() => handleMenuEnter("about")}
                                onMouseLeave={handleMenuLeave}
                            >
                                <button className="flex items-center space-x-1 h-16 -m-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200">
                                    <span className="">About Nova</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {activeMenu === "about" && (
                                    <div
                                        className="absolute top-full left-1/2  transform -translate-x-1/2 mt-2 z-40"
                                        onMouseEnter={() =>
                                            handleMenuEnter("about")
                                        }
                                        onMouseLeave={handleMenuLeave}
                                    >
                                        <div className="bg-white w-[70vw] rounded-md shadow-lg border border-gray-200 py-6 px-8 flex space-x-12 transition-all duration-200 overflow-hidden">
                                            <div className="flex-1 left-about">
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-2 transition-all duration-500 transform hover:translate-x-2 hover:text-purple-700">
                                                    What Nova Contains
                                                </h4>
                                                <ul className="  space-y-3 text-base text-gray-700 font-semibold">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Attendence
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Homework
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Analytics and
                                                            Reports
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Behavior
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex-1 right-about">
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-2 transition-all duration-500 transform hover:translate-x-2 hover:text-purple-700">
                                                    Extra Fields
                                                </h4>
                                                <ul className="  space-y-3 text-base text-gray-700 font-semibold">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Teacher's Attendance
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Suggestion
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Id Card Generation
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Time Table
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div className="flex-1 pt-10 right-about">
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-2 transition-all duration-500 transform hover:translate-x-2 hover:text-purple-700">
                                                    What Nova Contains
                                                </h4>
                                                <ul className="space-y-3 text-base text-gray-700 font-semibold">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Techer's Attendence
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            HomeWork Assistance
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Suggestions
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Id Card Generation
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="px-2 py-1 rounded-md block transition-transform duration-300 hover:translate-x-2 hover:text-purple-700"
                                                        >
                                                            Time Table
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div
                                className="relative"
                                // onMouseEnter={() => handleMenuEnter("whatwedo")}
                                // onMouseLeave={handleMenuLeave}
                            >
                                <button className="flex items-center space-x-1 h-16 -m-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200">
                                    <span>What We Do</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {activeMenu === "whatwedo" && (
                                    <div
                                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-40"
                                        onMouseEnter={() =>
                                            handleMenuEnter("whatwedo")
                                        }
                                        onMouseLeave={handleMenuLeave}
                                    >
                                        <div className="bg-white w-[70vw] rounded-md shadow-lg border border-gray-200 py-6 px-8 flex space-x-12 transition-all duration-200 overflow-hidden">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-blue-500 pl-2">
                                                    What We Do
                                                </h4>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Our Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Digital
                                                            Transformation
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Cloud Solutions
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Data Analytics
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            AI & Machine
                                                            Learning
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Cybersecurity
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex-1 pt-10">
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Software Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Mobile Applications
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Web Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            UI/UX Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            DevOps Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Quality Assurance
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex-1 pt-10">
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Consulting Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Project Management
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Technical Support
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            System Integration
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="hover:text-purple-700"
                                                        >
                                                            Maintenance &
                                                            Support
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a
                                href="#"
                                className="text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200"
                            >
                                What We Think
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200"
                            >
                                Careers
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200"
                            >
                                Contact Us
                            </a>
                        </nav>

                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-700 hover:text-purple-700"
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
            </header>
        </div>
    );
};

export default NovaHeader;
