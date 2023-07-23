import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUserInfoFromStorage } from "./utility/common-helper";
import { isEmpty } from "lodash";
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
import NotFound from "./pages/NotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !isEmpty(getUserInfoFromStorage()) ? true : false
  );

  const navigate = useNavigate();

  useEffect(() => {
    // if (
    //   !isEmpty(getUserInfoFromStorage()) &&
    //   window.location.pathname.includes("admin")
    // ) {
    //   return navigate("/login");
    // }

    if (!isLoggedIn) {
      setIsLoggedIn(!isEmpty(getUserInfoFromStorage()) ? true : false);
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        {isLoggedIn && (
          <>
            <Route path="/admin/overview" element={<Overview />} />
            <Route
              path="/admin/therapist-profile"
              element={<TherapistProfilePage />}
            />
            <Route path="/admin/chat" element={<Chat />} />
            <Route path="/admin/appointments" element={<AppointmentsPage />} />
            <Route
              path="/admin/learning-courses"
              element={<LearningCourses />}
            />
            <Route path="/admin/settings" element={<Settings />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
