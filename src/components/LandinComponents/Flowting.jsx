import React from "react";
import { motion } from "framer-motion";
import {
    FaBell,
    FaCalendar,
    FaBook,
    FaFileAlt,
    FaMoneyCheckAlt,
    FaGraduationCap,
    FaComments,
    FaClipboard,
    FaUserCheck,
    FaImages,
    FaChartLine,
    FaRunning,
} from "react-icons/fa";

const features = [
    { icon: <FaBell size={24} />, label: "Notification" },
    { icon: <FaCalendar size={24} />, label: "Calendar" },
    { icon: <FaBook size={24} />, label: "Resources" },
    { icon: <FaMoneyCheckAlt size={24} />, label: "Fees" },
    { icon: <FaGraduationCap size={24} />, label: "Academic" },
    { icon: <FaComments size={24} />, label: "Live Chat" },
    { icon: <FaClipboard size={24} />, label: "Homework" },
    { icon: <FaUserCheck size={24} />, label: "Attendance" },
    { icon: <FaImages size={24} />, label: "Gallery" },
    { icon: <FaChartLine size={24} />, label: "Behaviour" },
    { icon: <FaRunning size={24} />, label: "Activity" },
    { icon: <FaFileAlt size={24} />, label: "Timetable" },
];

const FloatingFeatureIcons = () => {
    const radius = 300;

    return (
        <div className="relative w-full min-h-[120vh] flex justify-center items-center bg-gray-50 overflow-hidden">
            {/* Center Phone */}
            <div className="w-32 h-64 rounded-2xl shadow-lg bg-white flex items-center justify-center z-20 border-4 border-blue-500">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                    alt="Phone"
                    className="w-20 h-20 object-contain"
                />
            </div>

            {/* Floating Icons (once outward, then fixed) */}
            {features.map((feature, i) => {
                const angle = (360 / features.length) * i;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                    <motion.div
                        key={i}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.2 },
                        }}
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                        className="absolute w-24 h-24 bg-white shadow-md rounded-xl flex flex-col items-center justify-center text-blue-600 z-10"
                    >
                        <div>{feature.icon}</div>
                        <span className="text-xs text-center mt-1">
                            {feature.label}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default FloatingFeatureIcons;
