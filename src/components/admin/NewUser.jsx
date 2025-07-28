import { useContext, useState } from "react";
import { contextApp } from "../../context/context";
import "../admin/admin.css";

const NewUser = () => {
  const { users, setUsers } = useContext(contextApp);
  const [userForm, setUserForm] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    dni: "",
    telefono: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserForm({
      ...userForm,
      [name]: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userForm.nombre.trim() ||
      !userForm.apellido.trim() ||
      !userForm.direccion.trim() ||
      !userForm.dni.trim() ||
      !userForm.telefono.trim()
    ) {
      setError("Completar todos los datos");
      return;
    }
    const dniExist = users.some((user) => user.dni === userForm.dni);
    if (dniExist) {
      setError("Ese DNI ya esta registrado");
      return;
    }
    const activeUser = {
      ...userForm,
      estado: true,
      inscriptionDate: new Date().toISOString(),
    };
    setUsers([...users, activeUser]);
    setUserForm({
      nombre: "",
      apellido: "",
      direccion: "",
      dni: "",
      telefono: "",
      estado: false,
    });
    setError("");
  };

  return (
    <section className="container adm">
      <h2 className="title">Panel de Administracion</h2>
      <div className="adm-newUser">
        <h3>Crear nuevo usuario</h3>
        <form onSubmit={handleSubmit} className="newUser-form">
          <label className="newUser-label">Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={userForm.nombre}
            onChange={handleChange}
            className="newUser-input"
          />
          <label className="newUser-label">Apellido: </label>
          <input
            type="text"
            name="apellido"
            value={userForm.apellido}
            onChange={handleChange}
            className="newUser-input"
          />
          <label className="newUser-label">Dirección: </label>
          <input
            type="text"
            name="direccion"
            value={userForm.direccion}
            onChange={handleChange}
            className="newUser-input"
          />
          <label className="newUser-label">DNI: </label>
          <input
            type="number"
            name="dni"
            value={userForm.dni}
            onChange={handleChange}
            className="newUser-input"
          />
          <label className="newUser-label">Telefono</label>
          <input
            type="number"
            name="telefono"
            value={userForm.telefono}
            onChange={handleChange}
            className="newUser-input"
          />
          {error && <p className="text-error">{error}</p>}
          <button type="submit" className="newUser-btn">
            Agregar
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewUser;
