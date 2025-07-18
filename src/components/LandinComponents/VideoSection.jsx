import React from "react";

const NovaShowcase = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Text Content */}
                <div className="w-full lg:w-1/2 animate-fade-in-up text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 transition duration-300 hover:text-indigo-600">
                        Your Child's Journey
                        <br className="hidden md:block" /> at Your Fingertips
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 transition duration-300 hover:text-gray-800">
                        Nova transforms how you stay connected with your child's
                        educational journey. Watch how our intuitive interface
                        delivers real-time notifications for class events,
                        homework tracking, bus monitoring, photo sharing, and
                        seamless communication. Managing your child’s education
                        has never been easier or more engaging.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
                        Explore Features
                    </button>
                </div>

                {/* Right Video in Desktop Frame */}
                <div className="w-full lg:w-1/2 animate-fade-in-up">
                    <div className="relative w-full aspect-video max-w-xl mx-auto rounded-lg shadow-2xl border border-gray-300 bg-white transform hover:scale-105 transition duration-500">
                        {/* Browser frame header */}
                        <div className="flex items-center justify-start bg-gray-200 px-4 py-2 rounded-t-lg">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>

                        {/* Video */}
                        <iframe
                            className="w-full h-full rounded-b-lg"
                            src="https://www.youtube.com/embed/WmVRsZztLFg?si=FJ0teeJJbeYGcemH"
                            title="Nova App Introduction"
                            // frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NovaShowcase;
