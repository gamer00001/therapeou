import React from "react";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import { LoginFields } from "../../constants/LoginRegister";

const Login = () => {
  return (
    <LoginRegisterForm
      title="Sign In"
      actionText="Sign in"
      redirectText="Sign Up"
      fields={LoginFields}
    />
  );
};

export default Login;
