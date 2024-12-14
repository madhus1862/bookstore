import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setErrorMessages("All fields are required!");
    } else {
      setErrorMessages("");
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);
          navigate("/home");
        } else {
          setErrorMessages(data.error);
        }
      } catch (error) {
        setErrorMessages("Something went wrong. Please try again.");
        console.error(error);
      }
    }
  };

  return (
    <div className="center-wrapper">
      <div className="login-container">
        <form id="myForm" onSubmit={handleSubmit}>
          <h1>USER LOGIN</h1>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input type="submit" value="Submit" />

          {errorMessages && <div id="errorMessages" className="error">{errorMessages}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
