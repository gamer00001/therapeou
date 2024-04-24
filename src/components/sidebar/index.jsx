import React from "react";

// * Components

import { useNavigate } from "react-router-dom";
import panelSideBar from "../../constants/sidebar";

import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

import Logo from "../../assets/admin-logo.png";
import LogoutLogo from "../../assets/logout-icon.png";
import {
  getUserInfoFromStorage,
  logoutUser,
} from "../../utility/common-helper";
// import { SafetyDivider } from "@mui/icons-material";

const Sidebar = () => {
  const navigate = useNavigate();

  const currentUserInfo = getUserInfoFromStorage();

  const sideBarContent =
    panelSideBar()[currentUserInfo?.userType || "superAdmin"];

  const dynamicMenu = sideBarContent;

  return (
    <div className={styles.sideBar} data-testid="side-bar">
      <Typography className={styles.footerLogoContainer} component="div">
        <img
          src={Logo}
          className={styles.siteLogo}
          alt="logo"
          onClick={() => navigate("/")}
        />
      </Typography>

      {currentUserInfo?.userType === "admin" && (
        <>
          <AdminProfileView />

          <hr className="w-100 mb-12" />
        </>
      )}

      {dynamicMenu &&
        dynamicMenu?.map((item, index) => (
          <div
            key={index}
            className={`${styles.cellWrap} ${
              window.location.pathname.includes(item.path) &&
              `${styles.cellActive}`
            }`}
            onClick={() => navigate(item.path)}
          >
            <div>
              <div className={`${styles.cell}`}>
                <div className={styles.icon}>{item.icon()}</div>
                <div className={styles.sideTitle}>
                  <p>{item.text.at(0).toUpperCase() + item.text.slice(1)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      <Typography
        className={styles.logout}
        component="div"
        onClick={() => {
          logoutUser();
          navigate("/");
        }}
      >
        <img src={LogoutLogo} alt="logout" />
        Logout
      </Typography>
    </div>
  );
};

export default Sidebar;

const AdminProfileView = () => {
  const currentUserInfo = getUserInfoFromStorage();

  return (
    <div className={styles.profileViewBlock}>
      <img src="/user-logo.png" alt="profile-logo" />

      <div className={styles.adminName}>{currentUserInfo.fullName}</div>
      <div className={styles.adminEmail}>{currentUserInfo.email}</div>
    </div>
  );
};
