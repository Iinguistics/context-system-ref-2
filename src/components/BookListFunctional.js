import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookListFunctional = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.color, background: theme.ui }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Innumeracy</li>
        <li style={{ background: theme.ui }}>Number</li>
        <li style={{ background: theme.ui }}>White Noise</li>
      </ul>
    </div>
  );
};

export default BookListFunctional;
