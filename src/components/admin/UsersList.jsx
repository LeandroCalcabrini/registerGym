import { useContext, useState, useEffect } from "react";
import { contextApp } from "../../context/context";

const UsersList = () => {
  const { users, setUsers,expirationDate } = useContext(contextApp);
  const [filterUser, setFilterUser] = useState([]);

  const handleDelete = (dni) => {
    // funcion para eliminar usuario
    const userDelete = users.filter((user) => user.dni !== dni);
    setUsers(userDelete);
  };

  const handleActive = (dni) => {
    // funcion para indicar que el usuario esta al dia,
    const userActive = users.map((user) =>
      user.dni === dni
        ? { ...user, estado: true, inscriptionDate: new Date().toISOString() }
        : user
    );
    setUsers(userActive);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const searchUser = users.filter((user) => user.dni === value);
    setFilterUser(searchUser);
  };

  const usersFilter = filterUser.length > 0 ? filterUser : users;


  const expiredSuscription = () => {
    const today = new Date();
    const updateUsers = users.map((user) => {
      const inscriptionDate = new Date(user.inscriptionDate);
      const expirationDate = new Date(inscriptionDate);
      expirationDate.setMonth(expirationDate.getMonth() + 1);
      const isExpired = today > expirationDate;
      return { ...user, estado: !isExpired };
    });
    setUsers(updateUsers);
  };

  useEffect(() => {
    expiredSuscription();
  }, []);

  return (
    <section className="container">
      <form>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Ingrese el DNI del usuario "
        />
      </form>
      <h3>Lista de Usuarios</h3>
      {usersFilter.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dirección</th>
              <th>DNI</th>
              <th>Teléfono</th>
              <th>Vence</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usersFilter.map((user) => (
              <tr key={user.dni}>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.direccion}</td>
                <td>{user.dni}</td>
                <td>{user.telefono}</td>
                <td>{expirationDate(user.inscriptionDate)}</td>
                <td className={`status ${user.estado ? "active" : ""}`}>
                  {user.estado ? "Activo" : "Inactivo"}
                </td>
                <td>
                  <button onClick={() => handleDelete(user.dni)}>
                    Eliminar
                  </button>
                  <button onClick={() => handleActive(user.dni)}>
                    Cuota al dia
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default UsersList;
