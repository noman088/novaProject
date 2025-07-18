import React from "react";
import { MessageCircle, Bus, CloudSun, Bell, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    {
        title: "AI-POWERED LIVE CHAT",
        description:
            "Experience seamless communication between teachers and parents with our AI-driven chat feature.",
        icon: <MessageCircle className="text-blue-600 w-6 h-6" />,
    },
    {
        title: "BUS TRACKING",
        description:
            "Know when your child's bus is arriving with live tracking.",
        icon: <Bus className="text-teal-500 w-6 h-6" />,
    },
    {
        title: "WEATHER REPORT",
        description: "Get real-time weather updates for your school location.",
        icon: <CloudSun className="text-yellow-500 w-6 h-6" />,
    },
    {
        title: "REAL-TIME UPDATES",
        description:
            "Stay informed with instant notifications about schedules, events, and announcements.",
        icon: <Bell className="text-blue-600 w-6 h-6" />,
    },
    {
        title: "BEHAVIOUR REPORT",
        description: "Check your children’s behaviour in the classroom.",
        icon: <BarChart className="text-teal-500 w-6 h-6" />,
    },
    {
        title: "AI-POWERED LIVE CHAT",
        description:
            "Experience seamless communication between teachers and parents with our AI-driven chat feature.",
        icon: <MessageCircle className="text-blue-600 w-6 h-6" />,
    },
    {
        title: "BUS TRACKING",
        description:
            "Know when your child's bus is arriving with live tracking.",
        icon: <Bus className="text-teal-500 w-6 h-6" />,
    },
    {
        title: "WEATHER REPORT",
        description: "Get real-time weather updates for your school location.",
        icon: <CloudSun className="text-yellow-500 w-6 h-6" />,
    },
    {
        title: "REAL-TIME UPDATES",
        description:
            "Stay informed with instant notifications about schedules, events, and announcements.",
        icon: <Bell className="text-blue-600 w-6 h-6" />,
    },
    {
        title: "BEHAVIOUR REPORT",
        description: "Check your children’s behaviour in the classroom.",
        icon: <BarChart className="text-teal-500 w-6 h-6" />,
    },
    {
        title: "REAL-TIME UPDATES",
        description:
            "Stay informed with instant notifications about schedules, events, and announcements.",
        icon: <Bell className="text-blue-600 w-6 h-6" />,
    },
    {
        title: "BEHAVIOUR REPORT",
        description: "Check your children’s behaviour in the classroom.",
        icon: <BarChart className="text-teal-500 w-6 h-6" />,
    },
];

export default function BestThingAll() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
                    BEST THINGS ABOUT NOVA
                </h2>
                <Link to="/bestthings">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 mt-2 text-sm sm:text-base">
                        View All
                        <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs">
                            +
                        </span>
                    </button>
                </Link>
            </div>

            <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition group:hover:tansision-all">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 text-left">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm text-left">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
