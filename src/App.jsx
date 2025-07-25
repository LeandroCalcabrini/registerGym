import { BrowserRouter, Routes, Route } from "react-router-dom";
import { contextApp } from "./context/context";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <contextApp.Provider value={{users, setUsers}}>
        <BrowserRouter>
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
