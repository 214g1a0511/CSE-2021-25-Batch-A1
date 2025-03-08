import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log("token", token);
  const navigateToLogin = () => {};

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = {
      "parking-access-token": token,
    };
    axios
      .get("http://localhost:2000/customer/userDetails", { headers })
      .then((res) => {
        // console.log("customer res", res);
        setName(res.data.full_name);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand" href="#">
            <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
              className="d-inline-block align-text-top"
              height="40"
            />
          </a>

          {/* Navbar Toggle for mobile devices */}
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

          {/* Navbar Links */}
          {token ? (
           <div className="d-flex justify-content-between align-items-center p-3">
           <div className="fs-5 px-3 font-weight-bold">{name}</div>
           <div>
             <FaUserCircle size={40} />
           </div>
         </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto w-100 justify-content-center justify-content-lg-end">
                {/* On small and medium screens: centered with padding. On large screens: aligned to the right with padding between buttons */}
                <li className="nav-item mb-3 mb-lg-0 d-flex align-items-center px-2 px-lg-3">
                  <Link to={"/login"}>
                    <button
                      className=" btn-primary rounded px-4 py-2 w-100 w-lg-auto"
                      onClick={navigateToLogin}
                    >
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
