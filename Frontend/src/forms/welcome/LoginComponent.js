import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import {  MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import * as Yup from 'yup';
import './login.css';
import axios from 'axios';

const Login = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      // rememberPassword: false,
    },
    
    validationSchema: Yup.object({
      username: Yup.string('Invalid Username').required(),
      password: Yup.string('Does not match with the username').required(),
      // rememberPassword: Yup.boolean().test()
    }),

    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));

      axios.get("http://localhost:8070/users/view", values)
      .then((res)=> {
          alert("Login successfully");
          window.location = '/home';
          // values({ username: "", password: ""})
      }).catch((err)=>{
          alert("Something went wrong")
      })
    },
  
  });

  return (
    <form className="form" id='loginForm' onSubmit={formik.handleSubmit} 
          style={{ width:'568px', paddingTop: '500px', paddingLeft: '200px', display: 'block' }}>

      <MDBInput
        label='Username'
        id="username"
        name="username"
        type="text"
        style={{ marginBottom:'10px' }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
    
      {formik.touched.username && formik.errors.username ? (
        <div className='input-feedback !mportant'>{formik.errors.username}</div>
      ) : null}
    
      <MDBInput
        label="Password"
        id="password"
        name="password"
        type="password"
        style={{ marginBottom:'10px' }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        autoComplete='off'
      />
    
      {formik.touched.password && formik.errors.password ? (
        <div className='input-feedback !mportant'>{formik.errors.password}</div>
      ) : null}

      <div className="row">
        <div className="col from-check ">
        <input
          className='remember'
          name="remember"
          type="checkbox"
          label="Remember me"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rememberPassword}
          id="flexCheckChecked" 
          />
        <label className="form-check-label" htmlFor="flexCheckChecked">Remember me</label>
        </div>
        <div className="col">
        <p className="forgot-password">
                    Forgot <Link to={"/ForgotPassword"}>Password</Link></p>
        </div>
        </div>
      <MDBBtn className='formBtn' type="submit" style={{ paddingInline:'162px' }}>LOGIN</MDBBtn>
    </form>

);
    
 
};

export default Login;
