import React from "react";

const PaymentSuccessPage = () => {
  return (
    <main className="d-flex align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 bg-white rounded shadow p-4 p-md-5">
            <div className="text-left mb-4">
              <h2 className="h3 text-success fw-bold">Payment Successful!</h2>
              <p className="mt-2 text-muted">
                Your payment has been processed successfully.
              </p>
            </div>

            <div className="text-center mt-4">
              <div className="text-4xl text-success mb-4">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="text-lg text-muted mb-4">
                Transaction ID: <strong>#123456789</strong>
              </div>
              <button className="btn-secondary btn-lg w-100 rounded">
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;
