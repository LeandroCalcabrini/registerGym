import { NavLink,} from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img src="#" alt="logo" />
      <NavLink to={"/"}>Inicio</NavLink>
       <NavLink to={"/user"}>Usuario</NavLink>
        <NavLink to={"/admin"}>Administracion</NavLink>

    </header>
  );
};

export default Navbar;
