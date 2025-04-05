import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { slotContext } from "../Context/VehicleContext";
import axios from "axios";

const VehicleForm = () => {
  const { vehicleDetails, setVehicleDetails, setPaymentID } =
    useContext(slotContext);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0); // State to store the calculated price

  useEffect(() => {
    if (vehicleDetails.parking_slot === "") {
      navigate("/");
    }
  }, [vehicleDetails.parking_slot]);

  // This useEffect recalculates the price whenever hours_of_parking or vehicle_name changes
  useEffect(() => {
    console.log("Recalculating Price...");
    calculatePrice();
  }, [vehicleDetails.hours_of_parking, vehicleDetails.vehicle_type]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Update vehicleDetails state and recalculate price on each change
    setVehicleDetails((prevState) => {
      const updatedVehicleDetails = {
        ...prevState,
        [name]: value,
      };

      console.log("Updated Vehicle Details:", updatedVehicleDetails);
      // Recalculate price every time an input changes
      calculatePrice(updatedVehicleDetails);
      return updatedVehicleDetails;
    });
  };

  const calculatePrice = (updatedDetails = vehicleDetails) => {
    const { vehicle_type, hours_of_parking, parking_slot, vehicle_name } =
      updatedDetails;
    let cost = 0;

    // Log inputs to check the values of vehicle_type and hours_of_parking
    console.log("Calculating price with:", { vehicle_type, hours_of_parking });
    console.log(parking_slot, vehicle_name);

    // Pricing logic for bike and car
    if (vehicle_type.toLowerCase() === "bike") {
      // For parking hours less than or equal to 23 hours
      if (hours_of_parking <= 23) {
        cost = 10 * hours_of_parking; // For hours
      }
      // For parking exceeding 24 hours but within 695 hours (~29 days)
      else if (hours_of_parking <= 695) {
        const days = Math.floor(hours_of_parking / 24); // Convert hours to full days
        cost = 50 * days; // For one day (max 24 hours)
      }
      // For parking exceeding 696 hours (~29 days), apply fixed cost for one month
     } else if (vehicle_type.toLowerCase() === "car") {
      // For parking hours less than or equal to 23 hours
      if (hours_of_parking <= 23) {
        cost = 50 * hours_of_parking; // For hours
      }
      // For parking exceeding 24 hours but within 695 hours (~29 days)
      else if (hours_of_parking <= 695) {
        const days = Math.floor(hours_of_parking / 24); // Convert hours to full days
        cost = 200 * days; // For one day (max 24 hours)
      }
      // For parking exceeding 696 hours (~29 days), apply fixed cost for one month
    }

    // Log the calculated price
    console.log("Calculated Price:", cost);

    // Set the price
    setPrice(cost);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate days of parking
    const days_of_parking = Math.ceil(vehicleDetails.hours_of_parking / 24); // Convert hours to days

    const token = localStorage.getItem("token");
    const headers = { "parking-access-token": token };

    const vehicleData = {
      ...vehicleDetails,
      days_of_parking, // Send days of parking to backend
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_DB_API}/customer/vehicleDetails`,
        vehicleData,
        {
          headers,
        }
      );

      setPaymentID(res.data.id);
      navigate("/paymentForm", {
        state: {
          price,
          vehicle_name: vehicleDetails.vehicle_name,
          parking_slot: vehicleDetails.parking_slot,
        },
      });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <main className="d-flex align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 bg-white rounded shadow p-4 p-md-5">
            <div className="row">
              <div className="col-12">
                <h2 className="h3 mb-4 text-center text-md-start fw-bold text-dark">
                  Vehicle Registration Form
                </h2>
                <p className="mb-4 text-center text-md-start text-muted">
                  Fill in the details of your vehicle for easy management.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      value={vehicleDetails.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      className="form-control"
                      placeholder="Enter your mobile number"
                      required
                      value={vehicleDetails.mobile}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="vehicle_number" className="form-label">
                      Vehicle Number
                    </label>
                    <input
                      type="text"
                      id="vehicle_number"
                      name="vehicle_number"
                      className="form-control"
                      placeholder="Enter vehicle number"
                      required
                      value={vehicleDetails.vehicle_number}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="vehicle_name" className="form-label">
                      Vehicle Name (Bike/Car)
                    </label>
                    <input
                      type="text"
                      id="vehicle_name"
                      name="vehicle_name"
                      className="form-control"
                      placeholder="Enter vehicle name (e.g., Bike or Car)"
                      required
                      value={vehicleDetails.vehicle_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="hours_of_parking" className="form-label">
                      Hours of Parking
                    </label>
                    <input
                      type="number"
                      id="hours_of_parking"
                      name="hours_of_parking"
                      className="form-control"
                      placeholder="Enter number of hours"
                      required
                      value={vehicleDetails.hours_of_parking}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-secondary w-100 mb-3 rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VehicleForm;
