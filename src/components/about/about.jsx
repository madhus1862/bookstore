import React from "react";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Our Bookstore</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to our Bookstore Management System! Our platform is designed to
          simplify bookstore operations by integrating advanced digital
          solutions for inventory management, sales tracking, and customer
          engagement. Whether you're a reader searching for your next great book
          or an admin managing stock and sales, our system ensures a seamless
          and user-friendly experience.
        </p>
        <p>
          Built with the latest technologies like React.js, Node.js, Express.js,
          and MongoDB, our system offers dynamic inventory management,
          role-based access, and secure transactions. We aim to enhance
          efficiency and customer satisfaction, transforming the traditional
          bookstore experience into a modern, interactive one.
        </p>
        <p>
          Thank you for choosing us. Happy Reading!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;