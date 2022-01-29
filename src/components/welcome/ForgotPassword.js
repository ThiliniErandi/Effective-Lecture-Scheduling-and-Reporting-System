import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';
import { Button } from 'react-bootstrap';

const Login = () => {
  
  const formik = useFormik({
    initialValues: {
      userName: '',
    },
    
    validationSchema: Yup.object({
      userName: Yup.string().required('You should enter your username'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
        <div>
        <Button href="/" variant="secondary" style={{float:'right', paddingInline:'30px'}}>Back</Button>
        </div>
        <h3 style={{paddingBottom:'50px'}}>Forgot Password?</h3>
        <h6>To reset your password, submit your username below. We will sent an email to your email address, with instructions how to get access again.</h6>
    <form className="forgotPwd-form" onSubmit={formik.handleSubmit}>

      <div className="forgotPwd-inputBox"> 
      <input
        className='forgotPwd-input'
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />
          <label className='forgotPwd-Label'>Username</label>
      </div>
  
      {formik.touched.userName && formik.errors.userName ? (
        <div className='forgotPwd-feedback !mportant'>{formik.errors.userName}</div>
      ) : null}
  
      <Button variant="primary" style={{width:'550px'}}>Send Password Reset Email</Button>
      {/* <button className='forgotPwd-Btn' type="submit">Send Password Reset Email</button> */}
    </form>
    </div>
  );
};

export default Login;
