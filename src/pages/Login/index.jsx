import React, { useEffect, useState } from "react";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import { LoginFields } from "../../constants/LoginRegister";
import { useNavigate } from "react-router-dom";
import { patientLoginApi } from "../../api/patient-api";
import { therapistLoginApi } from "../../api/therapist-api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState({
    initialValues,
    isLoading: false,
    isPatient: true,
  });

  const navigate = useNavigate();

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

    let apiToHit;
    if (state?.isPatient) {
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
      const userInfo = loginResposne?.data;
      delete userInfo.password;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/admin/overview");
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
      <LoginRegisterForm
        state={state}
        initialValues={state.initialValues}
        title="Welcome Back"
        actionText="Sign in"
        redirectText="Sign Up"
        fields={LoginFields}
        redirectRoute="register"
        isPatient={state.isPatient}
        handleSubmit={handleSubmit}
        setIsPatient={() => setState({ ...state, isPatient: !state.isPatient })}
        actionHandler={() => navigate("/admin/overview")}
      />
    </>
  );
};

export default Login;
