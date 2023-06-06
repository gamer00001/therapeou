import React, { useState } from "react";
import { Grid, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

import LoginImg from "../../assets/login-img.png";
import SignupImg from "../../assets/signup-img.png";
import TherapistImg from "../../assets/therapist-icon.png";
import PatientImg from "../../assets/patient-icon.png";

import CButton from "../CButton";
import AccountTypeBlock from "../AccountTypeBlock";

const LoginRegisterForm = ({
  title = "Create Account",
  actionText = "Login",
  redirectText = "Login",
  fields = [],
  redirectRoute = "login",
  actionHandler,
  formType = "Login",
}) => {
  const [isPatient, setIsPatient] = useState(false);

  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={4} className={styles.loginContainer}>
        <img
          src={formType === "Sign Up" ? LoginImg : SignupImg}
          className={styles.imgBackStyles}
          alt="login"
        />
      </Grid>
      <Grid item xs={8}>
        {formType !== "Login" && (
          <Grid container className={styles.userTypeBlock}>
            <Grid item>
              <AccountTypeBlock
                img={TherapistImg}
                customStyles={{
                  border: !isPatient
                    ? "3px solid #3C5671"
                    : "3px solid #000000",
                }}
                onClick={() => setIsPatient(false)}
                text="I'm a therapist, looking for a patient"
              />
            </Grid>
            <Grid item>
              <AccountTypeBlock
                img={PatientImg}
                onClick={() => setIsPatient(true)}
                customStyles={{
                  border: isPatient ? "3px solid #3C5671" : "3px solid #000000",
                }}
                text="I'm a patient, searching for a therapist"
              />
            </Grid>
          </Grid>
        )}

        <Grid
          container
          justifyContent="center"
          style={{
            padding: formType === "Login" ? "140px 320px 50px 320px" : "",
          }}
        >
          <Typography component="h4" className={styles.registerTitle}>
            {title}
          </Typography>
        </Grid>

        {/* <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <SocialLinkButton icon={googleSocial} text="Sign up with Google" />
          </Grid>

          <Grid item>
            <SocialLinkButton icon={fbSocial} text="Sign up with Facebook" />
          </Grid>
        </Grid> */}

        {/* <Grid container justifyContent="center" style={{ padding: "60px 0px" }}>
          <Grid item>
            <Typography component="h4" className={styles.orText}>
              -OR-
            </Typography>
          </Grid>
        </Grid> */}

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
              onClick={actionHandler}
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
            <span
              className={styles.underline}
              onClick={() => navigate(`/${redirectRoute}`)}
            >
              {redirectText}
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginRegisterForm;
