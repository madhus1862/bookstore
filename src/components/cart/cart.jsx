import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

  const handleCheckout = () => {
    // Navigate to checkout page and pass cart details
    navigate("/checkout", { state: { cartItems, total } });
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <header>
        <h1>Cart</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/book">Books</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <main>
          <section id="cart-items">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>Author: {item.author}</p>
                    <p>Price: {item.price} </p>
                    <label>
                      Quantity:
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      />
                    </label>
                  </div>
                  <button className="remove-btn" onClick={() => removeItemFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))
            )}
          </section>

          <section id="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
            <p>Total Price: {total.toFixed(2)} </p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CartPage;
