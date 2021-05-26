import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookListFunctional = () => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookId, setNewBookId] = useState("");

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books, addBook } = useContext(BookContext);

  console.log(books);

  const renderBooks = () => {
    if (books) {
      return books.map((book) => {
        return (
          <>
            <li key={book.id}>{book.title}</li>
          </>
        );
      });
    }
  };

  const addNewBook = () => {
    addBook(newBookTitle, newBookId);
    setNewBookTitle("");
    setNewBookId("");
  };
  return (
    <>
      <h1 className="book-list">Your Book List:</h1>
      <div
        className="book-list"
        style={{ color: theme.color, background: theme.ui }}
      >
        <ul style={{ background: theme.ui }}>{renderBooks()}</ul>
      </div>
      <div className="add-new">
        <h3>Add a new book</h3>
        <label>Title</label>
        <br />
        <input
          type="text"
          onChange={(e) => setNewBookTitle(e.target.value)}
          value={newBookTitle}
        />
        <br />
        <label>Id</label>
        <br />
        <input
          type="text"
          onChange={(e) => setNewBookId(e.target.value)}
          value={newBookId}
        />
        <br />
        <button className="add-book-btn" onClick={addNewBook}>
          Add Book
        </button>
      </div>
    </>
  );
};

export default BookListFunctional;
