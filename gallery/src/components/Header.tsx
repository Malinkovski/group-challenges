import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
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
