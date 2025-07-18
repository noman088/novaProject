import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AnalyticsReport from "./Pages/AnalyticsReport";
import Attendence from "./Pages/Attendence";
import Behavior from "./Pages/Behavior";
import Homework from "./Pages/Homework";
import IdCard from "./Pages/IdCard";
import Suggestion from "./Pages/Suggestion";
import TecherAttendence from "./Pages/TecherAttendence";
import TimeTable from "./Pages/TimeTable";
import HomeWorkAss from "./Pages/HomeWorkAss";
import ContactUs from "./Pages/ContactUs";
import WhatWeDo from "./Pages/WhatWeDo";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import BestThingAll from "./Pages/BestThingsAll";

import NewNavbar from "./components/NewNavbar";
import Footer from "./components/LandinComponents/Footer";

function App() {
    return (
        <div className="transition-colors bg-white text-black min-h-screen flex flex-col">
            <NewNavbar />

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Attendence" element={<Attendence />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Login" element={<Login />} />
                    <Route
                        path="/AnalyticsReport"
                        element={<AnalyticsReport />}
                    />
                    <Route path="/Behavior" element={<Behavior />} />
                    <Route path="/Homework" element={<Homework />} />
                    <Route path="/HomeWorkAss" element={<HomeWorkAss />} />
                    <Route path="/IdCard" element={<IdCard />} />
                    <Route path="/Suggestion" element={<Suggestion />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/WhatWeDo" element={<WhatWeDo />} />
                    <Route path="/bestthings" element={<BestThingAll />} />
                    <Route
                        path="/TecherAttendence"
                        element={<TecherAttendence />}
                    />
                    <Route path="/TimeTable" element={<TimeTable />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
