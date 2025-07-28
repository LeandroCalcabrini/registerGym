import { NavLink } from "react-router-dom";
import "../navbar/navbar.css";

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
    </header>
  );
};

export default Navbar;
