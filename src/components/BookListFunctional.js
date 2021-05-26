import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookListFunctional = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

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
  return (
    <>
      <div
        className="book-list"
        style={{ color: theme.color, background: theme.ui }}
      >
        <ul style={{ background: theme.ui }}>{renderBooks()}</ul>
      </div>
      <div className="add-new">
        <label>Add a new book</label>
        <br />
        <input type="text" />
        <br />
        <button className="add-book-btn">Add Book</button>
      </div>
    </>
  );
};

export default BookListFunctional;
