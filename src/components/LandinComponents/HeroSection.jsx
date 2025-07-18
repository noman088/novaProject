import React from "react";
import BGVideo from "../../assets/BgVideo.mp4";

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={BGVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-50 z-10"></div>

            {/* Text + Buttons */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    WELCOME TO{" "}
                    <span className="text-blue-500">TAGSOL NOVA</span>
                </h1>
                <p className="text-lg md:text-xl  mb-8">
                    We provide the best solutions for your School.
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                        Explore More
                    </button>
                    <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
