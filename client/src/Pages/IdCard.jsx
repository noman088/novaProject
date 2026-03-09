import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/teacher/class1.jpg";
import img2 from "../assets/teacher/class2.jpg";
import img3 from "../assets/teacher/class3.jpg";
import img4 from "../assets/teacher/class4.jpg";

const idGenerationSections = [
    {
        title: "🆔 Centralized ID Generation System",
        subtitle: "One click, infinite identities",
        description:
            "Our ID generation module empowers educational institutions to create professional, secure, and standardized ID cards for students, teachers, and staff. With centralized control and intuitive inputs, administrators can manage thousands of IDs effortlessly. From name formatting to barcode/QR embedding, the system automates every step while maintaining design consistency across batches, classes, and categories.",
        image: img1,
    },
    {
        title: "📸 Smart Photo Upload & Cropping",
        description:
            "Say goodbye to manual resizing! Our built-in photo upload system includes smart cropping and auto face alignment, ensuring each ID image meets clarity and ratio standards. It simplifies the collection process for large student bases and supports bulk photo imports with error detection.",
        image: img2,
    },
    {
        title: "🎨 Custom Templates for Every Role",
        description:
            "Customize ID cards for students, faculty, visitors, and staff with dedicated templates. Add institute branding, department details, designation fields, validity periods, and even color codes to distinguish user groups visually. Design previews update live as you edit.",
        image: img3,
    },
    {
        title: "🔒 Secure QR / Barcode Integration",
        description:
            "Each ID comes with a unique QR code or barcode generated automatically. These codes link directly to digital student profiles, attendance logs, or library records. It's a modern way to bridge physical ID with digital verification systems, ensuring quick and secure authentication anywhere on campus.",
        image: img4,
    },
    {
        title: "🖨️ Batch Printing & Export Options",
        description:
            "Print hundreds of ID cards with a single click. Whether exporting to PDF, Excel, or directly to a print queue, the system formats all data to fit cleanly and legibly. Use built-in alignment tools to avoid wastage and generate print-ready sheets instantly.",
        image: img1,
    },
    {
        title: "🔄 Real-Time Updates & Re-Issues",
        description:
            "Need to correct a misspelled name or update an expired card? Our system allows real-time editing of any ID field and instant re-issuance. Updated cards can be pushed to digital portals or sent for physical printing — all from the dashboard.",
        image: img2,
    },
    {
        title: "📂 Bulk Data Import from School Systems",
        description:
            "Import student/staff data from CSV, Excel, or linked school ERP systems in seconds. Our smart mapper detects columns like name, roll number, class, photo path, etc., and aligns them to the ID schema. It ensures zero duplication and high accuracy.",
        image: img3,
    },
    {
        title: "📱 Mobile View & Access Pass",
        description:
            "In addition to physical cards, users get access to a digital ID on their mobile devices. These digital passes are scannable at school gates, libraries, and labs, making identity management modern, eco-friendly, and always accessible.",
        image: img4,
    },
];

const IDGenerationPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e6f7ff] min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
                {idGenerationSections.map((section, index) => {
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
                                className="md:w-1/2 transform transition-transform duration-500"
                                data-aos="zoom-in"
                                data-aos-once="true"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {section.title}
                                </h2>
                                {section.subtitle && (
                                    <h3 className="text-lg font-semibold text-gray-600 mb-3">
                                        {section.subtitle}
                                    </h3>
                                )}
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {section.description}
                                </p>
                            </div>

                            {/* Image Section */}
                            <div
                                className="md:w-1/2"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                                data-aos-once="true"
                            >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="rounded-xl w-full h-auto object-cover transform scale-100 transition-transform duration-700 ease-in-out"
                                    style={{ transform: "scale(1.1)" }}
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
                        Ready to Automate Your ID Card Process?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Start generating smart, secure, and professional IDs for
                        your entire institution — all from one dashboard.
                    </p>
                    <button className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-indigo-700 transition duration-300">
                        🆔 Try ID Generator Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IDGenerationPage;
