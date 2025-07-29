import { NavLink } from "react-router-dom";
import "../navbar/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <header className="header">
      <strong className="logo">Star Gym</strong>
      <nav className={`navbar ${burger ? "active" : ""}`}>
        <IoClose
          onClick={() => setBurger(false)}
          size={25}
          className="closeIcon"
        />
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to={"/"}
          onClick={() => setBurger(false)}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to={"/user"}
          onClick={() => setBurger(false)}
        >
          Usuario
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to={"/admin"}
          onClick={() => setBurger(false)}
        >
          Administracion
        </NavLink>
      </nav>
        {!burger && (
          <GiHamburgerMenu
            onClick={() => setBurger(true)}
            size={30}
            className="burgerMenu"
          />
        )}
    </header>
  );
};

export default Navbar;
