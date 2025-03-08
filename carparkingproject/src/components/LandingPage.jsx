import React from "react";
import "../App.css";
import parkingImg from "../assets/parkingImg.jpg";
import { FaShieldAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import VehicleType from "./VehicleType";

const LandingPage = () => {
  const token = localStorage.getItem("token");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-100">
      {/* Hero Section */}
      <section className="bg-white pt-3 pt-md-16">
        <div className="row p-1 p-lg-5 m-0">
          <div className="pt-16 pb-20">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-6">
                <h1 className="display-4 font-weight-bold text-dark">
                  <span className="d-block fw-bold fs-1 fs-sm-3">
                    Smart Parking
                  </span>
                  <span className="d-block fw-bold fs-1 fs-sm-3">
                    Solutions for Your Vehicles
                  </span>
                </h1>
                <p className="mt-3 text-muted">
                  Secure and convenient parking solutions for your two & four
                  wheelers. Book your spot instantly and park with peace of
                  mind.
                </p>
                <div className="mt-8 d-flex gap-4 justify-content-start">
                  {!token && (
                    <Link to={"/register"}>
                      {" "}
                      <button className=" btn-secondary rounded">
                        Register Now
                      </button>
                    </Link>
                  )}
                  <button
                    className="btn-primary rounded"
                    onClick={() => scrollToSection("targetSection")}
                  >
                    Find Parking
                  </button>
                </div>
              </div>
              {/* <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                <img
                  src={parkingImg}
                  className="m-auto" alt="illitration"
                  style={{ width: "90%", margin: "auto" }}
                />
              </div> */}
              <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                <img
                  src={parkingImg}
                  className="img-fluid"
                  alt="illustration"
                  style={{ width: "90%", maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5  bg-light">
        <div className="container px-4 px-sm-6 px-lg-8">
          <div className="text-center p-lg-30 p-sm-10">
            <h2 className="display fw-bold text-dark">Key Features</h2>
            <p className="mt-4 text-muted">
              Everything you need for hassle-free parking
            </p>
          </div>
          <div className="row mt-12">
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="card border-0 shadow-sm h-100 text-center hover-feature">
                <div className="card-body d-flex flex-column align-items-start">
                  <div
                    className="mb-3"
                    style={{
                      border: "1px solid #D3D3D3",
                      background: "#D3D3D3",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  >
                    <FaShieldAlt size={18} />
                  </div>
                  <h3 className="h5 font-weight-semibold text-dark mb-3">
                    24/7 Security
                  </h3>
                  <p className="text-muted text-start">
                    Round-the-clock surveillance and security personnel for your
                    vehicles
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="card border-0 shadow-sm h-100 text-center hover-feature">
                <div className="card-body d-flex flex-column align-items-start">
                  <div
                    className="mb-3"
                    style={{
                      border: "1px solid #D3D3D3",
                      background: "#D3D3D3",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  >
                    <FaCalendarCheck size={18} />
                  </div>
                  <h3 className="h5 font-weight-semibold text-dark mb-3">
                    Easy Booking
                  </h3>
                  <p className="text-muted text-start">
                    Simple and quick online booking process with instant
                    confirmation
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="card border-0 shadow-sm h-100 text-center hover-feature">
                <div className="card-body d-flex flex-column align-items-start">
                  <div
                    className="mb-3"
                    style={{
                      border: "1px solid #D3D3D3",
                      background: "#D3D3D3",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  >
                    <FaCarAlt size={18} />
                  </div>
                  <h3 className="h5 font-weight-semibold text-dark mb-3">
                    Multiple Vehicle Types
                  </h3>
                  <p className="text-muted text-start">
                    Dedicated spaces for both two-wheelers and four-wheelers
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="card border-0 shadow-sm h-100 text-center hover-feature">
                <div className="card-body d-flex flex-column align-items-start">
                  <div
                    className="mb-3"
                    style={{
                      border: "1px solid #D3D3D3",
                      background: "#D3D3D3",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  >
                    <FaCreditCard size={18} />
                  </div>
                  <h3 className="h5 font-weight-semibold text-dark mb-3">
                    Flexible Payment
                  </h3>
                  <p className="text-muted text-start">
                    Multiple payment options including cards, UPI, and digital
                    wallets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 bg-white">
        <div className="container px-4 px-sm-6 px-lg-8">
          <div className="text-center">
            <h2 className="display fw-bold text-dark">How It Works</h2>

            <p className="mt-4 text-muted">
              Three simple steps to start parking
            </p>
          </div>
          <div className="row mt-12">
            <div className="col-12 col-md-4 mb-4">
              <div className="text-center">
                {/* Icon Container */}
                <div
                  className="mb-4 p-4 rounded-circle d-inline-flex justify-content-center align-items-center"
                  style={{
                    // border: "2px solid #000", // Add border
                    backgroundColor: "#f0f0f0", // Light gray background
                    width: "70px", // Set width
                    height: "70px", // Set height
                  }}
                >
                  <FaUserPlus size={25} /> {/* Adjust icon size if needed */}
                </div>

                {/* Heading and Paragraph */}
                <h3 className="h5 font-weight-semibold text-dark mt-3">
                  1. Register/Login
                </h3>
                <p className="text-muted">
                  Create an account or login to get started
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <div className="text-center">
                {/* Icon Container */}
                <div
                  className="mb-4 p-2 rounded-circle d-inline-flex justify-content-center align-items-center"
                  style={{
                    // border: "2px solid #000", // Add border
                    backgroundColor: "#f0f0f0", // Light gray background
                    width: "70px", // Set width
                    height: "70px", // Set height
                  }}
                >
                  <FaLocationDot size={25} /> {/* Adjust icon size if needed */}
                </div>

                {/* Heading and Paragraph */}
                <h3 className="h5 font-weight-semibold text-dark mt-3">
                  2. Choose Parking Slot
                </h3>
                <p className="text-muted">
                  Select your preferred parking location and duration
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <div className="text-center">
                {/* Icon Container */}
                <div
                  className="mb-4 p-4 rounded-circle d-inline-flex justify-content-center align-items-center"
                  style={{
                    // border: "2px solid #000", // Add border
                    backgroundColor: "#f0f0f0", // Light gray background
                    width: "70px", // Set width
                    height: "70px", // Set height
                  }}
                >
                  <FaCheckCircle size={25} /> {/* Adjust icon size if needed */}
                </div>

                {/* Heading and Paragraph */}
                <h3 className="h5 font-weight-semibold text-dark mt-3">
                  3. Pay & Park
                </h3>
                <p className="text-muted">
                  Complete payment and get your parking confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {<VehicleType />}
    </div>
  );
};

export default LandingPage;
