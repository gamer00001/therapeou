import React from "react";
import { Grid, Typography } from "@mui/material";
import Logo from "../../assets/logo1.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";

import styles from "./style.module.css";
import { FooterLinks } from "../../constants/Home";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <Grid className={styles.footerContainer} container>
      <Grid item xs={4} md={4} lg={4}>
        <Typography className={styles.footerLogoContainer} component="div">
          <img src={Logo} className={styles.footerLogo} alt="logo" />
          <span className={styles.logoName}>Therapeou</span>
        </Typography>
        <Typography className={styles.socialLinks} component="div">
          <img
            alt="facebook"
            src={FacebookIcon}
            className={styles.socialsLogo}
          />
          <img
            alt="facebook"
            src={InstagramIcon}
            className={`${styles.socialsLogo} ${styles.socialsSpacing}`}
          />
        </Typography>
        <div>
          <br />
          Copyright &copy; {new Date().getFullYear()}
        </div>
      </Grid>

      <Grid item xs={8} md={8} lg={8} className={styles.linksContainer}>
        {FooterLinks.map((item) => {
          return (
            <Grid container direction="row">
              <Grid item md={12}>
                <Typography
                  className={styles.listTitle}
                  variant="h4"
                  component="h4"
                >
                  {item.heading}
                </Typography>
                <HighLight titles={item.titles} />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Footer;

const HighLight = ({ titles }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex gap-40">
      {titles.map((item) => {
        return (
          <div item md={3}>
            <Typography
              className={styles.listSubtitle}
              variant="h4"
              component="h4"
              onClick={() => navigate(item.goTo)}
            >
              {item.title}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
