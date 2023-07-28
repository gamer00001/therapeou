import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import LoginRegisterForm from "../../components/LoginRegisterForm";
import { LoginFields } from "../../constants/LoginRegister";
import { useLocation, useNavigate } from "react-router-dom";
import { patientLoginApi } from "../../api/patient-api";
import { therapistLoginApi } from "../../api/therapist-api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import { auth } from "../../firebase";

const initialValues = {
  email: "",
  password: "",
  type: "patient",
};

const Login = () => {
  const [state, setState] = useState({
    initialValues,
    isLoading: false,
    isPatient: true,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      handleUserLogin(values);
      setSubmitting(false);
    }, 500);
  };

  const handleUserLogin = async (data) => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));

    const type = location?.state?.selectedType || "patient";

    let apiToHit;
    if (type === "patient") {
      apiToHit = patientLoginApi;
    } else {
      apiToHit = therapistLoginApi;
    }

    const loginResposne = await apiToHit(data);

    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));

    if (loginResposne.status === 200) {
      let userInfo = loginResposne?.data;
      userInfo = {
        ...userInfo,
        userType: type,
      };
      delete userInfo.password;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
      if (type === "therapist") {
        navigate("/admin/therapist-home");
      } else {
        navigate("/admin/overview");
      }
    } else {
      return toast.error("Invalid Email or Password.");
    }
  };

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
  }, []);

  return (
    <>
      {state.isLoading && <Loader isShow={state.isLoading} />}
      <Navbar loginRegisterCheck={false} />

      <LoginRegisterForm
        state={state}
        initialValues={state.initialValues}
        title="Welcome Back"
        actionText="Sign in"
        redirectText="Sign Up"
        fields={LoginFields}
        redirectRoute="register"
        handleSubmit={handleSubmit}
        actionHandler={() => navigate("/admin/overview")}
      />
    </>
  );
};

export default Login;
