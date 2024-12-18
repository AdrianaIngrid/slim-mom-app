import React from "react";
// import { Link } from "react-router-dom";

import css from "./PageStyles.module.css";
import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={css.pageContainer}>
      <LoginForm/>
      <nav className={css.nav}>
        {/* <Link to="/register" className={css.navButton}>
          Register
        </Link> */}
        {/* <Link to="/login" className={`${css.navButton} ${css.active}`}>
          Log In
        </Link> */}
      </nav>
      
    </div>
  );
};

export default LoginPage;