import { useContext, useState } from "react";
import { contextApp } from "../../context/context";

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
    setUserForm({ ...userForm, [name]: value.charAt(0).toUpperCase()+ value.slice(1).toLowerCase() });
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

  console.log(users)
  return (
    <section className="container">
      <h2>Panel de Administracion</h2>
      {/* sector para cargar a los usuarios */}
      <div>
        <h3>Crear nuevo usuario</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={userForm.nombre}
            onChange={handleChange}
          />
          <label htmlFor="">Apellido: </label>
          <input
            type="text"
            name="apellido"
            value={userForm.apellido}
            onChange={handleChange}
          />
          <label htmlFor="">Dirección: </label>
          <input
            type="text"
            name="direccion"
            value={userForm.direccion}
            onChange={handleChange}
          />
          <label htmlFor="">DNI: </label>
          <input
            type="number"
            name="dni"
            value={userForm.dni}
            onChange={handleChange}
          />
          <label htmlFor="">Telefono</label>
          <input
            type="number"
            name="telefono"
            value={userForm.telefono}
            onChange={handleChange}
          />
          <button type="submit">Agregar</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default NewUser;
