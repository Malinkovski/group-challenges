import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/feed"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Feed
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="toggle-theme" onClick={toggleTheme}>
        <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
      </div>
    </header>
  );
};

export default Header;
