import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div>
        <Link to={"/user"}>
          <button>Usuario</button>
        </Link>
        <Link to={"/admin"}>
          <button>Administracion</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
