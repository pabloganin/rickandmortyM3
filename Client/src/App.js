import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate
} from "react-router-dom";

//Componentes
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error404 from "./components/Error 404/Error404";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access, setAccess]);

  const URL = "http://localhost:3001/rickandmorty/";

  function login({ email, password }) {
    axios(`${URL}login?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
      });
  }

  function logout(userData) {
    setAccess(false);
    navigate("/");
  }

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldCharacter) => [...oldCharacter, data]);
        } else {
          window.alert("Inserte un ID para agregar un personaje");
        }
      });
  }

  function onClose(id) {
    setCharacters((oldCharacter) =>
      oldCharacter.filter((character) => character.id !== id)
    );
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && (
        <div>
          <NavBar onSearch={onSearch} logout={logout} />
          {/* renderizar aquí el botón para personajes aleatorios */}
        </div>
      )}

      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/Error404" />} />
      </Routes>
    </div>
  );
}

export default App;
