import { useContext, useState } from "react";
import { contextApp } from "../context/context";
import '../pages/user.css'
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
      <section className="container user">
        <div className="user-login">
          {!userLogin && (
            <>
              <span className="login-title">Por favor ingrese su DNI: </span>
              <input
                className="login-input"
                type="number"
                onChange={handleChange}
                value={userDni}
              />
              {loginError && <p className="text-error">{loginError}</p>}
              <button className="login-button" onClick={handleClick}>
                Ingresar
              </button>
            </>
          )}
          {userLogin && (
            <div className="login-info">
              <h3 className="login-user">
                ¡Hola{" "}
                <strong className="login-name">
                  {userLogin.nombre} {userLogin.apellido}
                </strong>
                !
              </h3>
              <div
                className={`login-estado ${userLogin.estado ? "active" : ""}`}
              >
                {userLogin.estado ? "Activo" : "Vencido"}
              </div>
              <p className="login-text">
                Recorda que tu cuota vence:
                {expirationDate(userLogin.inscriptionDate)}
              </p>
              <button className="login-button" onClick={handleClickReset}>
                Volver
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default User;
