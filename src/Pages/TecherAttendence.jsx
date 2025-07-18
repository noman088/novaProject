import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/teacher/class1.jpg";
import img2 from "../assets/teacher/class2.jpg";
import img3 from "../assets/teacher/class3.jpg";
import img4 from "../assets/teacher/class4.jpg";

const teacherAttendanceSections = [
    {
        title: "📋 TEACHER ATTENDANCE DASHBOARD",
        subtitle: "🟡 Empowering Teachers with Attendance Insights",
        description:
            "This dashboard enables teachers to manage student attendance efficiently, view patterns, intervene early, and communicate clearly with parents — all in one place. Designed with ease-of-use and actionable data in mind, it streamlines daily routines and fosters student accountability.",
        image: img1,
    },
    {
        title: "📅 Class-wise Attendance View",
        description:
            "Easily switch between different classes you manage. View overall stats and detailed daily/monthly attendance per class. This centralized view eliminates confusion and ensures you're always aware of each class's attendance trends.",
        image: img2,
    },
    {
        title: "👨‍🏫 Student Attendance Sheet",
        description:
            "Mark student attendance manually with checkboxes or dropdowns. Use bulk actions to mark all present or all absent. Simple, fast, and designed for seamless classroom workflows.",
        image: img3,
    },
    {
        title: " Attendance Summary Stats",
        description:
            "Get quick insights like total students, today’s <span class='text-blue-600 font-semibold'>attendance %</span>, and absentee list to act on immediately. It helps teachers prioritize communication and take immediate action when attendance drops.",
        image: img4,
    },
    {
        title: "🧭 Smart Insights",
        description:
            "Automatic detection of students below <span class='text-red-600 font-semibold'>75% attendance</span> or those with 3+ continuous absences. Plan interventions early to support students and avoid long-term academic issues.",
        image: img1,
    },
    {
        title: "📤 Report Generation",
        description:
            "Generate and export <span class='text-green-600 font-semibold'>attendance reports</span> in PDF or Excel for daily, monthly, or student-specific logs. Great for meetings, audits, and tracking student performance.",
        image: img2,
    },
    {
        title: "🔔 Notifications & Alerts",
        description:
            "Parents are auto-notified on absences. Teachers can also send <span class='text-yellow-600 font-semibold'>custom alerts</span> or reminders. Keep communication open and timely.",
        image: img3,
    },
    {
        title: "📆 Calendar Overview",
        description:
            "A color-coded monthly calendar helps visualize trends. <span class='text-red-500 font-semibold'>Red for absence</span>, <span class='text-yellow-500 font-semibold'>yellow for late</span>, <span class='text-green-500 font-semibold'>green for present</span>. Quickly identify patterns and plan ahead.",
        image: img4,
    },
    {
        title: "📥 Student Leave Requests",
        description:
            "Students can request leave. Teachers can approve, reject, or comment based on reason. <span class='text-indigo-600 font-semibold'>Structured approval</span> ensures fairness and documentation.",
        image: img1,
    },
];

const TeacherAttendancePage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen relative">
            {/* Sticky Icon Menu */}
            {/* <div className="hidden lg:flex flex-col fixed top-1/4 left-4 space-y-3 z-50">
                {teacherAttendanceSections.map((section, index) => (
                    <button
                        key={index}
                        title={section.title}
                        className="bg-white shadow p-2 rounded-full hover:bg-blue-100 transition"
                    >
                        {section.title.slice(0, 2)}
                    </button>
                ))}
            </div> */}

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
                {teacherAttendanceSections.map((section, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            className={`flex flex-col md:flex-row ${
                                isEven ? "md:flex-row" : "md:flex-row-reverse"
                            } items-center gap-10 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-6`}
                        >
                            {/* Text Section */}
                            <div
                                className="md:w-1/2"
                                data-aos="zoom-in"
                                data-aos-duration="600"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {section.title}
                                </h2>
                                {section.subtitle && (
                                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                                        {section.subtitle}
                                    </h3>
                                )}
                                <p
                                    className="text-gray-700 text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: section.description,
                                    }}
                                />
                            </div>

                            {/* Image Section */}
                            <div
                                className="md:w-1/2"
                                data-aos="fade-left"
                                data-aos-duration="600"
                            >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="rounded-2xl shadow-md w-full h-auto object-cover "
                                />
                            </div>
                        </div>
                    );
                })}

                {/* Call-to-Action */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Ready to Analyze Your Class Attendance?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Empower your teaching strategy with actionable
                        attendance insights.
                    </p>
                    <button className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-indigo-700 transition duration-300">
                        Generate Attendance Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeacherAttendancePage;
