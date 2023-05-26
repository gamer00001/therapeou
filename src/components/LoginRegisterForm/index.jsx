import React from "react";
import { Grid, Input, Typography } from "@mui/material";
import styles from "./style.module.css";
import fbSocial from "../../assets/fb-social.png";
import googleSocial from "../../assets/google-social.png";
import CButton from "../CButton";
import SocialLinkButton from "../../components/SocialLinkButton";
import Img from "../../assets/login-img.png";

const LoginRegisterForm = ({
  title = "Create Account",
  actionText = "Login",
  redirectText = "Login",
  fields = [],
}) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={4} className={styles.loginContainer}>
        <img src={Img} className={styles.imgBackStyles} />
      </Grid>
      <Grid item xs={8}>
        <Grid
          container
          justifyContent="center"
          style={{ padding: "140px 320px 50px 320px" }}
        >
          <Typography component="h4" className={styles.registerTitle}>
            {title}
          </Typography>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <SocialLinkButton icon={googleSocial} text="Sign up with Google" />
          </Grid>

          <Grid item>
            <SocialLinkButton icon={fbSocial} text="Sign up with Facebook" />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" style={{ padding: "60px 0px" }}>
          <Grid item>
            <Typography component="h4" className={styles.orText}>
              -OR-
            </Typography>
          </Grid>
        </Grid>

        {fields.map((item, index) => {
          return (
            <Grid
              container
              justifyContent="center"
              style={{ paddingTop: index === 0 ? "" : "40px" }}
            >
              <Input
                placeholder={item.placeholder}
                className={styles.registerFields}
              />
            </Grid>
          );
        })}

        <Grid container justifyContent="center" style={{ paddingTop: "40px" }}>
          <Grid item>
            <CButton
              title={actionText}
              type="Submit"
              width="462px"
              height="67px"
            />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          style={{ paddingTop: "40px", paddingRight: "250px" }}
        >
          <Grid item className={styles.lastSubtitle}>
            <span>Already have an account? </span>
            <span className={styles.underline}>{redirectText}</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginRegisterForm;
