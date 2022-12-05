import React, { useState } from "react";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import validate from "./LoginFormValidationRules";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { object } from "prop-types";

const LoginForm = props => {

  localStorage.clear();
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);

  // function login() {
  //   setLoggedIn(true);
  //   props.parentCallback(true);
  // }

  function onLogin() {
    Axios
      .get("http://localhost:3001/posts/studentlogin")
      .then((res) => {
        res.data.map((val) => {
          if (val.mis === values.mis && val.password === values.password && val.email === values.email) {
            localStorage.setItem("mis", values.mis)
            localStorage.setItem("password", values.password)
            localStorage.setItem("email", values.email)
          }
        })
      })
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="field">
                <label className="label">MIS</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.mis && "is-danger"}`}
                    type="email"
                    name="mis"
                    onChange={handleChange}
                    value={values.mis || ""}
                    required
                  />
                  {errors.mis && (
                    <p className="help is-danger">{errors.mis}</p>
                  )}
                </div>
              </div>


              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <Link to={{ pathname: "/home" }}>
                <button
                  type="submit"
                  className="button is-block is-info is-fullwidth"
                  onClick={() => {
                    onLogin();
                  }}
                >
                  Login

                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
