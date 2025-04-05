import React, { useContext } from "react";
import paymentsuccess from "../assets/paymentsuccess.jpeg";
import { Link, useLocation } from "react-router-dom";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const { vehicle_name, parking_slot, price } = location.state || {};

  return (
    <main className="d-flex align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 bg-white rounded shadow p-4 p-md-5">
            <div className="text-left mb-4">
              <h2 className="h3 text-success text-center fw-bold">
                Payment Successful!
              </h2>
            </div>

            <div className="text-center mt-4">
              <img
                src={paymentsuccess} 
                alt="Payment Success"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <p className="mt-4 text-muted">
                Your payment of ₹ {price} has been processed successfully.
              </p>

              <div className="text-lg text-muted mb-4">
                Vehicle: <strong>{vehicle_name}</strong>
              </div>
              <div className="text-lg text-muted mb-4">
                Parking Slot: <strong>{parking_slot}</strong>
              </div>

              <Link to="/">
                <button className="btn-secondary btn-lg w-100 rounded">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;


