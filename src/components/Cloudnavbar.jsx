import React, { useState } from "react";
import { ChevronDown } from "lucide-react";


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
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src="" alt="" />
                        </div>

                        {/* Navigation Menu */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {/* About Nova - Mega Menu */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMenuEnter("about")}
                                onMouseLeave={handleMenuLeave}
                            >
                                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200">
                                    <span>About Nova</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>

                            {/* What We Do - Mega Menu */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMenuEnter("whatwedo")}
                                onMouseLeave={handleMenuLeave}
                            >
                                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200">
                                    <span>What We Do</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Other Navigation Items */}
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

                        {/* Mobile Menu Button */}
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

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden bg-white border-t border-gray-200">
                            <div className="px-4 py-2 space-y-1">
                                {/* About Nova Mobile */}
                                <div className="py-2">
                                    <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700 font-medium py-2">
                                        <span>About Nova</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* What We Do Mobile */}
                                <div className="py-2">
                                    <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700 font-medium py-2">
                                        <span>What We Do</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Other Mobile Links */}
                                <a
                                    href="#"
                                    className="block text-gray-700 hover:text-purple-700 font-medium py-2"
                                >
                                    What We Think
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-700 hover:text-purple-700 font-medium py-2"
                                >
                                    Careers
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-700 hover:text-purple-700 font-medium py-2"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Shared Mega Menu Space - About Nova */}
            {activeMenu === "about" && (
                <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-lg border border-gray-200 py-6 px-8 z-50 flex space-x-12 transition-all duration-200"
                    style={{ width: "70vw" }}
                    onMouseEnter={() => handleMenuEnter("about")}
                    onMouseLeave={handleMenuLeave}
                >
                    {/* Column 1 */}
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-2">
                            About Nova
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Analyst Reports
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Awards and Recognitions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Corporate Sustainability
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex-1 pt-10">
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Inclusion and Belonging
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Investors
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Leadership
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Locations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Partner Ecosystem
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex-1 pt-10">
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Privacy at Nova
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Supplier Diversity
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Innovation Network
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Nova Ventures
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Wellbeing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Shared Mega Menu Space - What We Do */}
            {activeMenu === "whatwedo" && (
                <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-lg border border-gray-200 py-6 px-8 z-50 flex space-x-12 transition-all duration-200"
                    style={{ width: "70vw" }}
                    onMouseEnter={() => handleMenuEnter("whatwedo")}
                    onMouseLeave={handleMenuLeave}
                >
                    {/* Column 1 */}
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-blue-500 pl-2">
                            What We Do
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Digital Transformation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Cloud Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Data Analytics
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    AI & Machine Learning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Cybersecurity
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex-1 pt-10">
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Software Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Mobile Applications
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    UI/UX Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    DevOps Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Quality Assurance
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex-1 pt-10">
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Consulting Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Project Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Technical Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    System Integration
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-700">
                                    Maintenance & Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NovaHeader;
