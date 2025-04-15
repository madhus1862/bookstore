import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./home.css";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the Bookstore Management System</h1>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/book">Books</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="content-wrapper">
      <main>
        <section id="welcome">
          <h2>Your One-Stop Bookstore</h2>
          <p>Explore a wide variety of books, add them to your cart, and checkout seamlessly.</p>
        </section>

        <section id="featured">
          <h2>Featured Books</h2>
          <p>Check out some of our most popular books below:</p>
          {/* Add links to featured books or images */}
        </section>

        <section id="call-to-action">
          <h2>Start Shopping Now!</h2>
          <p>Browse our collection of books and add them to your cart.</p>
          <Link to="/book">
            <button>Browse Books</button>
          </Link>
        </section>
      </main>
     </div>
      <footer>
        <p>&copy; Madhumitha17#bookstore <br /> @2024 Bookstore Management System</p>
      </footer>
    </div>
  );
};

export default HomePage;