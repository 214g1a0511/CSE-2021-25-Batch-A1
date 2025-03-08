import React from "react";


const VehicleForm = () => {
  return (
    <main className="d-flex align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 bg-white rounded shadow p-4 p-md-5">
            <div className="row">
              {/* Vehicle Form Section */}
              <div className="col-12">
                <h2 className="h3 mb-4 text-center text-md-start fw-bold text-dark">
                  Vehicle Registration Form
                </h2>
                <p className="mb-4 text-center text-md-start text-muted">
                  Fill in the details of your vehicle for easy management.
                </p>

                {/* Vehicle Form */}
                <form>
                  {/* Vehicle Make */}
                  <div className="mb-3">
                    <label htmlFor="make" className="form-label">
                      Vehicle Make
                    </label>
                    <input
                      type="text"
                      id="make"
                      className="form-control"
                      placeholder="Enter the vehicle make"
                    />
                  </div>

                  {/* Vehicle Model */}
                  <div className="mb-3">
                    <label htmlFor="model" className="form-label">
                      Vehicle Model
                    </label>
                    <input
                      type="text"
                      id="model"
                      className="form-control"
                      placeholder="Enter the vehicle model"
                    />
                  </div>

                  {/* Vehicle Year */}
                  <div className="mb-3">
                    <label htmlFor="year" className="form-label">
                      Vehicle Year
                    </label>
                    <input
                      type="number"
                      id="year"
                      className="form-control"
                      placeholder="Enter the vehicle year"
                    />
                  </div>

                  {/* License Plate */}
                  <div className="mb-3">
                    <label htmlFor="licensePlate" className="form-label">
                      License Plate
                    </label>
                    <input
                      type="text"
                      id="licensePlate"
                      className="form-control"
                      placeholder="Enter the license plate"
                    />
                  </div>

                  {/* Submit Button */}
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


