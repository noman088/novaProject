import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import at1 from "../assets/Attendence/at1.webp";
import at2 from "../assets/Attendence/at2.jpg";
import at3 from "../assets/Attendence/at3.jpg";
import at4 from "../assets/Attendence/at4.jpeg";
import at5 from "../assets/Attendence/at5.jpg";

const attendanceSections = [
    {
        title: "📅 ATTENDANCE ",
        subtitle: "🟡 TRACKING PRESENCE, BUILDING CONSISTENCY",
        description:
            "At Our School , we believe that consistent attendance is a pillar of academic success. Our digital attendance system ensures transparency, accountability, and encourages students to take responsibility for their learning habits.",
        image: at5, // Image 1
    },
    {
        title: "🎯 Academic Impact",
        description:
            "Students who attend regularly tend to perform better in assessments. In-person learning promotes better engagement and concept clarity.",
        image: at2, // Image 2
    },
    {
        title: "🕒 Builds Punctuality",
        description:
            "Punctual arrivals and early preparation develop discipline. Our system helps foster lifelong time management habits.",
        image: at3, // Image 3
    },
    {
        title: "📢 Real-Time Updates",
        description:
            "Parents and teachers receive instant notifications when a student is absent or late, encouraging proactive communication.",
        image: at4, // Image 4
    },
    {
        title: "📊 Visual Attendance Dashboard",
        description:
            "Students and teachers get access to clean charts that represent daily, weekly, and monthly attendance trends in real-time.",
        image: at5, // Image 5
    },
    {
        title: "📆 Calendar View",
        description:
            "Color-coded attendance calendar makes it easy to understand presence, absence, holidays, and late marks at a glance.",
        image: at4, // Image 6
    },
];

const AttendancePage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
            {attendanceSections.map((section, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                        } items-center gap-10`}
                    >
                        {/* Text Section */}
                        <div
                            className="md:w-1/2"
                            data-aos="zoom-in"
                            data-aos-once="true"
                            data-aos-scale="1.5"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {section.title}
                            </h2>
                            {section.subtitle && (
                                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                                    {section.subtitle}
                                </h3>
                            )}
                            <p className="text-gray-700 text-base">
                                {section.description}
                            </p>
                        </div>

                        {/* Image Section */}
                        <div
                            className="md:w-1/2 transform transition-transform duration-500"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >
                            <img
                                src={section.image}
                                alt={section.title}
                                className="rounded-2xl shadow-md w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AttendancePage;
