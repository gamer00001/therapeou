import React, { useEffect, useState } from "react";
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
import TherapistHome from "./pages/TherapistHome";
import TherapistProfile from "./pages/TherapistProfile";
import Reports from "./pages/Reports";
import OnGoingAppointments from "./pages/Reports/OnGoingAppointments";
import AppointmentDetail from "./pages/Reports/AppointmentDetail";
import TherapistRegistration from "./pages/TherapistRegistration";
import Calender from "./pages/Calender";

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
        <Route
          path="/therapist/registeration-process"
          element={<TherapistRegistration />}
        />
        <Route path="/admin/chat" element={<Chat />} />

        {/* Admin Routes */}
        {isLoggedIn && (
          <>
            <Route path="/admin/overview" element={<Overview />} />
            <Route path="/admin/calender" element={<Calender />} />
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

            <Route path="/admin/therapist-home" element={<TherapistHome />} />
            <Route path="/admin/profile" element={<TherapistProfile />} />
            <Route path="/admin/reports" element={<Reports />} />

            <Route
              path="/admin/reports/ongoing-appointments"
              element={<OnGoingAppointments />}
            />

            <Route
              path="/admin/reports/appointments-detail"
              element={<AppointmentDetail />}
            />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
