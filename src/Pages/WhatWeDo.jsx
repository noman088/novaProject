import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/teacher/class1.jpg";
import img2 from "../assets/teacher/class2.jpg";
import img3 from "../assets/teacher/class3.jpg";
import img4 from "../assets/teacher/class4.jpg";

const whatWeDoSections = [
    {
        title: "💡 Personalized Learning Tools",
        subtitle: "Smart technology tailored for every student",
        description:
            "We create adaptive learning platforms that adjust content difficulty based on individual student performance. Personalized recommendations ensure every learner gets the attention and pace they need.",
        image: img1,
    },
    {
        title: "🧠 AI-Powered Insights",
        description:
            "Our AI engines analyze performance trends to suggest learning paths, flag students at risk, and optimize teaching strategies. Teachers can act faster and more efficiently with real-time decision support.",
        image: img2,
    },
    {
        title: "📚 Digital Curriculum Support",
        description:
            "From interactive textbooks to gamified lessons, we provide digital content that keeps students engaged and motivated. Everything is curriculum-aligned for maximum classroom value.",
        image: img3,
    },
    {
        title: "📈 Academic Performance Analytics",
        description:
            "Track student growth, subject trends, and gaps using live dashboards. Teachers and school leaders get data they can act on, not just charts.",
        image: img4,
    },
    {
        title: "🤝 Parent-Teacher Collaboration",
        description:
            "We connect families and educators through alerts, messaging, and performance insights. This builds a strong school-home partnership that benefits every student.",
        image: img1,
    },
    {
        title: "🧪 Experiment & Activity Tracking",
        description:
            "Log practical work, club participation, sports, and extracurricular scores. Create holistic student portfolios beyond academics.",
        image: img2,
    },
    {
        title: "🔐 Secure & Scalable Tech",
        description:
            "Our tools follow global data protection standards and are designed to scale across thousands of users. Privacy-first design is baked into every feature.",
        image: img3,
    },
    {
        title: "🌐 24/7 Learning Access",
        description:
            "Students and teachers can access materials anytime, anywhere. Our platform ensures learning continuity even during school closures or disruptions.",
        image: img4,
    },
];

const WhatWeDoPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e6f7ff] min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
                {whatWeDoSections.map((section, index) => {
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
                                className="md:w-1/2 transform transition-transform duration-500"
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
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {section.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div
                                className="md:w-1/2 transform transition-transform duration-500"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                                data-aos-once="true"
                            >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="rounded-xl w-full h-auto object-cover transform scale-100 hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    );
                })}

                {/* CTA */}
                <div
                    className="text-center mt-20"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Want to Learn More About What We Do?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Join schools and educators transforming education with
                        powerful digital tools.
                    </p>
                    <button className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-indigo-700 transition duration-300">
                        🚀 Get in Touch with Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoPage;
