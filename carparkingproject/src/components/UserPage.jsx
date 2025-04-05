import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { slotContext } from "../Context/VehicleContext";
import { BiLogOutCircle } from "react-icons/bi";

const UserPage = () => {
  const [userData, setUsersData] = useState([]);
  const [userDetails, setUserDetails] = useState();
  const { setPaymentID } = useContext(slotContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = {
      "parking-access-token": token,
    };
    axios
      .get(`${process.env.REACT_APP_DB_API}/customer/userDetails`, { headers })
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getUserHistory();
  }, []);

  const getUserHistory = async () => {
    const token = localStorage.getItem("token");
    const headers = { "parking-access-token": token };
    await axios
      .get(`${process.env.REACT_APP_DB_API}/customer/history`, { headers })
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => console.log(err));
  };

  function formatDateToDDMMYYYY(isoDateString) {
    const date = new Date(isoDateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }
  const handlePage = (obj) => {
    // e.preventDefault();
    // console.log(status)
    if (obj.status === "unpaid") {
      // console.log(status);
      setPaymentID(obj.id);
      navigate("/paymentForm");
    }
  };
  const handleClick=(e)=>{
    e.preventDefault();
    localStorage.removeItem("token")
    navigate("/")

  }

  return (
    <div
      style={{
        // backgroundColor: "#121212", // Dark background color for the page
        color: "#e0e0e0", // Light text for contrast
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Modern font
      }}
    >
      <div className="container py-5 ">
        <div className="d-flex flex-row-reverse">
          <button
            className="btn btn-secondary rounded "
            style={{
              backgroundColor: "#6c757d", // Customize background color if needed
              border: "none", // No border for the button
              cursor: "pointer", // Change cursor on hover
            }}
            onClick={(e)=>handleClick(e)}
          >
            <BiLogOutCircle size={20} className="me-2" /> {/* Logout icon */}
            Logout
          </button>
        </div>
        {/* Profile Info */}
        <div className="text-center mb-5">
          {/* Profile Icon */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#6c757d", // Grey background for profile icon
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Soft shadow for the profile icon
            }}
          >
            <FaUserCircle size={60} color="#fff" />
          </div>

          {/* User Name and Email */}
          {userDetails && (
            <div className="mt-3">
              <h1
                className="fw-bold"
                style={{ fontSize: "28px", color: "#000" }}
              >
                {userDetails.full_name}
              </h1>
              <h3 style={{ fontSize: "20px", color: "#000" }}>
                {userDetails.email_id}
              </h3>
            </div>
          )}
        </div>

        {/* Parking History */}
        <div className="mt-5">
          <h3
            className="fw-bold mb-4"
            style={{ fontSize: "22px", color: "#fff" }}
          >
            Parking History
          </h3>
          <div className="row">
            {userData &&
              userData.map((obj) => (
                <div key={obj.id} className="col-md-4 mb-4">
                  <div
                    className={`card`}
                    style={{
                      backgroundColor:
                        obj.status === "paid" ? "#ffffff" : "#ffffff", // Dark Green for completed, Dark Orange for in progress
                      color: "#000", // White text for contrast
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Card shadow for depth
                      position: "relative", // Needed for the status positioning
                      transition: "transform 0.3s ease", // Hover effect for card
                      cursor:obj.status==="unpaid"? "pointer":"not-allowed"
                    }}
                    // onClick={(e) => handlePage(e, obj.status)}
                    onClick={(e) => {
                      // e.stopPropagation(); // Prevent card click event when clicking on status
                      handlePage(obj);
                    }}
                  >
                    {/* Status */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "#fff",
                        color: obj.status === "paid" ? "#2a9d8f" : "#f4a261",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        border: `2px solid ${
                          obj.status === "paid" ? "#2a9d8f" : "#f4a261"
                        }`,
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {obj.status === "paid" ? "Completed" : "In Progress"}
                    </div>

                    <div className="card-body">
                      <p className="card-title" style={{ fontSize: "18px" }}>
                        {obj.vehicle_name}
                      </p>
                      <p
                        className="card-text"
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        <strong>Vehicle Type:</strong> {obj.vehicle_type }
                      </p>
                      <p
                        className="card-text"
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        <strong>Parking Slot:</strong> {obj.parking_slot}
                      </p>
                      <p
                        className="card-text"
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        <strong>Date:</strong>{" "}
                        {formatDateToDDMMYYYY(obj.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
