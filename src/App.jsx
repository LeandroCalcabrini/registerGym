import { BrowserRouter, Routes, Route } from "react-router-dom";
import { contextApp } from "./context/context";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
function App() {
  const [users, setUsers] = useState(()=>{
    const usersLocalStorage = localStorage.getItem('users');
    return usersLocalStorage ? JSON.parse(usersLocalStorage) : [];

  });

    const expirationDate = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toLocaleDateString("es-AR");
  };


  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users))
  },[users])
  return (
    <>
      <contextApp.Provider value={{ users, setUsers, expirationDate }}>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </contextApp.Provider>
    </>
  );
}

export default App;
