import React, { useEffect, useState } from "react";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import { RegisterFields } from "../../constants/LoginRegister";
import { patientSignupApi } from "../../api/patient-api";
import { therapistSignupApi } from "../../api/therapist-api";
import { prepareApiDataForRegistration } from "../../data-parsers/user-registration";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const initialValues = {
  name: "",
  email: "",
  password: "",
  type: "patient",
  termsCheck: false,
};

const Register = () => {
  const [state, setState] = useState({
    initialValues,
    isPatient: false,
    loading: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      loading: !prev.loading,
    }));
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.termsCheck) {
      setTimeout(() => {
        handleUserRegisteration(values);
        setSubmitting(false);
      }, 500);
    } else {
      return toast.error("Please accept terms and conditions first.");
    }
  };

  function isStrongPassword(password) {
    // Regular expressions to check for each condition
    const capitalLetterRegex = /[A-Z]/;
    const smallLetterRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    // Check if the password meets all the conditions
    const hasCapitalLetter = capitalLetterRegex.test(password);
    const hasSmallLetter = smallLetterRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialCharacter = specialCharacterRegex.test(password);

    // Return true if all conditions are met
    return (
      hasCapitalLetter && hasSmallLetter && hasNumber && hasSpecialCharacter
    );
  }

  const handleFirebaseAction = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      //Update profile
      await updateProfile(res.user, {
        displayName: data.fullName,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: data.fullName,
        email: data.email,
      });

      await setDoc(doc(db, "userChats", res.user.uid), {});
    } catch (err) {
      console.log({ err });
    }

    return;
  };

  const handleUserRegisteration = async (data) => {
    if (!isStrongPassword(data.password)) {
      return toast.error(
        "Password is not strong. It should contain at least one capital letter, one lowercase letter, one digit, and one special character."
      );
    }

    let latitude, longitude;
    handleLoader();

    navigator.geolocation.getCurrentPosition(async (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      const type = location?.state?.selectedType || "patient";

      let apiToCall;
      if (type === "patient") {
        apiToCall = patientSignupApi;
      } else {
        apiToCall = therapistSignupApi;
      }

      let signupBody = prepareApiDataForRegistration(data);

      const signupResposne = await apiToCall({
        ...signupBody,
        lat: latitude,
        lng: longitude,
      });

      handleLoader();

      const userInfo = signupResposne?.data;
      delete userInfo.password;

      if (signupResposne?.status === 201) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...userInfo, userType: type })
        );

        await handleFirebaseAction(data);

        setTimeout(() => {
          if (type === "therapist") {
            navigate("/therapist/registeration-process", {
              state: { userInfo },
            });
            // navigate("/admin/therapist-home");
          } else {
            navigate("/admin/overview");
          }
        }, 500);
      } else if (signupResposne?.status === 409) {
        toast.error("User Already Exist with this email.");
      } else {
        toast.error("Some Error Occred. Please try again in few moments.");
      }
    });
  };

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
  }, []);

  return (
    <>
      {state.loading && <Loader />}
      <Navbar showRegister={false} />

      <LoginRegisterForm
        state={state}
        title="Create Account"
        actionText="Create Account"
        redirectText="Log In"
        fields={RegisterFields}
        redirectRoute="login"
        formType="Sign Up"
        isPatient={state?.isPatient}
        handleSubmit={handleSubmit}
        initialValues={state.initialValues}
        setIsPatient={() => setState({ ...state, isPatient: !state.isPatient })}
      />
    </>
  );
};

export default Register;
