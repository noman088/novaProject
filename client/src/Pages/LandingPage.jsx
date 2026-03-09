import React from "react";
import BestThing from "../components/LandinComponents/BestThing";
import HeroSection from "../components/LandinComponents/HeroSection";
import KeyFeatures from "../components/LandinComponents/KeyFeatures";
import PrivacySection2 from "../components/LandinComponents/PrivacySection2";
import Slider from "../components/LandinComponents/Slider";
import VideoSection from "../components/LandinComponents/VideoSection";
import Contact from "../components/LandinComponents/Contact";
import Footer from "../components/LandinComponents/Footer";
import CloudNavbar from "../components/Cloudnavbar";

function LandingPage() {
    return (
        <>
            {/* <CloudNavbar /> */}
            <HeroSection />
            <BestThing />
            <KeyFeatures />
            <PrivacySection2 />
            {/* <Slider /> */}
            <VideoSection />
            <Contact />
            {/* <Footer /> */}
        </>
    );
}

export default LandingPage;
