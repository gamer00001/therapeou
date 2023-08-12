import SettingsIcon from "../assets/settings-side-icon.png";

import OverviewIcon from "../assets/overview-side-icon.png";
import AppointmentIcon from "../assets/appointment-side-icon.png";
import LearningIcon from "../assets/learning-side-icon.png";

const panelSideBar = () => ({
  patient: [
    {
      text: "Overview",
      icon: (fill, width, height) => <img src={OverviewIcon} alt="icon" />,
      path: "/admin/overview",
    },
    {
      text: "My Appointments",
      icon: (fill, width, height) => <img src={AppointmentIcon} alt="icon" />,

      path: "/admin/appointments",
    },
    {
      text: "Learning Materials",
      icon: (fill, width, height) => <img src={LearningIcon} alt="icon" />,

      path: "/admin/learning-courses",
    },
    {
      text: "Settings",
      icon: (fill, width, height) => <img src={SettingsIcon} alt="icon" />,
      path: "/admin/settings",
    },
  ],
  therapist: [
    {
      text: "Home",
      icon: (fill, width, height) => <img src={OverviewIcon} alt="icon" />,
      path: "/admin/therapist-home",
    },
    {
      text: "My Profile",
      icon: (fill, width, height) => <img src={AppointmentIcon} alt="icon" />,

      path: "/admin/profile",
    },
    {
      text: "My Calender",
      icon: (fill, width, height) => <img src={AppointmentIcon} alt="icon" />,

      path: "/admin/calender",
    },
    {
      text: "Reports",
      icon: (fill, width, height) => <img src={LearningIcon} alt="icon" />,

      path: "/admin/reports",
    },
    // {
    //   text: "Calender",
    //   icon: (fill, width, height) => <img src={SettingsIcon} alt="icon" />,
    //   path: "/admin/settings",
    // },
    {
      text: "Settings",
      icon: (fill, width, height) => <img src={SettingsIcon} alt="icon" />,
      path: "/admin/settings",
    },
  ],
});

export default panelSideBar;
