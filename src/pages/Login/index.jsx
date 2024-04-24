import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";

import LoginRegisterForm from "../../components/LoginRegisterForm";
import { LoginFields } from "../../constants/LoginRegister";
import { useLocation, useNavigate } from "react-router-dom";
import { patientLoginApi } from "../../api/patient-api";
import { therapistLoginApi } from "../../api/therapist-api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import { logoutUser as emptyLocalStorage } from "../../utility/common-helper";
// import { auth } from "../../firebase";

const initialValues = {
  email: "",
  password: "",
  type: "patient",
};

const Login = (props) => {
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

  const checkForRegistration = (therapistData) => {
    if (!therapistData.city) {
      navigate("/therapist/registeration-process", {
        state: {
          tabId: 0,
          userInfo: therapistData,
        },
      });
    } else if (!therapistData.specialization) {
      navigate("/therapist/registeration-process", {
        state: {
          tabId: 1,
          userInfo: therapistData,
        },
      });
    } else navigate("/admin/therapist-home");
  };

  const handleUserLogin = async (data) => {
    const { adminLogin } = props;

    if (adminLogin) {
      return navigate("/admin/dashboard");
    }

    let apiToHit;

    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));

    const type = location?.state?.selectedType || "patient";

    if (type === "patient") {
      apiToHit = patientLoginApi;
    } else if (adminLogin) {
      apiToHit = patientLoginApi;
    } else {
      apiToHit = therapistLoginApi;
    }

    const loginResposne = await apiToHit(data);

    if (loginResposne?.status === 200) {
      emptyLocalStorage();

      let userInfo = loginResposne?.data;
      userInfo = {
        ...userInfo,
        userType: adminLogin ? "admin" : type,
        apiUserInfo: loginResposne?.data,
      };

      delete userInfo.password;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // try {
      //   await signInWithEmailAndPassword(auth, data.email, data.password);
      //   navigate("/");
      // } catch (err) {
      //   console.log(err);
      // }
      if (type === "therapist") {
        return checkForRegistration(loginResposne?.data);
      } else {
        navigate("/admin/overview");
      }
    } else {
      setState((prev) => ({
        ...prev,
        isLoading: !prev.isLoading,
      }));
      return toast.error("Invalid Email or Password.");
    }
  };

  return (
    <>
      {state.isLoading && <Loader isShow={state.isLoading} />}
      <Navbar showLogin={false} />

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
