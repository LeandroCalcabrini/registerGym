import { useContext, useState } from "react";
import { contextApp } from "../context/context";

const User = () => {
  const [userDni, setUserDni] = useState("");
  const [userLogin, setUserLogin] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const { users, expirationDate } = useContext(contextApp);
  const handleChange = (e) => {
    const value = e.target.value;
    setUserDni(value);
  };

  const handleClick = () => {
    if (!userDni.trim()) {
      return setLoginError("Por favor ingrese un DNI válido");
    }
    const dniEntered = users.find((user) => user.dni === userDni);
    if (!dniEntered) {
      return setLoginError("Usuario no encontrado");
    }
    setUserLogin(dniEntered);
    setLoginError(null);
  };

  const handleClickReset = () => {
    setUserLogin(null);
    setLoginError(null);
    setUserDni("");
  };

  return (
    <main>
      <section>
        {!userLogin && (
          <span>
            Por favor ingrese su DNI:{" "}
            <input type="number" onChange={handleChange} value={userDni} />{" "}
            <button onClick={handleClick}>Ingresar</button>
          </span>
        )}

        {loginError && <p>{loginError}</p>}
        {userLogin && (
          <div>
            <h3>
              ¡Hola{" "}
              <strong>
                {userLogin.nombre} {userLogin.apellido}
              </strong>
            </h3>
            !<div>{userLogin.estado ? "Activo" : "Vencido"}</div>
            <p>
              Recorda que tu cuota vence:{" "}
              {expirationDate(userLogin.inscriptionDate)}
            </p>
            <button onClick={handleClickReset}>Volver</button>
          </div>
        )}
      </section>
    </main>
  );
};

export default User;
