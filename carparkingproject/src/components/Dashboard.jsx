import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Hardcoded array of bike objects
// const bike = [
//   { id: "b1", slot: "b1", booked: true },
//   { id: "b2", slot: "b2", booked: false },
//   { id: "b3", slot: "b3", booked: true },
//   { id: "b4", slot: "b4", booked: false },
//   { id: "b5", slot: "b5", booked: true },
//   { id: "b6", slot: "b6", booked: false },
//   { id: "b7", slot: "b7", booked: true },
//   { id: "b8", slot: "b8", booked: false },
//   { id: "b9", slot: "b9", booked: true },
//   { id: "b10", slot: "b10", booked: false },
//   { id: "b11", slot: "b11", booked: true },
//   { id: "b12", slot: "b12", booked: false },
//   { id: "b13", slot: "b13", booked: true },
//   { id: "b14", slot: "b14", booked: false },
//   { id: "b15", slot: "b15", booked: true },
//   { id: "b16", slot: "b16", booked: false },
//   { id: "b17", slot: "b17", booked: true },
//   { id: "b18", slot: "b18", booked: false },
//   { id: "b19", slot: "b19", booked: true },
//   { id: "b20", slot: "b20", booked: false },
//   { id: "b21", slot: "b21", booked: true },
//   { id: "b22", slot: "b22", booked: false },
//   { id: "b23", slot: "b23", booked: true },
//   { id: "b24", slot: "b24", booked: false },
//   { id: "b25", slot: "b25", booked: true },
//   { id: "b26", slot: "b26", booked: false },
//   { id: "b27", slot: "b27", booked: true },
//   { id: "b28", slot: "b28", booked: false },
//   { id: "b29", slot: "b29", booked: true },
//   { id: "b30", slot: "b30", booked: false },
//   { id: "b31", slot: "b31", booked: true },
//   { id: "b32", slot: "b32", booked: false },
//   { id: "b33", slot: "b33", booked: true },
//   { id: "b34", slot: "b34", booked: false },
//   { id: "b35", slot: "b35", booked: true },
//   { id: "b36", slot: "b36", booked: false },
//   { id: "b37", slot: "b37", booked: true },
//   { id: "b38", slot: "b38", booked: false },
//   { id: "b39", slot: "b39", booked: true },
//   { id: "b40", slot: "b40", booked: false },
//   { id: "b41", slot: "b41", booked: true },
//   { id: "b42", slot: "b42", booked: false },
//   { id: "b43", slot: "b43", booked: true },
//   { id: "b44", slot: "b44", booked: false },
//   { id: "b45", slot: "b45", booked: true },
//   { id: "b46", slot: "b46", booked: false },
//   { id: "b47", slot: "b47", booked: true },
//   { id: "b48", slot: "b48", booked: false },
//   { id: "b49", slot: "b49", booked: true },
//   { id: "b50", slot: "b50", booked: false },
// ];

// Hardcoded array of car objects
// const car = [
//   { id: 'c1', slot: 'c1', booked: true },
//   { id: 'c2', slot: 'c2', booked: false },
//   { id: 'c3', slot: 'c3', booked: true },
//   { id: 'c4', slot: 'c4', booked: false },
//   { id: 'c5', slot: 'c5', booked: true },
//   { id: 'c6', slot: 'c6', booked: false },
//   { id: 'c7', slot: 'c7', booked: true },
//   { id: 'c8', slot: 'c8', booked: false },
//   { id: 'c9', slot: 'c9', booked: true },
//   { id: 'c10', slot: 'c10', booked: false },
//   { id: 'c11', slot: 'c11', booked: true },
//   { id: 'c12', slot: 'c12', booked: false },
//   { id: 'c13', slot: 'c13', booked: true },
//   { id: 'c14', slot: 'c14', booked: false },
//   { id: 'c15', slot: 'c15', booked: true },
//   { id: 'c16', slot: 'c16', booked: false },
//   { id: 'c17', slot: 'c17', booked: true },
//   { id: 'c18', slot: 'c18', booked: false },
//   { id: 'c19', slot: 'c19', booked: true },
//   { id: 'c20', slot: 'c20', booked: false },
//   { id: 'c21', slot: 'c21', booked: true },
//   { id: 'c22', slot: 'c22', booked: false },
//   { id: 'c23', slot: 'c23', booked: true },
//   { id: 'c24', slot: 'c24', booked: false },
//   { id: 'c25', slot: 'c25', booked: true },
//   { id: 'c26', slot: 'c26', booked: false },
//   { id: 'c27', slot: 'c27', booked: true },
//   { id: 'c28', slot: 'c28', booked: false },
//   { id: 'c29', slot: 'c29', booked: true },
//   { id: 'c30', slot: 'c30', booked: false },
//   { id: 'c31', slot: 'c31', booked: true },
//   { id: 'c32', slot: 'c32', booked: false },
//   { id: 'c33', slot: 'c33', booked: true },
//   { id: 'c34', slot: 'c34', booked: false },
//   { id: 'c35', slot: 'c35', booked: true },
//   { id: 'c36', slot: 'c36', booked: false },
//   { id: 'c37', slot: 'c37', booked: true },
//   { id: 'c38', slot: 'c38', booked: false },
//   { id: 'c39', slot: 'c39', booked: true },
//   { id: 'c40', slot: 'c40', booked: false },
//   { id: 'c41', slot: 'c41', booked: true },
//   { id: 'c42', slot: 'c42', booked: false },
//   { id: 'c43', slot: 'c43', booked: true },
//   { id: 'c44', slot: 'c44', booked: false },
//   { id: 'c45', slot: 'c45', booked: true },
//   { id: 'c46', slot: 'c46', booked: false },
//   { id: 'c47', slot: 'c47', booked: true },
//   { id: 'c48', slot: 'c48', booked: false },
//   { id: 'c49', slot: 'c49', booked: true },
//   { id: 'c50', slot: 'c50', booked: false },
// ];

// Import useNavigate from react-router-dom
// Import useNavigate from react-router-dom

const Dashboard = () => {
  const [bike, setBike] = useState([]);
  const navigate = useNavigate(); // useNavigate hook to navigate to the VehicleForm component

  useEffect(() => {
    GetSlot();
  }, []);

  const GetSlot = async () => {
    const token = localStorage.getItem("token");
    const headers = { "parking-access-token": token };

    await axios
      .get("http://localhost:2000/customer/slots/bike", { headers })
      .then((res) => {
        console.log(res);
        setBike(res.data.slots);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderSlots = (slots) => {
    return slots.map((slot, index) => (
      <div
        key={slot.id}
        className="col-md-2 col-sm-4 col-6 mb-3 d-flex justify-content-center"
      >
        <div
          className={`slot-card p-2 w-100 text-center rounded shadow-sm d-flex flex-column justify-content-between align-items-center`}
          style={{
            borderRadius: "12px",
            backgroundColor: slot.booked ? "#292524" : "#fff", // Black for unavailable, white for available
            boxShadow: slot.booked
              ? "0px 0px 10px rgb(255, 255, 255)" // Soft shadow effect for unavailable slots
              : "0px 0px 10px rgb(0, 0, 0)", // Soft shadow effect for available slots
            cursor: slot.booked ? "not-allowed" : "pointer", // Disable interaction for booked slots
            transition: "all 0.3s ease-in-out",
            color: slot.booked ? "white" : "black", // White text for unavailable, black text for available
          }}
        >
          {/* Slot Name (Slot1, Slot2, etc.) */}
          <div
            className="slot-id"
            style={{
              //   fontWeight: "600",
              fontSize: "1.2rem",
              //   marginBottom: "10px",
              color: "white", // Ensure all text is white
            }}
          >
            {`Slot ${index + 1}`}
          </div>

          {/* Slot Status */}
          <div
            className="slot-status"
            style={{
              fontSize: "0.9rem", // Smaller text for status
              //   margin: "8px 0",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center content vertically
              alignItems: "center", // Center content horizontally
            }}
          >
            {/* Available Slot */}
            {slot.booked && (
              <>
                <small>Available</small>
                <div
                  onClick={() => navigate("/vehicleForm")} // Navigate to VehicleForm when clicked
                  style={{
                    color: "#000", // Green color for "Park Here" text
                    fontSize: "1.2rem",
                    // fontWeight: "600",
                    cursor: "pointer",
                    // marginTop: "10px",
                    background: "#ffffff",
                    marginTop: "5px",
                    padding: "0px 20px 0px 20px",
                    borderRadius: "10px",
                  }}
                >
                  Park Here
                </div>
              </>
            )}

            {/* Occupied Slot */}
            {!slot.booked && (
              <>
                <small>Occupied</small>
                <div
                  style={{
                    fontSize: "1.2rem",
                    color: "#fffff", // Red color for unavailable text
                    marginTop: "5px",
                    background: "#000  ",
                    padding: "0px 10px 0px 10px",
                    borderRadius: "10px",
                  }}
                >
                  Unavailable
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: "white", paddingBottom: "40px" }}
    >
      <h2 className="text-center mb-4" style={{ color: "#333" }}>
        Dashboard
      </h2>

      {/* Bike Slots */}
      <div className="row mb-5">
        <div className="col-12">
          <h4 className="text-center mb-3" style={{ color: "#333" }}>
            Bike Slots
          </h4>
          <div className="row g-3">{renderSlots(bike)}</div>
        </div>
      </div>

      {/* Car Slots */}
      {/* <div className="row mb-5">
        <div className="col-12">
          <h4 className="text-center mb-3" style={{ color: "#333" }}>
            Car Slots
          </h4>
          <div className="row g-3">{renderSlots(car)}</div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
