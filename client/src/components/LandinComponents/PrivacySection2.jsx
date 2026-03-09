import React from "react";
import {
    FaLock,
    FaUserShield,
    FaUserCheck,
    FaExchangeAlt,
    FaUndo,
    FaFileAlt,
    FaBan,
    FaShieldAlt,
} from "react-icons/fa";

const icons = [
    { icon: <FaLock />, label: "End-to-End Encryption" },
    { icon: <FaUserShield />, label: "Role-Based Access" },
    { icon: <FaUserCheck />, label: "Verified Users Only" },
    { icon: <FaExchangeAlt />, label: "Secure Sync" },
    { icon: <FaUndo />, label: "Auto Backup" },
    { icon: <FaFileAlt />, label: "Audit Logs" },
    { icon: <FaBan />, label: "No 3rd-Party Access" },
];

export default function PrivacySection() {
    return (
        <section className="bg-white py-20 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
                {/* Left Circular Icons */}
                <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] flex-shrink-0">
                    {/* Outer Circle */}
                    <div className="absolute inset-0 bg-gray-100 rounded-full shadow-sm" />

                    {/* Center Shield */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-4xl p-6 rounded-full z-10 shadow-xl">
                        <FaShieldAlt />
                    </div>

                    {/* Circular Positioned Icons */}
                    {icons.map((item, i) => {
                        const angle = (i / icons.length) * 2 * Math.PI;
                        const radius = 135;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <div
                                key={i}
                                className="absolute text-center"
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <div className="bg-teal-500 text-white w-14 h-14 flex items-center justify-center rounded-lg shadow-md text-xl hover:scale-110 transition duration-300">
                                    {item.icon}
                                </div>
                                <div className="text-sm mt-1 text-gray-700 w-24 mx-auto font-medium leading-tight">
                                    {item.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Text Content */}
                <div className="max-w-xl text-center lg:text-left flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Privacy First,
                        <br className="hidden md:block" /> Secure Always
                    </h2>

                    <p className="text-gray-600 text-lg mb-4">
                        At Nova, your privacy is our priority. All your child's
                        data is safeguarded with industry-leading security
                        protocols. Only verified users and school-authorized
                        personnel can access sensitive information.
                        Communication channels are fully encrypted and data is
                        never shared with third-party providers.
                    </p>

                    <p className="text-gray-600 text-lg mb-6">
                        Every update, assignment, and activity shared on Nova is
                        protected. We believe your child’s educational journey
                        should remain confidential and secure at every
                        touchpoint.
                    </p>

                    <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300 w-full sm:w-auto">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
