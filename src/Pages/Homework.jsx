// import React, { useState } from "react";

// const Homework = () => {
//     const [selectedSubject, setSelectedSubject] = useState("");
//     const questions = {
//         maths: [
//             "1. Solve: 3x + 5 = 20",
//             "2. What is the area of a circle with radius 7 cm?",
//             "3. Simplify: (2x + 3)(x - 4)",
//         ],
//         science: [
//             "1. What is Newton's second law of motion?",
//             "2. Define photosynthesis.",
//             "3. What are the states of matter?",
//         ],
//         english: [
//             "1. Write a letter to your principal requesting a leave.",
//             "2. What is the difference between a simile and a metaphor?",
//             "3. Summarize the poem 'The Road Not Taken'.",
//         ],
//     };

//     return (
//         // <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//         //     <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         //         📘 Homework Assistant
//         //     </h1>
//         //     <h2 className="text-2xl font-semibold text-gray-800 m-2 mb-6">
//         //         Select the Subject{" "}
//         //     </h2>

//         //     {/* Subject Buttons */}
//         //     <div className="flex gap-4 mb-8">
//         //         <button
//         //             onClick={() => setSelectedSubject("maths")}
//         //             className="btn-6 bg-blue-500"
//         //         >
//         //             Maths
//         //         </button>
//         //         <button
//         //             onClick={() => setSelectedSubject("science")}
//         //             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
//         //         >
//         //             Science
//         //         </button>
//         //         <button
//         //             onClick={() => setSelectedSubject("english")}
//         //             className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
//         //         >
//         //             English
//         //         </button>
//         //     </div>

//         //     {/* Question Box */}
//         //     {selectedSubject && (
//         //         <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 border border-gray-200">
//         //             <h2 className="text-2xl font-semibold text-gray-800 capitalize mb-4">
//         //                 {selectedSubject} Questions
//         //             </h2>
//         //             <ul className="list-disc list-inside space-y-2 text-gray-700">
//         //                 {questions[selectedSubject].map((q, index) => (
//         //                     <li key={index}>{q}</li>
//         //                 ))}
//         //             </ul>
//         //         </div>
//         //     )}
//         // </div>
//         <div className="content">Hello HomeWork</div>
//     );
// };

// export default Homework;

// =======================Another File ===================================================================
import React from "react";

// Replace these with your actual image imports or URLs
import HomeworkImg1 from "../assets/Homework1.png";
import HomeworkImg2 from "../assets/Homework2.jpeg";
import HomeworkImg3 from "../assets/Homework3.jpg";
import HomeworkImg4 from "../assets/Homework4.jpeg";

const contentData = [
    {
        title: "A Culture of Consistent Learning",
        description:
            "Homework is more than just a task—it's a bridge between classroom learning and independent thinking. At Sri Chaitanya Junior College, we design homework to reinforce daily lessons, improve retention, and encourage personal exploration of academic topics.",
        image: HomeworkImg1,
    },
    {
        title: "Objectives of Homework",
        description:
            "Our carefully curated assignments are designed to reinforce concepts taught in class, develop self-discipline and responsibility, enhance time management skills, and prepare students for competitive exams through regular practice.",
        image: HomeworkImg2,
    },
    {
        title: "Track Your Homework Online",
        description:
            "With our digital portal, students can view assigned homework by date and subject, submit directly, and receive feedback from teachers. Everything is accessible, transparent, and easy to use.",
        image: HomeworkImg3,
    },
    {
        title: "Rewarding Consistency",
        description:
            "Students who consistently submit homework on time and maintain accuracy are recognized through appreciation boards, certificates, and bonus academic credits.",
        image: HomeworkImg4,
    },
];

const HomeworkPage = () => {
    return (
        <div className="w-full px-6 md:px-20 py-12 bg-white">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-400 mb-16">
                Homework Page
            </h2>

            {contentData.map((section, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center mb-20  ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                    <div className="md:w-1/2 w-full px-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {section.title}
                        </h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            {section.description}
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full px-4 mt-8 md:mt-0  ">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-auto rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeworkPage;
