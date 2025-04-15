import React, { useState } from "react";
import "./payment.css";

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    quantity: 1,
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isPaymentProcessed, setIsPaymentProcessed] = useState(false);
  const [isAddressEntered, setIsAddressEntered] = useState(false);
  
  // Add the book price here
  const bookPrice = 20; // Example book price

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaymentProcessed(true);
    setTimeout(() => {
      alert(
        paymentMethod === "cod"
          ? "Order placed successfully! Cash on delivery selected."
          : "Payment processed successfully!"
      );
    }, 2000);
  };

  const handleProceedToPay = () => {
    if (paymentDetails.address.trim() === "") {
      alert("Please enter your address before proceeding.");
      return;
    }
    setIsAddressEntered(true);
  };

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        {!isPaymentProcessed ? (
          <>
            <h1>Payment Details</h1>
            <label>
              Delivery Address:
              <input
                type="text"
                name="address"
                value={paymentDetails.address}
                onChange={handleInputChange}
                required
              />
            </label>
            {!isAddressEntered ? (
              <button className="proceed-btn" onClick={handleProceedToPay}>
                Proceed to Payment
              </button>
            ) : (
              <>
                <label>
                  Payment Method:
                  <select
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="card">Credit/Debit Card</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </label>
                <br />
                {paymentMethod === "card" && (
                  <form onSubmit={handlePayment} className="payment-form">
                    <br />
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
                )}
                {paymentMethod === "cod" && (
                  <button className="pay-now-btn" onClick={handlePayment}>
                    Place Order
                  </button>
                )}
              </>
            )}
          </>
        ) : (
          <div className="payment-confirmation">
            <h2>Thank You for Your Purchase!</h2>
            <p>
              {paymentMethod === "cod"
                ? "Your order has been placed successfully! Cash on Delivery selected."
                : "Your payment has been successfully processed."}
            </p>
            <p>Order Summary:</p>
            <ul>
              <li>Books: {paymentDetails.quantity}</li>
              <li>Total: ₹{(paymentDetails.quantity * bookPrice).toFixed(2)}</li>

              <li>Delivery Address: {paymentDetails.address}</li>
            </ul>
            <button
              className="back-to-shopping-btn"
              onClick={() => {
                setIsPaymentProcessed(false);
                setIsAddressEntered(false);
              }}
            >
              Back to Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
