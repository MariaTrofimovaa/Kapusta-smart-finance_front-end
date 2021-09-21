import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/auth" exact>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/report" exact>
            Report
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
