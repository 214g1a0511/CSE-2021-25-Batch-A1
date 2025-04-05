import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { slotContext } from "../Context/VehicleContext";
import axios from "axios";

const CarDashboard = () => {
  const [car, setCar] = useState([]);
  const { setVehicleDetails } = useContext(slotContext);
  const navigate = useNavigate(); // useNavigate hook to navigate to the VehicleForm component

  useEffect(() => {
    // Fetch slots on component mount
    GetSlot();

    // Set up an interval to refresh slots every minute
    const intervalId = setInterval(() => {
      GetSlot();
    }, 60000); // 60000ms = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Fetch slot data from the backend
  const GetSlot = async () => {
    const token = localStorage.getItem("token");
    const headers = { "parking-access-token": token };

    await axios
      .get(`${process.env.REACT_APP_DB_API}/customer/slots/car`, { headers })
      .then((res) => {
        setCar(res.data.slots); // Directly set slots in state
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderSlots = (slots, vehicleType) => {
    return slots.map((slot) => (
      <div
        key={slot._id} // Use _id as the key
        className="col-md-2 col-sm-4 col-6 mb-3 d-flex justify-content-center"
      >
        <div
          className={`slot-card p-2 w-100 text-center rounded shadow-sm d-flex flex-column justify-content-between align-items-center`}
          style={{
            borderRadius: "12px",
            backgroundColor: slot.booked === "true" ? "#292524" : "#000", // Black for unavailable, white for available
            cursor: slot.booked === "true" ? "not-allowed" : "pointer", // Disable interaction for booked slots
            transition: "all 0.3s ease-in-out",
            color: "white", // White text for unavailable, black text for available
          }}
        >
          <div
            className="slot-id"
            style={{
              fontSize: "1.2rem",
              color: "white", // Ensure all text is white
            }}
          >
            {`Slot ${slot.slot}`}
          </div>

          <div
            className="slot-status"
            style={{
              fontSize: "0.9rem",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {slot.booked === "false" && (
              <>
                <small>Available</small>
                <div
                  onClick={(e) => HandleSlot(e, slot.slot, vehicleType)}
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    background: "#000",
                    marginTop: "5px",
                    padding: "0px 20px 0px 20px",
                    borderRadius: "10px",
                  }}
                >
                  Park Here
                </div>
              </>
            )}
            {slot.booked === "true" && (
              <>
                <small>Occupied</small>
                <div
                  style={{
                    fontSize: "1.2rem",
                    color: "#fffff",
                    marginTop: "5px",
                    background: "#000",
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

  const HandleSlot = (e, slot, vehicleType) => {
    e.preventDefault();

    setVehicleDetails((prev) => ({
      ...prev,
      parking_slot: slot,
      vehicle_type: vehicleType,
    }));

    navigate("/vehicleForm", {
      state: { vehicleType: vehicleType, slot: slot },
    });
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: "white", paddingBottom: "40px" }}>
      <h2 className="text-center mb-4" style={{ color: "#333" }}>
        Car Dashboard
      </h2>

      <div className="row mb-5">
        <div className="col-12">
          <h4 className="text-center mb-3" style={{ color: "#333" }}>
            Car Slots
          </h4>
          <div className="row g-3">{renderSlots(car, "car")}</div>
        </div>
      </div>
    </div>
  );
};

export default CarDashboard;





