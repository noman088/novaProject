import React from "react";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaFax,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-sm text-gray-600 px-6 md:px-20 py-10">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Logo and Description */}
                <div className="col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-black text-white text- w-8 h-8 flex items-center justify-center font-bold rounded">
                            NOVA
                        </div>
                        <span className="text-lg font-semibold text-gray-900">
                            Tagsol NOVA
                        </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                        We love working with ambitious people.
                        <br />
                        Let's build something great together now.
                    </p>
                    <div>
                        <label
                            htmlFor="email"
                            className="text-gray-900 font-medium block mb-1"
                        >
                            Get In touch
                        </label>
                        <div className="flex">
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 border border-gray-300 rounded-l w-full focus:outline-none"
                            />
                            <button className="bg-blue-500 text-white px-4 rounded-r">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Links */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                        Product
                    </h4>
                    <ul className="space-y-2 ">
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Pricing</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Case Studies</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Features</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Reviews</a>
                        </li>
                        <li className="transition-all duration-700 hover:translate-x-3 ">
                            <a href="#">Updates</a>
                        </li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                        Company
                    </h4>
                    <ul className="space-y-2">
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">About</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Careers</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">News</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Blog</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Support & Contact */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                        Support
                    </h4>
                    <ul className="space-y-2 mb-4 hover:text-gray-900">
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Help Center</a>
                        </li>
                        <li className="hover:text-red-900 transition-all duration-300 hover:translate-x-3">
                            <a href="#">Status</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Report a Bug</a>
                        </li>
                        <li className="transition-all duration-300 hover:translate-x-3">
                            <a href="#">Chat Support</a>
                        </li>
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-2 transition-all duration-300 hover:translate-x-3">
                        Contact us
                    </h4>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© 2024 Tagsol Nova All rights reserved</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="https://www.instagram.com/tagsol_nova/"
                        className="text-3xl"
                    >
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-3xl">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-3xl">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-3xl">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="text-4xl">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>
    );
}
