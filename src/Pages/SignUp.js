import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styles from "../Modules/signup.module.css";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const SignUp = () => {
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  let endpoint = "https://yalbble-app.herokuapp.com/auth/signup";
  let endpoint2 = "https://yalbble-app.herokuapp.com/auth/email";
  let formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setmessage('')
      setloading(true);
      axios
        .post(endpoint, values)
        .then((res) => {
          console.log(res);
          setloading(false);
          setmessage(res.data.message);
          if (res.data.status == true) {
            axios.post(endpoint2, values);
            navigate("/signin");
          } else {
            console.log("not successful");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    validationSchema: yup.object({
      fullname: yup.string().required("This field is required!"),
      username: yup.string().required("This field is required!"),
      email: yup
        .string()
        .required("This field is required!")
        .email("Input a valid Email"),
      password: yup
        .string()
        .required("This field is required!")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
          "Password should have at least one Upper case,a Lower case and a number and contain 8 characters!"
        ),
    }),
  });

  return (
    <>
      <div className={styles.body}>
        <div className={styles.form}>
          <h1 className={styles.h1}>
            <img src="logo.png" className={styles.logo} alt="page logo" />
            YalVic
          </h1>
          <h3>Create Account</h3>
          <h5 className={styles.h5}>It's quick and easy.</h5>

          <form action="" onSubmit={formik.handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
              name="fullname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullname ? (
              <div className={styles.requiredtext}>{formik.errors.fullname}</div>
            ) : (
              ""
            )}
            <br />
            <input
              className={styles.input}
              type="text"
              placeholder="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username ? (
              <div className={styles.requiredtext}>
                {formik.errors.username}
              </div>
            ) : (
              ""
            )}
            <br />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email ? (
              <div className={styles.requiredtext}>{formik.errors.email}</div>
            ) : (
              ""
            )}
            <br />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password ? (
              <div className={styles.requiredtext}>
                {formik.errors.password}
              </div>
            ) : (
              ""
            )}{" "}
            <br />
            {loading ? (
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {message !== "" ? (
              <div className={styles.requiredtext}>{message}</div>
            ) : (
              ""
            )}
            <br />
            <div className={styles.text}>
              By clicking Sign Up, you agree to our Terms,Data Policy and Cookie
              Policy.You may receive SMS notifications from us and can opt out
              at any time.
            </div>
            <div></div>
            <button className={styles.button}>Sign Up</button>
          </form>
          <br />
          <div className={styles.center}>
            <Link to="/signin" className={styles.whitecolor}>
              Already have an account?
            </Link>
          </div>
          <div className={styles.social}>
            <div className={styles.go}>
              <i className="fab fa-google"></i> Google
            </div>
            <div className={styles.fb}>
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
    </>
  );
};

export default SignUp;
