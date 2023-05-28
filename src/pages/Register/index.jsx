import React from "react";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import { RegisterFields } from "../../constants/LoginRegister";

const Register = () => {
  return (
    <LoginRegisterForm
      title="Create Account"
      actionText="Create Account"
      redirectText="Log In"
      fields={RegisterFields}
      redirectRoute="login"
    />
  );
};

export default Register;
