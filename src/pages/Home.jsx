import { Link } from "react-router-dom";
import UserImg from '../img/pesas.webp'
import AdmImg from '../img/adm.jpg'
import '../pages/home.css'

const Home = () => {
  return (
    <main>
      <section className="container home">
        <div className="cards-container">
          <Link to={"/user"}>
            <article className="card">
              <img src={UserImg} alt="imagen de usuario" className="card-img" />
              <h2 className="card-title">Usuario</h2>
            </article>
          </Link>
          <Link to={"/admin"}>
            <article className="card">
              <img src={AdmImg} alt="imagen de administracion" className="card-img" />
              <h2 className="card-title">Administracion</h2>
            </article>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
