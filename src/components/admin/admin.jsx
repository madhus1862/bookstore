import React, { useState, useEffect } from "react";
import "./admin.css";

const AdminPage = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    price: "",
    image: "",
  });

  const [books, setBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editBookId, setEditBookId] = useState(null);

  // Load books from localStorage on page load
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  // Save books to localStorage
  const saveBooksToLocalStorage = (updatedBooks) => {
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Add or Update a Book
  const handleAddOrUpdateBook = () => {
    if (isEditing) {
      // Update existing book
      const updatedBooks = books.map((book) =>
        book.id === editBookId ? { id: editBookId, ...bookDetails } : book
      );
      saveBooksToLocalStorage(updatedBooks);
      setIsEditing(false);
      setEditBookId(null);
    } else {
      // Add new book
      const newBook = { id: Date.now(), ...bookDetails };
      const updatedBooks = [...books, newBook];
      saveBooksToLocalStorage(updatedBooks);
    }

    // Clear the form
    setBookDetails({
      title: "",
      author: "",
      price: "",
      image: "",
    });
  };

  // Delete a Book
  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    saveBooksToLocalStorage(updatedBooks);
  };

  // Edit a Book
  const handleEditBook = (book) => {
    setBookDetails({
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
    });
    setIsEditing(true);
    setEditBookId(book.id);
  };

  return (
    <div className="center-wrapper">
      <div className="admin-container">
        <h1>Admin Panel - Book Management</h1>

        {/* Form for Adding/Updating Books */}
        <form
          className="admin-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddOrUpdateBook();
          }}
        >
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={bookDetails.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={bookDetails.author}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={bookDetails.price}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={bookDetails.image}
              onChange={handleInputChange}
              required
            />
          </label>
          <button className="add-book-btn" type="submit">
            {isEditing ? "Update Book" : "Add Book"}
          </button>
        </form>

        {/* Books List */}
        <div className="admin-books-list">
          <h2>Books List</h2>
          {books.length === 0 ? (
            <p>No books available. Add some!</p>
          ) : (
            <ul>
              {books.map((book) => (
                <li key={book.id} className="book-item">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                  <div>
                    <strong>{book.title}</strong> by {book.author} <br />
                    Price: {book.price}.Rs
                  </div>
                  <div>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditBook(book)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
