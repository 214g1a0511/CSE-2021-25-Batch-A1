import React from "react";
import "../App.css";
import twoWheeler from "../assets/twowheelers.jpg";
import fourWheeler from "../assets/fourwheeler.jpg";
import { Link } from "react-router-dom";

const VehicleType = () => {
  const token = localStorage.getItem("token");

  return (
    <section className="py-5 bg-light" id="targetSection">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display fw-bold text-dark">Parking Options</h2>

          <p className="text-muted fs-6">
            Choose the perfect parking solution for your vehicle
          </p>
        </div>

        <div className="row">
          {/* Two-Wheeler Parking */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
              <img
                src={twoWheeler}
                alt="Two Wheeler Parking"
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "clamp(150px, 30vw, 300px)",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">Two Wheeler Parking</h5>
                <div className="card-text">
                  <div className="d-flex justify-content-between p-1">
                    <span>Hourly Rate</span>
                    <span>₹10/hour</span>
                  </div>
                  <div className="d-flex justify-content-between p-1">
                    <span>Daily Rate</span>
                    <span>₹50/day</span>
                  </div>
                  
                </div>
              <Link to={token?"/bikedashboard":"/login"}>  <button className="w-100 btn-secondary rounded">
                  Book Now
                </button></Link>
              </div>
            </div>
          </div>

          {/* Four-Wheeler Parking */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
              <img
                src={fourWheeler}
                alt="Two Wheeler Parking"
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "clamp(150px, 30vw, 300px)",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">Four Wheeler Parking</h5>
                <div className="card-text">
                  <div className="d-flex justify-content-between p-1">
                    <span>Hourly Rate</span>
                    <span>₹50/hour</span>
                  </div>
                  <div className="d-flex justify-content-between p-1">
                    <span>Daily Rate</span>
                    <span>₹200/day</span>
                  </div>
                  
                </div>
                <Link to={token?"/cardashboard":"/login"}> <button class="w-100 btn-secondary rounded">Book Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleType;
