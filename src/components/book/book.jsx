import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./book.css";
import book1 from "./images/book1.jpg";
import book2 from "./images/book2.jpg";
import book3 from "./images/book3.jpg";
import book4 from "./images/book4.jpg";
import book5 from "./images/book5.jpg";
import book6 from "./images/book6.jpg";
import book7 from "./images/book7.jpg";
import book8 from "./images/book8.jpg";
import book9 from "./images/book9.jpg";
import book10 from "./images/book10.jpg";

// Static books
const staticBooks = [
  { id: 1, title: "THE UNWILLING", author: "John Hart", price: "600.Rs", image: book1 },
  { id: 2, title: "THE OUTSIDE BOY", author: "Jeanine Cummins", price: "750.Rs", image: book2 },
  { id: 3, title: "Harry Potter", author: "J.K. Rowling", price: "450.Rs", image: book3 },
  { id: 4, title: "The Summer Pact", author: "Emily Giffin", price: "500.Rs", image: book4 },
  { id: 5, title: "The Book of Lost Names", author: "Kristin Harmel", price: "890.Rs", image: book5 },
  { id: 6, title: "Death Of An Author", author: "Aidan Marchine", price: "900.Rs", image: book6 },
  { id: 7, title: "Twenty Yawns", author: "Jane Smiley", price: "560.Rs", image: book7 },
  { id: 8, title: "End of Watch", author: "Stephen King", price: "1200.Rs", image: book8 },
  { id: 9, title: "The Book of Lost Names", author: "Kristin Harmel", price: "1500.Rs", image: book9 },
  { id: 10, title: "Fire Shut Up in My Bones", author: "Charles M. Blow", price: "2500.Rs", image: book10 },
];

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
  const navigate = useNavigate();

  useEffect(() => {
    // Check admin status from localStorage
    const adminStatus = localStorage.getItem("isAdmin");
    setIsAdmin(adminStatus === "true"); // Set to true if adminStatus is "true"

    // Load static and dynamic books
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks([...staticBooks, ...storedBooks]);
  }, []);

  const handleBuyNow = (book) => {
    navigate("/payment", { state: { book } });
  };

  const handleAddToCart = (book) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, book];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${book.title} has been added to your cart!`);
  };

  return (
    <div>
      <header>
        <h1>Bookstore Management System</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/book">Books</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="cart-button">
          <a href="/cart"><button>Cart</button></a>
          {isAdmin && ( // Conditional rendering for the Admin button
            <a href="/admin" className="admin-link">
              <button className="admin-button">Admin</button>
            </a>
          )}
        </div>
      </nav>
      <section id="books" className="flex-container">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} />
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <button onClick={() => handleBuyNow(book)}>Buy Now</button>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BookPage;
