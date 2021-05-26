import React from "react";
import BookList from "./components/BookList";
import NavbarFunctional from "./components/NavbarFunctional";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import AuthToggle from "./components/AuthToggle";
import BookListFunctional from "./components/BookListFunctional";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavbarFunctional />
          <h1 className="book-list">Are recommendations:</h1>
          <BookList />
          <h1 className="book-list">Your Book List:</h1>
          <BookListFunctional />
          <ThemeToggle />
          <AuthToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
