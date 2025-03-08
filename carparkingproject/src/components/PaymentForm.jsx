import React, { useState } from "react";
import successgif from "../assets/successful.gif";
import paymentsuccess from "../assets/paymentsuccess.jpeg";
const PaymentForm = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    setPaymentSuccessful(true);
  };

  return (
    <main>
      <section className="min-vh-100 bg-light d-flex align-items-center justify-content-center pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 bg-white rounded shadow p-4">
              {/* Check if payment is successful or not */}
              {paymentSuccessful ? (
                <div className="text-center">
                  <h2 className="h4 font-weight-bold text-dark mb-4">
                    Payment Successful!
                  </h2>
                  {/* Add the successful payment GIF here */}

                  <img
                    src={paymentsuccess}
                    alt="Payment Success"
                    className="img-fluid"
                    style={{
                      width: "150px", // Reduced size
                      height: "150px", // Keep the width and height the same for a circle
                      borderRadius: "50%", // Makes the image circular
                      objectFit: "cover", // Ensures the image covers the circle without distortion
                    }}
                  />

                  <p className="mt-4 text-muted">
                    Your payment has been processed successfully.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-left mb-4">
                    <h2 className="h4 font-weight-bold text-dark">
                      Payment Details
                    </h2>
                    <p className="mt-2 text-muted">
                      Please enter your payment information
                    </p>
                  </div>

                  {/* Payment Form */}
                  <form className="space-y-4" onSubmit={handlePayment}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="cardNumber">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        className="form-control"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="expiryDate">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          className="form-control"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="cvv">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          className="form-control"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="cardholderName">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        id="cardholderName"
                        className="form-control"
                        placeholder="Enter cardholder name"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="billingAddress">
                        Billing Address
                      </label>
                      <textarea
                        id="billingAddress"
                        className="form-control"
                        rows="3"
                        placeholder="Enter your billing address"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-secondary w-100 py-2">
                      Pay
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentForm;
