import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import {
    FaPhone,
    FaRegEnvelope,
    FaCommentDots,
    FaXTwitter,
} from "react-icons/fa6";

const ContactForm = () => {
    return (
        <section className="bg-white min-h-screen flex justify-center items-center px-4 py-16">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16">
                {/* Left: Contact Form */}
                <div className="w-full">
                    <h2 className="text-6xl font-bold text-gray-900 mb-3">
                        Contact our team
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Got any questions about the product or scaling on our
                        platform? We're here to help. Chat to our friendly team
                        24/7 and get onboard in less than 5 minutes.
                    </p>
                    <form className="space-y-5">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Please Enter Your Email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="tel"
                            placeholder="+91 1234567890 "
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <textarea
                            placeholder="Leave us a message..."
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right: Contact Options */}
                <div className="w-full space-y-10 text-gray-900">
                    <div>
                        <h3 className="text-4xl  font-semibold mb-4">
                            <span>Chat With Us </span>
                        </h3>
                        <ul className="space-y-3 text-lg text-gray-700">
                            <li className="flex items-center gap-3"></li>
                            <li className="flex items-center gap-3">
                                <FaRegEnvelope className="text-black text-xl" />
                                <a
                                    href="mailto:support@example.com"
                                    className="hover:underline font-medium"
                                >
                                    Shoot us an email
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaXTwitter className="text-black text-xl" />
                                <a
                                    href="#"
                                    className="hover:underline font-medium"
                                >
                                    Message us on X
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaInstagram className="text-black text-xl" />
                                <a
                                    href="#"
                                    className="hover:underline font-medium"
                                >
                                    Message us on Instagram
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaYoutube className="text-black text-xl" />
                                <a
                                    href="#"
                                    className="hover:underline font-medium"
                                >
                                    Subscribe us for more Update
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            📞 Call us
                        </h3>
                        <p className="text-lg text-gray-700 flex items-center gap-3">
                            <FaPhone className="text-black text-xl" />
                            <a
                                href="tel:+1555000000"
                                className="hover:underline font-medium"
                            >
                                +91 98498 16717
                            </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Available Mon - Fri, 8am to 5pm
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            📍 Visit us
                        </h3>
                        <p className="text-lg text-gray-700">
                            Come say hi at our Melbourne HQ and chat with us in
                            person.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
