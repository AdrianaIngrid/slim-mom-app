import React from "react";
// import { useSelector } from "react-redux";


import UserForm from "components/UserForm/UserForm";

function CalculateForm () {
    // const user = useSelector((state) => state.auth.user);

    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  
    return (
      <div>
        {/* {isLoggedIn ? (
          <h1> {user.username}</h1>
        ) : (
          <h1>Welcome, Guest!</h1>
        )}
         <button>Exit</button> */}
        <UserForm/>
       
      </div>
    );
};
export default CalculateForm