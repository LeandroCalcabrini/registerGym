import { NavLink } from "react-router-dom";
import "../navbar/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="header">
      <strong className="logo">Star Gym</strong>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to={"/"}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to={"/user"}
        >
          Usuario
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to={"/admin"}
        >
          Administracion
        </NavLink>
      </nav>
      <GiHamburgerMenu size={30} className="burgerMenu"/>
    </header>
  );
};

export default Navbar;
