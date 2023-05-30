import React, { Component } from "react";

// * Components

import { Link } from "react-router-dom";
import panelSideBar from "../../constants/sidebar";

import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

import Logo from "../../assets/admin-logo.png";

class Sidebar extends Component {
  state = {
    pathname: "",
    userRole: "",
    accessToken: undefined,
    currentLoggedInUserDetails: {},
  };

  render() {
    // const { pathname } = this.state;

    const sideBarContent = panelSideBar()["admin"];

    const dynamicMenu = sideBarContent;

    return (
      <div className={styles.sideBar} data-testid="side-bar">
        <Typography className={styles.footerLogoContainer} component="div">
          <img src={Logo} className={styles.footerLogo} alt="logo" />
          {/* <span className={styles.logoName}>Therapeou</span> */}
        </Typography>

        {dynamicMenu &&
          dynamicMenu?.map((item, index) => (
            <div key={index} className={styles.cellWrap}>
              <Link href={item.path}>
                <div
                  className={`${styles.cell}`}
                  //   className={`(styles.cell, {
                  //     cellActive: pathname.includes(item.path),
                  //   })`}
                >
                  {/* <div className={styles.icon}>
                    <Hover onHover={item.icon("#fff", 20, 20)}>
                      {item.icon("#F31C23", 20, 20)}
                    </Hover>
                  </div> */}
                  <div className={styles.sideTitle}>
                    <p>{item.text.at(0).toUpperCase() + item.text.slice(1)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Sidebar;
