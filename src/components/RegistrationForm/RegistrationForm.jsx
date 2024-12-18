import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from './RegisterSchema'; 

import { register } from '../AREDUX/Auth/operations'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    
      const { confirmPassword, ...payload } = values;
      console.log("Payload to be sent:", payload);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      console.log("Before dispatch...");
      await dispatch(register(payload)).unwrap();
      
      setSuccessMessage('User registered successfully! Please go to email!');
      resetForm(); 
    } catch (error) {
      console.error("Error during registration:", error); 
      setErrorMessage(error || 'Registration failed!');
    } finally {
      console.log("Finished submission");
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting }) => (
        <Form className="register-form">
          <div>
            <p>Register</p>
            <label htmlFor="username">Name</label>
            <Field
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type='button' onClick={()=> navigate("/login") }>Log in</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;