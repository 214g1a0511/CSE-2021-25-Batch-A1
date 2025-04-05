import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import logo from "../assets/parkingLogo.png";
const Navbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log("token", token);

  useEffect(() => {
    const headers = {
      "parking-access-token": token,
    };
    axios
      .get(`${process.env.REACT_APP_DB_API}/customer/userDetails`, { headers })
      .then((res) => {
        // console.log("customer res", res.data.full_name,res.data.email_id);
        setName(res.data.full_name);
        setEmail(res.data.email_id);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light larger-shadow">
        <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top"
              height="50" // Increase the height
              width="50" // Increase the width
            />
          </a>

          {/* Navbar Toggle for mobile devices */}
          {!token && (
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}

          {/* Navbar Links */}
          {token ? (
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
              {/* Name Section */}
              {/* <div className="fs-5 px-3 font-weight-bold text-center text-md-start">{name}</div> */}

              {/* Icon Section */}
              <Link to={"/userpage"}>
                <div className="mt-2 mt-md-0">
                  <FaUserCircle size={30} style={{ color: "black" }} />
                </div>
              </Link>
            </div>
          ) : (
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto w-100 justify-content-center align-items-center justify-content-lg-end">
                {/* On small and medium screens: centered with padding. On large screens: aligned to the right with padding between buttons */}
                <li className="nav-item mb-3 mb-lg-0 d-flex  align-items-center px-2 px-lg-3">
                  <Link to={"/login"}>
                    <button className=" btn-primary rounded px-4 py-2 w-100 w-lg-auto">
                      Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center px-2 px-lg-3">
                  <Link to={"/register"}>
                    {" "}
                    <button className=" btn-secondary rounded px-4 py-2 w-100 w-lg-auto">
                      Register
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
