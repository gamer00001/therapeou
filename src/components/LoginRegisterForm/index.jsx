import React, { useState } from "react";
import {
  Grid,
  Input,
  Checkbox,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import CButton from "../CButton";

import SignupImg from "../../assets/signup-img.png";
import LoginImg from "../../assets/login-img.png";

import styles from "./style.module.css";

const validationSchemaForSignup = Yup.object({
  // fullName: Yup.string().required("Name is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
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
  // const navigate = useNavigate();

  const [termsCheck, setTermsCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
        <Grid container justifyContent="center">
          <Typography component="h4" className={styles.registerTitle}>
            {title}
          </Typography>
        </Grid>

        {/* <Grid container className={styles.userTypeBlock}>
          <Grid item>
            <AccountTypeBlock
              img={TherapistImg}
              isPatient={!isPatient}
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
              isPatient={isPatient}
              onClick={() => setIsPatient(true)}
              customStyles={{
                border: isPatient ? "3px solid #3C5671" : "3px solid #000000",
              }}
              text="I'm a patient, searching for a therapist"
            />
          </Grid>
        </Grid> */}

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
            {({ errors, touched, setFieldValue, handleChange }) => (
              <>
                <Form>
                  {fields.map((item, index) => (
                    <Grid
                      item
                      className={styles.formGroupContainer}
                      key={index}
                    >
                      {item.type === "text" ? (
                        <>
                          <Input
                            name={item.fieldName}
                            type={item.type}
                            label={item.placeholder}
                            onChange={handleChange}
                            placeholder={item.placeholder}
                            className={`${styles.registerFields} form-control ${
                              errors[item.fieldName] &&
                              touched[item.fieldName] &&
                              `${styles.isInvalid}`
                            }`}
                          />
                        </>
                      ) : (
                        <>
                          <Input
                            name={item.fieldName}
                            placeholder={item.placeholder}
                            id="filled-adornment-password"
                            type={showPassword ? "text" : "password"}
                            fullWidth={true}
                            className={`${styles.registerFields} form-control ${
                              errors[item.fieldName] &&
                              touched[item.fieldName] &&
                              `${styles.isInvalid}`
                            }`}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => setShowPassword(!showPassword)}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name={item.fieldName}
                            component="div"
                            className={styles.errorMessage}
                          />
                        </>
                      )}
                    </Grid>
                  ))}
                  {formType !== "Login" && (
                    <Grid>
                      <Checkbox
                        value={termsCheck}
                        onChange={() => {
                          setTermsCheck(!termsCheck);
                          setFieldValue("termsCheck", !termsCheck);
                        }}
                      />
                      I Agree to terms and conditions
                    </Grid>
                  )}
                  <Grid
                    container
                    justifyContent="center"
                    style={{ paddingTop: "40px" }}
                  >
                    <Grid item>
                      <CButton
                        formType="submit"
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
      </Grid>
    </Grid>
  );
};

export default LoginRegisterForm;
