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
};

const Register = () => {
  const [state, setState] = useState({
    initialValues,
    isPatient: false,
    loading: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      handleUserRegisteration(values);
      setSubmitting(false);
    }, 500);
  };

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
    setState((prev) => ({
      ...prev,
      loading: !prev.loading,
    }));

    const type = location?.state?.selectedType || "patient";

    let apiToCall;
    if (type === "patient") {
      apiToCall = patientSignupApi;
    } else {
      apiToCall = therapistSignupApi;
    }

    let signupBody = prepareApiDataForRegistration(data);

    const signupResposne = await apiToCall(signupBody);

    setState((prev) => ({
      ...prev,
      loading: !prev.loading,
    }));

    const userInfo = signupResposne?.data;
    delete userInfo.password;

    if (signupResposne?.status === 201) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      await handleFirebaseAction(data);

      setTimeout(() => {
        navigate("/admin/overview");
      }, 500);
    } else if (signupResposne?.status === 409) {
      return toast.error("User Already Exist with this email.");
    } else {
      return toast.error("Some Error Occred. Please try again in few moments.");
    }
  };

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
  }, []);

  console.log({ location });

  return (
    <>
      {state.loading && <Loader />}
      <Navbar loginRegisterCheck={false} />

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
