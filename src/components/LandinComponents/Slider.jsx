import { useState } from "react";
import React from "react";

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        "https://plus.unsplash.com/premium_photo-1697729617750-aac974815e4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/800x400?text=Slide+1",
        "https://images.unsplash.com/photo-1743376272672-c130603a3af2?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/800x400?text=Slide+2",
        "https://images.unsplash.com/photo-1750409221671-d925a6d7126c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/800x400?text=Slide+3",
    ];

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="bg-white py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Our Gallery
                </h2>
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src={images[currentSlide]}
                        alt="slide"
                        className="w-full h-[300px] object-cover rounded-lg"
                    />
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
                    >
                        
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
                    >
                        
                    </button>
                </div>
            </div>
        </section>
    );
}
