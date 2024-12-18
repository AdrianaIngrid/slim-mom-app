import React from "react";
import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Header/Header.jsx";
import RegisterPage from "../components/APAGES/RegistrationPage.jsx";
import LoginPage from "./APAGES/LoginPage.jsx";
import Form from "./Form/Form.jsx";
import CalculateForm from "./Calculate/CalculateForm.jsx";
import Diary from "../components/Diary/Diary.js";

import '../index.css';
import { Suspense } from "react";


import css from "./App.module.css";

const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? "/slim-mom-app" : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>

      <div className={css.back}>
      <Header />
      
      <Suspense fallback= {<p>Loading....</p>}>
      
      
      
      <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/dashboard" element={<CalculateForm/>} />
      <Route path="/diary" element={<Diary/>} />
         <Route path="*" element={<Form/>} />
      </Routes>
      </Suspense>
      </div>
    
    </BrowserRouter>
  );
}



export default App;
