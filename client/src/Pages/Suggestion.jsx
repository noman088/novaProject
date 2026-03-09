import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/teacher/class1.jpg";
import img2 from "../assets/teacher/class2.jpg";
import img3 from "../assets/teacher/class3.jpg";
import img4 from "../assets/teacher/class4.jpg";

const suggestionSections = [
    {
        title: "💡 Personalized Learning Paths",
        subtitle: "Tailor-made for each student",
        description:
            "Recommend customized learning plans based on individual student performance, strengths, and areas of improvement to boost engagement and outcomes.",
        image: img1,
    },
    {
        title: "📚 Resource Recommendations",
        description:
            "Provide curated educational resources like videos, articles, and exercises to support classroom lessons and homework assignments.",
        image: img2,
    },
    {
        title: "🧑‍🏫 Teacher Feedback Insights",
        description:
            "Offer actionable suggestions to teachers based on student feedback and performance trends, helping to adapt teaching methods effectively.",
        image: img3,
    },
    {
        title: "🔍 Early Warning System",
        description:
            "Automatically detect students at risk of falling behind and suggest timely interventions to teachers and parents.",
        image: img4,
    },
    {
        title: "🎯 Goal Setting & Tracking",
        description:
            "Encourage students to set academic goals and track their progress with regular motivational suggestions and reminders.",
        image: img1,
    },
];

const SuggestionPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen relative">
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
                {suggestionSections.map((section, index) => {
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
                                <p className="text-gray-700 text-base">
                                    {section.description}
                                </p>
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
                                    className="rounded-2xl shadow-md w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    );
                })}

                {/* Call-to-Action */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Want More Suggestions?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Enhance your teaching and learning experience with smart
                        suggestions.
                    </p>
                    <button className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-indigo-700 transition duration-300">
                        Explore More Ideas
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuggestionPage;
