import React from "react";
import { Routes, Route } from "react-router-dom";
// import { history } from "./history";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GetInTouch from "./pages/GetInTouch";
import TermsAndConditions from "./pages/TermsAndConditions";
import Overview from "./pages/Overview";
import AppointmentsPage from "./pages/Appointments";
import Settings from "./pages/Settings";
import LearningCourses from "./pages/LearningCourses";
import TherapistProfilePage from "./pages/TherapistProfilePage";
import Chat from "./pages/Chat";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/overview" exact element={<Overview />} />
        <Route
          path="/admin/therapist-profile"
          exact
          element={<TherapistProfilePage />}
        />
        <Route path="/admin/chat" exact element={<Chat />} />

        <Route
          path="/admin/appointments"
          exact
          element={<AppointmentsPage />}
        />

        <Route
          path="/admin/learning-courses"
          exact
          element={<LearningCourses />}
        />

        <Route path="/admin/settings" exact element={<Settings />} />
        {/* Public Routes */}
        <Route
          path="/terms-conditions"
          exact
          element={<TermsAndConditions />}
        />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/get-in-touch" exact element={<GetInTouch />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
