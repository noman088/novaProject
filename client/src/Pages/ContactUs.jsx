import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import img1 from "../assets/contactUs.jpg";

const ContactUs = () => {
    return (
        <div className="bg-white">
            {/* Top Banner */}
            <div className="bg-yellow-400 py-4 text-white text-xl font-bold text-center">
                CONTACT US
            </div>

            {/* Heading */}
            <div className="text-center mt-8">
                <p className="uppercase text-sm text-gray-500">Contact</p>
                <h2 className="text-2xl font-bold text-yellow-500 mt-2">
                    Get in Touch With Us
                </h2>
                <div className="flex justify-center mt-1">
                    <div className="w-12 h-1 bg-red-400 rounded-full"></div>
                </div>
            </div>

            {/* Image and Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-10 px-4">
                <img
                    src={img1}
                    alt="Classroom"
                    className="w-full rounded-lg shadow-md"
                />
                <iframe
                    title="Tagsol Nova Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.9606149861006!2d78.39086844033996!3d17.434986428220586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91693a8fe099%3A0x4fd2de3717058f4!2sTagsol%20Nova!5e0!3m2!1sen!2sin!4v1752647281855!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 px-4 mb-20 text-center">
                {/* Address */}
                <div>
                    <MapPin className="mx-auto text-red-500 w-8 h-8" />
                    <h4 className="font-bold mt-2">College Address</h4>
                    <p className="mt-1 text-sm text-gray-600">
                        3rd floor, Vishnu Kalpa, Amar Co-operative Society,
                        Madhapur, Hyderabad, Telangana, 500033
                    </p>
                </div>

                {/* Email */}
                <div>
                    <Mail className="mx-auto text-red-500 w-8 h-8" />
                    <h4 className="font-bold mt-2">Email</h4>
                    <p className="mt-1 text-sm text-gray-600">
                        info_nova@tagsol.tech
                    </p>
                </div>

                {/* Phone */}
                <div>
                    <Phone className="mx-auto text-red-500 w-8 h-8" />
                    <h4 className="font-bold mt-2 text-yellow-500">
                        Call & WhatsApp
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                        +91 98498 16717
                    </p>
                    <p className="text-sm text-gray-600">+91 123456789</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
