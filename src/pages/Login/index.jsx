import React from "react";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import { LoginFields } from "../../constants/LoginRegister";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginRegisterForm
      title="Sign In"
      actionText="Sign in"
      redirectText="Sign Up"
      fields={LoginFields}
      redirectRoute="register"
      actionHandler={() => navigate("/admin/overview")}
    />
  );
};

export default Login;
