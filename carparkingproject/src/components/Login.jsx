import React, { useState } from "react";
import loginIllustration from "../assets/login.jpg";
import axios from "axios";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email_id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const LoginFunction = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:2000/customer/login", loginData)
      .then((res) => {
        console.log(res);

        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="d-flex align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 bg-white rounded shadow p-4 p-md-5">
            <div className="row">
              {/* Login Form Section (Left Side on large screens, Bottom on small screens) */}
              <div className="col-md-6 order-2 order-md-1">
                <h2 className="h3 mb-4 text-center text-md-start fw-bold text-dark">
                  Login to Your Account
                </h2>
                <p className="mb-4 text-center text-md-start text-muted">
                  Welcome back! Please enter your credentials to continue.
                </p>

                {/* Login Form */}
                <form onSubmit={LoginFunction}>
                  {/* Email Address */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email_id"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* Remember Me */}
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="form-check-input"
                    />
                    <label htmlFor="rememberMe" className="form-check-label">
                      Remember Me
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-secondary w-100 mb-3 rounded"
                  >
                    Login
                  </button>

                  {/* Forgot Password Link */}
                  <p className="text-center text-muted mb-0">
                    {/* <a href="#" className="text-primary text-decoration-none">
                      Forgot Password?
                    </a> */}
                  </p>
                </form>
              </div>

              {/* Illustration Section (Right Side on large screens, Top on small screens) */}
              <div className="col-md-6 order-1 order-md-2 d-flex align-items-center justify-content-center mb-4 mb-md-0">
                <img
                  src={loginIllustration}
                  alt="Parking Illustration"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
