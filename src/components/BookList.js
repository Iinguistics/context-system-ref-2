import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.color, background: theme.ui }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Flow</li>
          <li style={{ background: theme.ui }}>
            The power of mathematical thinking
          </li>
          <li style={{ background: theme.ui }}>Extreme Ownership</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
