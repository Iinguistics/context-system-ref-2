import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [book, setBook] = useState([
    { title: "Innumeracy", id: 1 },
    { title: "Number", id: 2 },
    { title: "White Noise", id: 3 },
    { title: "Flow", id: 4 },
    { title: "The power of mathematical thinking", id: 5 },
    { title: "Extreme Ownership", id: 6 },
  ]);

  return (
    <BookContext.Provider value={{ book }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
