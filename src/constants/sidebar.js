import SettingsIcon from "../assets/settings-side-icon.png";

import OverviewIcon from "../assets/overview-side-icon.png";
import AppointmentIcon from "../assets/appointment-side-icon.png";
import LearningIcon from "../assets/learning-side-icon.png";

const panelSideBar = () => ({
  admin: [
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
});

export default panelSideBar;
