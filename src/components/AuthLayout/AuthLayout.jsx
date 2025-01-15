import React from "react";
import css from "./AuthLayout.module.css";
import VectorBg from "Images/vector.png";
import Banana from "Images/Banana.png";
import Leaves from "Images/Leaves.png";
import Strawberry from "Images/Strawberry.png";
import LeavesTablet from "Images/LeavesTablet.png";


function AuthLayout({ children }) {
  return (
    <div className={css.authContainer}>
         <div className={css.formWrapper}>
        {children}
      </div>
        <div className={css.imagesContainer}>
      <img src={VectorBg} alt="vector" className={css.vectorBg} />
      <img src={Banana} alt="banana" className={css.bananaImg} />
      <img src={Strawberry} alt="strawberry" className={css.strawberryImg} />
      <img src={Leaves} alt="leaves" className={css.leavesImg} />
      <img src={LeavesTablet} alt="leaves small" className={css.leavesTabletImg} />
      </div>
      
     
    </div>
  );
}

export default AuthLayout;