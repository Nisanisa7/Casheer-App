import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { StylingLogin } from "./Styled";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { LoginUser } from '../../configs/redux/actions/AuthAction';
import  { Inputfield, Buttons } from '../../component/atom';


const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        onSubmit: values =>{
            dispatch(LoginUser(values, history))
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required').email('Email is invalid'),
            password: Yup.string().required('Password is required')
        })
    })
  return (
    <StylingLogin>
      <div className="wrapper">
      <div className="logo f-25">Login</div>
        <p className="welcome-wagoon f-14">Hi, Welcome Back!</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="form">
            <Inputfield
              className="input-field"
              name="email"
              value={formik.values.email}
              label="Email"
              onChange={formik.handleChange}
              type="email"
              error={formik.errors.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error">{formik.errors.email}</p>
            )}
            <Inputfield
              className="input-field"
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              error={formik.errors.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error">{formik.errors.password}</p>
            )}
            <div class="forgot-pass">
              <Link to="/reset">Forgot password ?</Link>
            </div>
            <Buttons type="submit" classname="button" color="pink">
              Login
            </Buttons>
            <div class="register-link f-14">
              Dont have an account? <Link to="./signup">Sign Up</Link>
            </div>
          </div>
          <div className="hidden">you cant see me!</div>
        </form>
      </div>
    </StylingLogin>
  );
};

export default Login;
