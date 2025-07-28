import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="container">
        <div>
          <Link to={"/user"}>
            <button>Usuario</button>
          </Link>
          <Link to={"/admin"}>
            <button>Administracion</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
