import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => {
          const char = response.data;
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch(error => {
          console.error("Error al obtener el personaje:", error);
          window.alert("Error al obtener el personaje.");
        });
    },
    [id]
  );

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.tittle}>
          <h1>
            {" "}{character.name}
          </h1>
        </div>

        <div className={styles.info}>
          <div className={styles.infoExtra}>
            <h2 className={styles.infoExtra}>
              Status: {character.status}
            </h2>
            <h2 className={styles.infoExtra}>
              Specie: {character.species}
            </h2>
            <h2 className={styles.infoExtra}>
              Gender: {character.gender}
            </h2>
          </div>

          <div>
            <img src={character.image} alt="character img" />
          </div>
        </div>
      </div>

      <div className={styles.buttonBack}>
        <button className={styles.links} onClick={() => navigate("/home")}>
          Pagina Inicio
        </button>
      </div>
    </div>
  );
}
