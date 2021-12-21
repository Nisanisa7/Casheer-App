import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterAdmin } from "../../configs/redux/actions/AuthAction";
import { Buttons, Inputfield } from "../../component/atom";

const SignupAdmin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleBack = () => {
    history.push("/login");
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(RegisterAdmin(values, history));
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
  });
  return (
    <Styles>
      <div className="wrapper">
        <form onSubmit={formik.handleSubmit}>
          <div className="logo f-25">Sign up</div>
          <p className="welcome-wagoon f-14">Let's create your account!</p>
          <div className="form">
            <Inputfield
              className="input-field"
              label="name"
              onChange={formik.handleChange}
              name="name"
              type="text"
              value={formik.values.name}
              error={formik.errors.name}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="error">{formik.errors.name}</p>
            )}
            <Inputfield
              className="input-field"
              label="Email"
              onChange={formik.handleChange}
              name="email"
              type="email"
              value={formik.values.email}
              error={formik.errors.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error">{formik.errors.email}</p>
            )}
            <Inputfield
              className="input-field"
              label="Password"
              onChange={formik.handleChange}
              type="password"
              name="password"
              value={formik.values.pssword}
              error={formik.errors.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error">{formik.errors.password}</p>
            )}
            <Buttons type="submit" classname="button" color="pink">
              Register
            </Buttons>
          </div>
          <div class="register-link f-14">
            Already have an account? <Link to="./signin">Login</Link>
          </div>
          <div className="hidden">you cant see me!</div>
        </form>
      </div>
    </Styles>
  );
};

export default SignupAdmin;
const Styles = styled.div`
  .wrapper {
    width: 500px;
    background: #ffffff;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    border-radius: 30px;
    padding-left: 70px;
    padding-right: 70px;
    margin-left: auto;
    margin-right: auto;
    /* height: 700px; */
    margin-top: 50px;
    .logo {
      padding-top: 42px;
      padding-bottom: 36px;
      text-align: center;
      color: #57cad5;
    }
    .header {
      padding-top: 42px;
      padding-bottom: 37px;
    }
    .welcome-wagoon {
      color: #f24f8a;
    }
    .input-field {
      margin-top: 35px;
    }
    .forgot-pass {
      margin-top: 35px;
      text-align-last: right;
      font-family: "Rubik";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
    }
    .forgot-pass a,
    .register-link a {
      color: #7e98df;
      text-decoration: none;
    }
    h6 {
      display: flex;
      margin-top: 50px;
      flex-direction: row;
      font-family: "Rubik";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #848484;
    }
    h6:before,
    h6:after {
      flex-grow: 1;
      height: 1px;
      content: "";
      background-color: #848484;
      position: relative;
      top: 0.5em;
      margin-left: 10px;
      margin-right: 10px;
    }
    h6:before {
      margin-top: 2px;
    }
    h6:after {
      margin-top: 2px;
    }
    .button {
      margin-top: 35px;
      width: 360px;
      height: 60px;
      cursor: pointer;
      text-align: center;

      font-family: "Rubik";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      img {
        width: 17px;
        height: 18px;
        margin-right: 15px;
      }
    }
    .register-link {
      margin-top: 30px;
      color: #313131;
      text-align: center;
    }
    .hidden {
      visibility: hidden;
      margin-top: 1px;
    }
  }
`;
