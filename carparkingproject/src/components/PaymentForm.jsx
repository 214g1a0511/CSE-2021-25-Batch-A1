import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { slotContext } from "../Context/VehicleContext";
import axios from "axios";

const PaymentForm = () => {
  const { paymentID } = useContext(slotContext);
  const navigate = useNavigate();
  const location = useLocation(); // Access the navigation state
  const { price, vehicle_name, parking_slot } = location.state || {}; // Get price, vehicle_name, and parking_slot

  console.log("Received Price:", price);  // Debugging: Check if price is being received correctly
  console.log("Received Vehicle Name:", vehicle_name);  // Debugging: Check if vehicle_name is being received correctly
  console.log("Received Parking Slot:", parking_slot);  // Debugging: Check if parking_slot is being received correctly
  
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for the cardNumber, expiryDate, and cvv fields
    if (name === "cardNumber" || name === "cvv") {
      if (!/^[0-9]*$/.test(value)) {
        return; // Prevent any non-numeric input
      }
    }

    // Allow only numbers and a forward slash ("/") for expiryDate (MM/YY format)
    if (name === "expiryDate" && !/^[0-9/]*$/.test(value)) {
      return; // Prevent any non-numeric and non-slash input
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform real-time validation on input change
    validateInput(name, value);
  };

  // Real-time validation function
  const validateInput = (name, value) => {
    let validationErrors = { ...errors };

    switch (name) {
      case "cardNumber":
        // Card number must be exactly 16 digits
        validationErrors.cardNumber = /^\d{16}$/.test(value)
          ? ""
          : "Card number must be exactly 16 digits.";
        break;

      case "expiryDate":
        // Expiry date should be in MM/YY format
        validationErrors.expiryDate = /^(0[1-9]|1[0-2])\/\d{2}$/.test(value)
          ? ""
          : "Expiry date must be in MM/YY format.";
        break;

      case "cvv":
        // CVV must be exactly 3 digits
        validationErrors.cvv =
          value.length === 3 ? "" : "CVV must be exactly 3 digits.";
        break;

      case "cardholderName":
        // Cardholder name cannot be empty
        validationErrors.cardholderName = value.trim()
          ? ""
          : "Cardholder name is required.";
        break;

      default:
        break;
    }

    setErrors(validationErrors);
  };

  // Handle form submission
  const handlePayment = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = { "parking-access-token": token };

    axios
      .put(`${process.env.REACT_APP_DB_API}/customer/payment/${paymentID}`, null, {
        headers,
      })
      .then((res) => {
        console.log(res);
        navigate("/paymentsuccess", {
          state: { vehicle_name, parking_slot, price }, // Pass the details to PaymentSuccessPage
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <section className="min-vh-100 bg-light d-flex align-items-center justify-content-center pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 bg-white rounded shadow p-4">
              <h2 className="h4 font-weight-bold text-dark">Payment Details</h2>
              <p className="mt-2 text-muted">
                Please enter your payment information
              </p>

              {/* Display Price */}
              <div className="mb-3">
                <label className="form-label">Amount to Pay</label>
                <p className="text-muted">₹ {price}</p> {/* Display the price here */}
              </div>

              

              {/* Payment Form */}
              <form onSubmit={handlePayment}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    className={`form-control ${
                      errors.cardNumber ? "is-invalid" : ""
                    }`}
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                  {errors.cardNumber && (
                    <div className="invalid-feedback">{errors.cardNumber}</div>
                  )}
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="expiryDate">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      id="expiryDate"
                      className={`form-control ${
                        errors.expiryDate ? "is-invalid" : ""
                      }`}
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                    />
                    {errors.expiryDate && (
                      <div className="invalid-feedback">
                        {errors.expiryDate}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      id="cvv"
                      className={`form-control ${
                        errors.cvv ? "is-invalid" : ""
                      }`}
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                    {errors.cvv && (
                      <div className="invalid-feedback">{errors.cvv}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="cardholderName">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    id="cardholderName"
                    className={`form-control ${
                      errors.cardholderName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter cardholder name"
                    value={formData.cardholderName}
                    onChange={handleChange}
                  />
                  {errors.cardholderName && (
                    <div className="invalid-feedback">
                      {errors.cardholderName}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-secondary w-100 py-2 rounded"
                  disabled={
                    Object.values(errors).some((error) => error !== "") ||
                    Object.values(formData).some((value) => value === "")
                  }
                >
                  Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentForm;



