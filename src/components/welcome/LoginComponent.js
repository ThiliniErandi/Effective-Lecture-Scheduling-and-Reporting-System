import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';

const Login = () => {
  
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      rememberPassword: false,
    },
    
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      // rememberPassword: Yup.boolean().test()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>

      <div className="input-box" id='input-box'> 
      <input
        className='formInput'
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />
          <label className='formLabel'>Username</label>
      </div>
  
      {formik.touched.userName && formik.errors.userName ? (
        <div className='input-feedback !mportant'>{formik.errors.userName}</div>
      ) : null}
     
     <div className="input-box" >
      <input
        className='formInput'
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
        <label className='formLabel'>Password</label>
      </div>
    
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
        <label className="form-check-label" for="flexCheckChecked">Remember me</label>
        </div>
        <div className="col">
        <p className="forgot-password">
                    Forgot <Link to={"/ForgotPassword"}>Password</Link></p>
        </div>
        </div>
      <button className='formBtn' type="submit">LOGIN</button>
    </form>
  );
};

export default Login;
