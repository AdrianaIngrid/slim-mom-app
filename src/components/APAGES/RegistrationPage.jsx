import React from "react";
// import { Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import css from "./PageStyles.module.css";

const RegisterPage = () => {
  return (
    <div className={css.pageContainer}>
       <RegistrationForm isLoginMode={false} />
      <nav className={css.nav}>
        {/* <Link to="/register" className={`${css.navButton} ${css.active}`}>
          Register
        </Link> */}
        {/* <Link to="/login" className={css.navButton}>
          Log In
        </Link> */}
      </nav>
     
    </div>
  );
};

export default RegisterPage;