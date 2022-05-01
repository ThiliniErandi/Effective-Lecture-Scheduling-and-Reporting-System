import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import * as Yup from 'yup';
import './login.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // rememberPassword: false,
    },

    validationSchema: Yup.object({
      email: Yup.string('Invalid email').required().email(),
      password: Yup.string('Does not match with the email').required(),
      // rememberPassword: Yup.boolean().test()
    }),

    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));

      axios.post("http://localhost:8070/users/login", values, {
        withCredentials: true
      })
        .then((res) => {

          if (res.data.status !== 'Login Faild!') {
            window.location = '/home';
          } else {
            toast.error("Email and Password not Matched!");
          }
          console.log(res)
        }).catch((err) => {

        })

    },

  });

  const genarateError = (err) => toast.error(err, {
    position: "top-right"
  })

  return (
    <>
      <form className="form" id='loginForm' onSubmit={formik.handleSubmit}
        style={{ width: '568px', paddingTop: '500px', paddingLeft: '200px', display: 'block' }}>

        <MDBInput
          label='Email'
          id="email"
          name="email"
          type="text"
          style={{ marginBottom: '10px' }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className='input-feedback !mportant'>{formik.errors.email}</div>
        ) : null}

        <MDBInput
          label="Password"
          id="password"
          name="password"
          type="password"
          style={{ marginBottom: '10px' }}
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
        <MDBBtn className='formBtn' type="submit" style={{ paddingInline: '162px' }}>LOGIN</MDBBtn>
      </form>

      <ToastContainer />
    </>
  );


};

export default Login;
