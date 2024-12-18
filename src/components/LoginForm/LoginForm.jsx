import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from './LoginSchema'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../AREDUX/Auth/operations';


const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values); 
    try {
    
    const response =  await dispatch(login(values));
    console.log('Full server response:', response);
 
    
      alert('Login successful!');
      navigate('/dashboard'); // Redirecționare după login
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed! Please check your credentials and try again.');
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="login-form">
          <div>
            <p>Log In</p>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="email"
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
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          <button type='button' onClick={()=> navigate("/register") }>Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
