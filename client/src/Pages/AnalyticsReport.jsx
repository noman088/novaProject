import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "../assets/Analytics/Analytics1.jpg";
import Image2 from "../assets/Analytics/Analytics2.jpg";
import Image3 from "../assets/Analytics/Analytics3.jpg";
import Image4 from "../assets/Analytics/Analytics4.jpg";
import Image5 from "../assets/Analytics/Analytics5.jpg";

const analyticsSections = [
    {
        title: "📊 ANALYTICS & REPORT PAGE",
        subtitle: "🟡 SMART INSIGHTS FOR SMART LEARNING",
        description:
            "At Sri Chaitanya, we believe data can empower students to grow smarter, not just work harder. Our real-time, data-driven dashboards provide personalized academic snapshots to help students, teachers, and parents take informed steps toward consistent progress.",
        image: Image1,
    },
    {
        title: "📚 Grade & Test Performance Analytics",
        description:
            "Visualize academic trends over time to identify strengths and areas needing improvement. Interactive graphs reveal patterns to guide your learning.",
        image: Image2,
    },
    {
        title: "📅 Attendance Trend Graphs",
        description:
            "Monitor attendance patterns to improve regularity and punctuality. Understand how attendance correlates with academic success.",
        image: Image3,
    },
    {
        title: "✅ Homework Completion Rates",
        description:
            "Track assignment submissions and homework consistency over time. Both students and teachers can take quick action where needed.",
        image: Image4,
    },
    {
        title: "🏅 Comparative Class Rankings",
        description:
            "See where students stand in comparison to classmates. This motivates healthy competition and goal-setting.",
        image: Image5,
    },
    {
        title: "📊 Progress Over Time",
        description:
            "Analyze performance evolution through timelines and graphs. Spot dips early and make timely improvements.",
        image: Image5,
    },
    {
        title: "🔍 Subject-wise Deep Dives",
        description:
            "Drill down into subject-specific performance to identify where attention is most needed. Personalized interventions become easy.",
        image: Image1,
    },
    {
        title: "📤 Downloadable Reports",
        description:
            "Easily export visual and data-rich reports in PDF format. Useful for offline discussion, analysis, and parent-teacher meetings.",
        image: Image3,
    },
    {
        title: "📞 Parent-Teacher Engagement",
        description:
            "Use analytics to enhance parent-teacher meetings. Everyone gets the same view of student progress, improving clarity and collaboration.",
        image: Image5,
    },
];

const AnalyticsReportPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
            {analyticsSections.map((section, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                        } items-center gap-10`}
                    >
                        {/* Text */}
                        <div
                            className="md:w-1/2"
                            data-aos="zoom-in"
                            data-aos-once="true"
                            data-aos-scale="1.5"
                        >
                            <h2 className="text-2xl font-bold  text-gray-800 mb-2">
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

                        {/* Image */}
                        <div
                            className="md:w-1/2"
                            data-aos="zoom-in"
                            data-aos-once="true"
                            data-aos-scale="1.5"
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

export default AnalyticsReportPage;
