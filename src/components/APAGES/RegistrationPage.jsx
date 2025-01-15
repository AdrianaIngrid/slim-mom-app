import React from "react";

import RegistrationForm from "../RegistrationForm/RegistrationForm";
import css from "./PageStyles.module.css";

const RegisterPage = () => {
  return (
    <div className={css.pageContainer}>
       <RegistrationForm isLoginMode={false} />    
    </div>
  );
};

export default RegisterPage;