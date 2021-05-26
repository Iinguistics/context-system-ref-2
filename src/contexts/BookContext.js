import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Innumeracy", id: 1 },
    { title: "Number", id: 2 },
    { title: "White Noise", id: 3 },
    { title: "Flow", id: 4 },
    { title: "The power of mathematical thinking", id: 5 },
    { title: "Extreme Ownership", id: 6 },
  ]);

  const addBook = (value) => {
    setBooks(...books, value);
  };

  return (
    <BookContext.Provider value={{ books: books, addBook: addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
