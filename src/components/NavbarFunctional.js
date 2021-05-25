import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const NavbarFunctional = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <nav style={{ background: theme.ui, color: theme.color }}>
        <h1>Context App</h1>
        <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarFunctional;
