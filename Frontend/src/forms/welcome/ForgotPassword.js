import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import './login.css';

const Login = () => {
  
  const formik = useFormik({
    initialValues: {
      userName: '',
    },
    
    validationSchema: Yup.object({
      userName: Yup.string().required('Please enter a valid username'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
        <div>
          <MDBBtn href="/" color='warning' style={{float:'right', paddingInline:'30px'}}>Back</MDBBtn>
        </div>
        <h3 style={{paddingBottom:'50px'}}>Forgot Password?</h3>
        <h6>To reset your password, submit your username below. We will sent an email to your email address, with instructions how to get access again.</h6>
    <form className="forgotPwd-form" onSubmit={formik.handleSubmit} >

      <MDBInput
        label='Username'
        id="userName"
        name="userName"
        type="text"
        style={{ marginBottom:'20px', marginLeft:'20px',width:'250px'}}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />
  
      {formik.touched.userName && formik.errors.userName ? (
        <div className='forgotPwd-feedback !mportant'>{formik.errors.userName}</div>
      ) : null}
  
      <MDBBtn variant="primary" style={{marginLeft:'4px',width:'550px'}}>Send Password Reset Email</MDBBtn>
    </form>
    </div>
  );
};

export default Login;
