import React, { useState } from "react";
import "./payment.css";

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");
    // Redirect to confirmation page or process the payment logic here
  };

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        <h1>Payment Details</h1>
        <form onSubmit={handlePayment} className="payment-form">
          <label>
            Name on Card:
            <input
              type="text"
              name="name"
              value={paymentDetails.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
            />
          </label>

          <label>
  Quantity of Book:
  <input
    type="number"
    name="quantity"
    value={paymentDetails.quantity || ""}
    onChange={handleInputChange}
    required
    min="1"
  />
</label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" className="pay-now-btn">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
