import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/overview" activeClassName="visited">Overview</NavLink>
          </li>
          <li>
            <NavLink to="/expenses" activeClassName="visited">Expenses</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
