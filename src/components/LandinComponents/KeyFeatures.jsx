import React from "react";
import {
    FaComments,
    FaBus,
    FaCloudSun,
    FaBell,
    FaChartLine,
    FaCalendarAlt,
    FaTable,
    FaBook,
} from "react-icons/fa";

const features = [
    {
        icon: <FaComments />,
        title: "Live Chat",
        description:
            "AI-powered seamless communication between teachers and parents",
        color: "text-blue-600",
    },
    {
        icon: <FaBus />,
        title: "Bus Tracking",
        description: "Real-time updates on bus arrival",
        color: "text-yellow-500",
    },
    {
        icon: <FaCloudSun />,
        title: "Weather Report",
        description: "Weather updates for school location",
        color: "text-teal-600",
    },
    {
        icon: <FaBell />,
        title: "Real-Time Updates",
        description: "Notifications on events, schedules, and announcements",
        color: "text-blue-700",
    },
    {
        icon: <FaChartLine />,
        title: "Behaviour Report",
        description: "Check classroom behaviour insights",
        color: "text-teal-500",
    },
    {
        icon: <FaCalendarAlt />,
        title: "Calendar",
        description: "Keep track of important school dates and events",
        color: "text-yellow-600",
    },
    {
        icon: <FaTable />,
        title: "Timetable",
        description: "Access your child's class schedule anytime",
        color: "text-blue-500",
    },
    {
        icon: <FaBook />,
        title: "Homework",
        description: "Track assignments and due dates",
        color: "text-teal-700",
    },
];

export default function KeyFeatures() {
    return (
        <section className="py-12 px-4 md:px-10 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-800">
                    Key Features
                </h2>
                <p className="text-gray-500 mb-10">
                    Everything you need to stay connected with your child's
                    educational journey
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className=" group bg-white shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 rounded-2xl p-6 border border-gray-100 "
                        >
                            <div
                                className={`text-4xl mb-4 ${feature.color} transition duration-300`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold group-hover:text-blue-800 text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}








// <====================another===============>
// import React from "react";
// import {
//     FaComments,
//     FaBus,
//     FaCloudSun,
//     FaBell,
//     FaChartLine,
//     FaCalendarAlt,
//     FaTable,
//     FaBook,
// } from "react-icons/fa";

// const features = [
//     {
//         icon: <FaComments />,
//         title: "Live Chat",
//         color: "text-blue-600",
//         animation: "fade-up",
//     },
//     {
//         icon: <FaBus />,
//         title: "Bus Tracking",
//         color: "text-yellow-500",
//         animation: "fade-up",
//     },
//     {
//         icon: <FaCloudSun />,
//         title: "Weather Report",
//         color: "text-teal-600",
//         animation: "fade-up",
//     },
//     {
//         icon: <FaBell />,
//         title: "Real-Time Updates",
//         color: "text-blue-700",
//         animation: "fade-up",
//     },
//     {
//         icon: <FaChartLine />,
//         title: "Behaviour Report",
//         color: "text-teal-500",
//         animation: "fade-up",
//     },
//     {
//         icon: <FaCalendarAlt />,
//         title: "Calendar",
//         color: "text-yellow-600",
//         animation: "fade-up",
//     },
//     {
//         icon: <FaTable />,
//         title: "Timetable",
//         color: "text-blue-500",
//         animation: "fade-up",
//     },
//     {
//         icon: <FaBook />,
//         title: "Homework",
//         color: "text-teal-700",
//         animation: "fade-up",
//     },
// ];

// export default function KeyFeatures() {
//     return (
//         <section className="py-12 px-4 md:px-10 bg-white text-gray-800">
//             <div className="max-w-7xl mx-auto text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-800">
//                     Key Features
//                 </h2>
//                 <p className="text-gray-500 mb-10">
//                     Everything you need to stay connected with your child's
//                     educational journey
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {features.map((feature, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1  transition-all duration-300 group"
//                             data-aos={feature.animation}
//                             data-aos-delay={index * 100}
//                         >
//                             <div className={`text-4xl mb-4  ${feature.color}`}>
//                                 {feature.icon}
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                                 {feature.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm">
//                                 {feature.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
