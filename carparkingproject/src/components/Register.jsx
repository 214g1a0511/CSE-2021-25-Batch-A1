import React, { useState } from "react";
import signupIllustration from "../assets/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Add the path to your illustration
import { toast,ToastContainer } from "react-toastify";

// Make sure to replace this with your actual path

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    email_id: "",
    phone_number: "",
    password: "",
    full_name: "",
  });
  const [errorEmail, setErrorEmail] = useState({
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  // const [status,setStatus]=useState();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email_id") {
      // Validate email format
      if (!validateEmail(value)) {
        setErrorEmail((prev) => ({
          ...prev,
          email: "Invalid email Id",
        }));
      } else {
        setErrorEmail((prev) => ({
          ...prev,
          email: "",
        }));
      }
    } else if (name === "phone_number") {
      // Only allow numeric values for the phone number
      const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters

      // If the phone number is shorter than 10 digits, show an error
      if (numericValue.length < 10) {
        setErrorEmail((prev) => ({
          ...prev,
          mobile: "Mobile number must have 10 digits",
        }));
      } else {
        setErrorEmail((prev) => ({
          ...prev,
          mobile: "",
        }));
      }

      // Update phone number with only numeric values
      setRegisterDetails((prevState) => ({
        ...prevState,
        [name]: numericValue,
      }));

      return; // Exit the function early for phone number handling
    }

    // Update the input value for all fields (other than phone_number and email_id)
    setRegisterDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const RegisterFunction = async (e) => {
    e.preventDefault();
    console.log(registerDetails);
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_DB_API}/customer/register`, registerDetails)
      .then((res) => {
        console.log(res.status);
        
          navigate("/login")
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err.response.status);
        let status=err?.response?.status
        if(status==400){
          setLoading(false);

          return toast.warning("User Already Exists",{className: "black-background",
            progressClassName: "fancy-progress-bar",
          })

        }
        else{
          setLoading(false);

          return toast.error("Something went wrong")

        }
      });
  };
  return (
    <main className="d-flex align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 bg-white rounded shadow p-4 p-md-5">
            <div className="row">
              {/* Registration Form Section (First on Small Screens, Second on Large Screens) */}
              <div className="col-12 col-md-6 order-2 order-md-1">
                <h2 className="h3 mb-4 text-center text-md-start fw-bold text-dark">
                  Create an Account
                </h2>
                <p className="mb-4 text-center text-md-start text-muted">
                  Join Smart Parking to manage your parking easily
                </p>

                {/* Registration Form */}
                <form onSubmit={RegisterFunction}>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="full_name"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={registerDetails.full_name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email_id"
                      className="form-control"
                      placeholder="Enter your email"
                      value={registerDetails.email_id}
                      onChange={handleChange}
                    />
                  </div>
                  {errorEmail.email && (
                    <span className="text-danger">{errorEmail.email}</span>
                  )}
                  {/* Mobile Number */}
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="mobile"
                      id="mobile"
                      name="phone_number"
                      maxLength={10}
                      className="form-control"
                      placeholder="Enter your mobile number"
                      value={registerDetails.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                  {errorEmail.mobile && (
                    <span className="text-danger">{errorEmail.mobile}</span>
                  )}

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Create a password"
                      value={registerDetails.password}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Confirm Password */}
                  {/* <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                    />
                  </div> */}

                  {/* Terms and Conditions */}
                  {/* <div className="mb-4 form-check">
                    <input
                      type="checkbox"
                      id="terms"
                      className="form-check-input"
                    />
                    <label htmlFor="terms" className="form-check-label">
                      I agree to the{" "}
                      <a href="#" className="text-primary text-decoration-none">
                        Terms and Conditions
                      </a>
                    </label>
                  </div> */}

                  {/* Submit Button */}
                  {loading ? (
                    <div
                      class="d-flex justify-content-center align-items-center"
                      style={{ height: "10vh" }}
                    >
                      <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="btn-secondary w-100 mb-3 rounded"
                    >
                      Create Account
                    </button>
                  )}

                  {/* Login Link */}
                  <p className="text-center text-muted mb-0">
                    Already have an account?{" "}
                    <Link to={"/login"}>Login here</Link>
                  </p>
                </form>
              </div>

              {/* Illustration Section (Second on Small Screens, First on Large Screens) */}
              <div className="col-12 col-md-6 order-1 order-md-2 d-flex align-items-center justify-content-center mb-4 mb-md-0">
                <div style={{ minHeight: "450px", width: "100%" }}>
                  <img
                    src={signupIllustration}
                    alt="Parking Illustration"
                    className="img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </main>
  );
};

export default Register;
