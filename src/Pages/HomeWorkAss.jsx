// import React, { useState } from "react";
// import { UploadCloud, BookOpen } from "lucide-react";
// import { Link } from "react-router-dom";

// const HomeWorkAss = () => {
//     const [selectedSubject, setSelectedSubject] = useState("");

//     const quoteOfTheDay =
//         "'Success is the sum of small efforts, repeated day in and day out. – Robert Collier";

//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             alert(`You uploaded: ${file.name}`);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-200 p-6 md:p-12">
//             {/* Motivational Quote */}
//             <div className="bg-yellow-100 text-yellow-900 p-4 rounded-lg shadow-md mb-6 text-center font-semibold">
//                 {quoteOfTheDay}
//             </div>

//             {/* Page Heading */}
//             <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">
//                 📚 Homework Assistant
//             </h1>

//             {/* Subject Dropdown */}
//             <div className="mb-6 flex justify-center">
//                 <select
//                     value={selectedSubject}
//                     onChange={(e) => setSelectedSubject(e.target.value)}
//                     className="p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow"
//                 >
//                     <option value="">Select a Subject</option>
//                     <option value="math">Math</option>
//                     <option value="science">Science</option>
//                     <option value="english">English</option>
//                     <option value="history">History</option>
//                 </select>
//             </div>

//             {/* Upload Box */}
//             <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8 max-w-xl mx-auto text-center border border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-700 mb-4">
//                     Upload Your Homework Question
//                 </h2>
//                 <label className="cursor-pointer inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700 transition">
//                     <UploadCloud className="w-5 h-5" />
//                     Upload Question
//                     <input
//                         type="file"
//                         className="hidden"
//                         onChange={handleFileUpload}
//                     />
//                 </label>
//             </div>

//             {/* Resources Section */}
//             <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-4xl mx-auto">
//                 <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
//                     <BookOpen className="w-6 h-6" />
//                     Recommended Resources
//                 </h2>
//                 <ul className="list-disc pl-6 text-gray-700 space-y-2">
//                     <li>
//                         <Link to="#" className="text-blue-600 hover:underline">
//                             Khan Academy – Free lessons in Math & Science
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="#" className="text-blue-600 hover:underline">
//                            Code with Harry  - Free Lesson for Web Development and Data Science
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="#" className="text-blue-600 hover:underline">
//                             Hitesh Chaoudhary  - High Quality Web Development with real time
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="#" className="text-blue-600 hover:underline">
//                            Namaste Dev - Free Top Notch Content
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default HomeWorkAss;

import React from "react";
import hw1 from "../assets/Homework1.png";
import hw2 from "../assets/Homework2.jpeg";
import hw3 from "../assets/Homework3.jpg";
import hw4 from "../assets/Homework4.jpeg";
// import hw4 from "../assets/Homework4.jpeg";

const homeworkSections = [
    {
        title: "📘 HOMEWORK ASSISTANCE",
        subtitle: "🟢 SMART SUPPORT FOR SMART LEARNING",
        description:
            "Our Homework Assistance system empowers students with timely reminders, smart submissions, and guided help — ensuring they stay on top of their academic responsibilities.",
        image: hw1,
    },
    {
        title: "🧠 Concept Reinforcement",
        description:
            "Homework helps reinforce what was taught in class. We ensure students have access to proper resources to revisit and practice with confidence.",
        image: hw2,
    },
    {
        title: "📥 Easy Submissions",
        description:
            "Students can upload homework directly through the dashboard, with automatic timestamping and teacher access.",
        image: hw3,
    },
    {
        title: "🔔 Deadline Reminders",
        description:
            "Smart reminders alert students and parents about upcoming homework deadlines, reducing last-minute stress.",
        image: hw4,
    },
    {
        title: "📊 Homework Progress Tracker",
        description:
            "A visual progress board helps track homework submissions, pending tasks, and feedback — all in one place.",
        image: hw1,
    },
];

const HomeworkPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
            {homeworkSections.map((section, index) => {
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

                        {/* Image Section */}
                        <div className="md:w-1/2">
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

export default HomeworkPage;
