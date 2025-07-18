import React from "react";
import Image1 from "../assets/Knowledge1.jpeg";
import Image2 from "../assets/Knowledge2.jpeg";
import Image3 from "../assets/Knowledge3.jpeg";
import Image4 from "../assets/Knowledge1.jpeg";

const behaviorContent = [
    {
        title: "🚦 BEHAVIOR PAGE",
        subtitle: "🟡 Cultivating Character Alongside Knowledge",
        description:
            "At Sri Chaitanya, we believe education is not just about academic success but also about nurturing integrity, empathy, and responsibility.",
        image: Image1,
    },
    {
        title: "🔴 CODE OF CONDUCT",
        description:
            "Students must respect teachers, staff, and peers. Disruptions, foul language, or bullying are strictly prohibited. Cleanliness and order are expected.",
        image: Image2,
    },

    {
        title: "🟠 BEHAVIOR BEYOND THE CLASSROOM",
        description:
            "Students must represent the school positively in public and online, with courteous behavior and responsible social media use.",
        image: Image1,
    },
    {
        title: "🟣 CHARACTER-BUILDING SESSIONS",
        description:
            "Workshops on empathy, conflict resolution, anger/stress management, and time management help nurture a strong moral foundation.",
        image: Image2,
    },
    {
        title: "🟤 ROLE OF PARENTS & GUARDIANS",
        description:
            "Parents are essential partners. They’re informed of behavioral progress and help reinforce values taught at school.",
        image: Image3,
    },
];

const BehaviorPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
            {behaviorContent.map((section, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                        } items-center gap-10`}
                    >
                        {/* Text Content */}
                        <div className="md:w-1/2">
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

                        {/* Image */}
                        <div className="md:w-1/2">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BehaviorPage;
