import React, { useState } from "react";
import { Grid, Input, Typography } from "@mui/material";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";

import LoginImg from "../../assets/signup-img.png";

import styles from "./styles.module.scss";
import CButton from "../../components/CButton";
import { isStrongPassword, validateEmail } from "../../utility/common-helper";
import { toast } from "react-toastify";
import {
  forgotPasswordApi,
  matchOtpApi,
  newPasswordApi,
} from "../../api/patient-api";
import { isNil } from "lodash";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [state, setState] = useState({
    isLoading: false,
    otp: null,
    email: "",
    newPassword: "",
    confirmPassword: "",
    isOtpSent: false,
    isOtpVerified: false,
  });

  const navigate = useNavigate();

  const showFieldBasedOnState = () => {
    const { isOtpSent, isOtpVerified } = state;

    let fieldsToShow;

    if (isOtpSent) {
      fieldsToShow = (
        <Input
          name="otp"
          type="number"
          label="Enter OTP Code"
          onChange={(e) =>
            setState((prev) => ({ ...prev, otp: e.target.value }))
          }
          placeholder="Enter OTP Code"
          className={`${styles.registerFields} form-control`}
        />
      );
    } else if (isOtpVerified) {
      fieldsToShow = (
        <>
          <Input
            name="New Password"
            placeholder="New Password"
            id="filled-adornment-password"
            type={"password"}
            value={state.newPassword}
            className={`${styles.registerFields} form-control`}
            onChange={(e) =>
              setState((prev) => ({ ...prev, newPassword: e.target.value }))
            }
          />

          <Input
            name="Confirm Password"
            placeholder="Confirm Password"
            id="filled-adornment-password"
            type="password"
            value={state.confirmPassword}
            className={`${styles.registerFields} form-control`}
            onChange={(e) =>
              setState((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
          />
        </>
      );
    } else {
      fieldsToShow = (
        <Input
          name="email"
          type="email"
          label="Enter Email"
          onChange={(e) =>
            setState((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Enter Email"
          className={`${styles.registerFields} form-control`}
        />
      );
    }

    return fieldsToShow;
  };

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev?.isLoading,
    }));
  };

  const showDynamicBtnName = () => {
    const { isOtpSent, isOtpVerified } = state;
    let btnText;

    if (isOtpSent) {
      btnText = "Verify Otp";
    } else if (isOtpVerified) {
      btnText = "Enter Password";
    } else {
      btnText = "Reset Password";
    }

    return btnText;
  };

  const callDynamicAction = () => {
    const { isOtpSent, isOtpVerified } = state;

    if (isOtpSent) {
      handleMatchOtp();
    } else if (isOtpVerified) {
      handleNewPasswordRequest();
    } else {
      handleResetPasswordAction();
    }
  };

  const handleNewPasswordRequest = () => {
    const { otp, email, newPassword, confirmPassword } = state;

    let apiPayload = {
      email,
      otp,
    };

    if (newPassword !== confirmPassword) {
      return toast.error("Password don't match");
    } else if (!isStrongPassword(newPassword)) {
      return toast.error(
        "Password is not strong. It should contain at least one capital letter, one lowercase letter, one digit, and one special character."
      );
    } else {
      handleLoader();

      newPasswordApi(apiPayload, newPassword)
        .then((resp) => {
          if (resp?.status === 200) {
            toast.success(resp?.data ?? "Password Reset.");

            setTimeout(() => {
              navigate("/login");
            }, 1500);
          } else {
            toast.error(resp?.data);
          }
          handleLoader();
        })
        .catch((error) => {
          console.log({ error });
          handleLoader();
        });
    }
  };

  const handleMatchOtp = () => {
    const { otp, email } = state;
    handleLoader();

    let apiPayload = {
      email,
      otp,
    };

    if (!isNil(otp)) {
      matchOtpApi(apiPayload)
        .then((resp) => {
          if (resp.status === 200) {
            setState((prev) => ({
              ...prev,
              isOtpVerified: true,
              isOtpSent: false,
              isLoading: !prev.isLoading,
            }));

            return toast.success(resp?.data);
          } else {
            return toast.error(resp?.data);
          }
        })
        .catch((error) => {
          console.log({ error });
        });
    } else {
      return toast.error("Enter valid otp.");
    }
  };

  const handleResetPasswordAction = () => {
    const { email } = state;

    handleLoader();

    const isValidEmail = validateEmail(email);

    if (isValidEmail) {
      // send reset password link here
      forgotPasswordApi(email)
        .then((resp) => {
          if (resp?.status === 200) {
            setState((prev) => ({
              ...prev,
              isLoading: !prev.isLoading,
              isOtpSent: true,
            }));
            return toast.success(resp?.data);
          } else {
            handleLoader();

            return toast.error(resp?.data);
          }
        })

        .catch((error) => {
          console.log({ error });
          handleLoader();
        });
    } else {
      return toast.error("Enter Valid Email Addess.");
    }
  };

  return (
    <div>
      <>
        {state.isLoading && <Loader isShow={state.isLoading} />}
        <Navbar showLogin={false} />

        <Grid container justifyContent="center">
          <Grid item xs={4} className={styles.loginContainer}>
            <img src={LoginImg} className={styles.imgBackStyles} alt="login" />
          </Grid>
          <Grid item xs={8}>
            <Grid container justifyContent="center">
              <Typography component="h4" className={styles.registerTitle}>
                Forgot Password?
              </Typography>
            </Grid>

            <Grid container justifyContent="center">
              <Typography component="h6" className={styles.subTitle}>
                Enter your email to get a verification code
              </Typography>
            </Grid>

            <Grid item className={styles.formGroupContainer}>
              {showFieldBasedOnState()}
            </Grid>

            <Grid
              container
              justifyContent="center"
              style={{ paddingTop: "40px" }}
            >
              <Grid item>
                <CButton
                  title={showDynamicBtnName()}
                  width="462px"
                  height="60px"
                  onClick={() => callDynamicAction()}
                  type="submit"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default ForgotPassword;
