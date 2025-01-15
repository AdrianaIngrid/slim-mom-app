import React from "react";
import css from "./PageStyles.module.css";
import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={css.pageContainer}>
      <LoginForm/>
      <nav className={css.nav}>
       </nav>
      
    </div>
  );
};

export default LoginPage;