import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

import LoginImg from "../../assets/login-img.png";
import SignupImg from "../../assets/signup-img.png";
import TherapistImg from "../../assets/therapist-icon.png";
import PatientImg from "../../assets/patient-icon.png";

import CButton from "../CButton";
import AccountTypeBlock from "../AccountTypeBlock";

import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const validationSchemaForSignup = Yup.object({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const validationSchemaForLogin = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginRegisterForm = ({
  title = "Create Account",
  actionText = "Login",
  redirectText = "Login",
  fields = [],
  redirectRoute = "login",
  actionHandler,
  formType = "Login",
  isPatient,
  setIsPatient,
  initialValues,
  handleSubmit,
}) => {
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
        <Grid
          container
          justifyContent="center"
          // style={{
          //   padding: formType === "Login" ? "140px 320px 50px 320px" : "",
          // }}
        >
          <Typography component="h4" className={styles.registerTitle}>
            {title}
          </Typography>
        </Grid>

        {/* {formType !== "Login" && ( */}
        <Grid container className={styles.userTypeBlock}>
          <Grid item>
            <AccountTypeBlock
              img={TherapistImg}
              isPatient={isPatient}
              customStyles={{
                border: !isPatient ? "3px solid #3C5671" : "3px solid #000000",
              }}
              onClick={() => setIsPatient(false)}
              text="I'm a therapist, looking for a patient"
            />
          </Grid>
          <Grid item>
            <AccountTypeBlock
              img={PatientImg}
              isPatient={!isPatient}
              onClick={() => setIsPatient(true)}
              customStyles={{
                border: isPatient ? "3px solid #3C5671" : "3px solid #000000",
              }}
              text="I'm a patient, searching for a therapist"
            />
          </Grid>
        </Grid>
        {/* )} */}

        <Grid container justifyContent="center">
          <Formik
            initialValues={initialValues}
            validationSchema={
              formType === "Login"
                ? validationSchemaForLogin
                : validationSchemaForSignup
            }
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched, values, handleChange }) => (
              <>
                <Form>
                  {fields.map((item, index) => (
                    <Grid
                      item
                      className={styles.formGroupContainer}
                      key={index}
                    >
                      <Field
                        // as="textarea"
                        name={item.fieldName}
                        type={item.type}
                        label={item.placeholder}
                        onChange={handleChange}
                        placeholder={item.placeholder}
                        // className={styles.registerFields}
                        className={`${styles.registerFields} form-control ${
                          errors[item.fieldName] &&
                          touched[item.fieldName] &&
                          `${styles.isInvalid}`
                        }`}
                      />
                      <ErrorMessage
                        name={item.fieldName}
                        component="div"
                        className={styles.errorMessage}
                      />
                    </Grid>
                  ))}
                  <Grid
                    container
                    justifyContent="center"
                    style={{ paddingTop: "40px" }}
                  >
                    <Grid item>
                      <CButton
                        formType="submit"
                        disabled={isSubmitting}
                        title={actionText}
                        type="Submit"
                        width="462px"
                        height="67px"
                        style={{ paddingTop: "40px" }}
                      />
                    </Grid>
                  </Grid>
                </Form>
              </>
            )}
          </Formik>
          {/* </Grid> */}
        </Grid>

        {/* <Grid container justifyContent="center" style={{ paddingTop: "40px" }}>
          <Grid item>
            <CButton
              title={actionText}
              type="Submit"
              width="462px"
              height="67px"
              onClick={actionHandler}
            />
          </Grid>
        </Grid> */}

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
