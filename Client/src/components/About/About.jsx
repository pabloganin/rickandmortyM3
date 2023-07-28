import React from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Acción a realizar cuando se hace clic en el botón adicional
    console.log("Botón adicional clickeado");
  };

  return (
    <div className={styles.About}>
      <div className={styles.buttonBack}>
        <button className={styles.links} onClick={() => navigate("/home")}>
          Pagina Inicio
        </button>
      </div>
      <br />
      <hr />
      <h1 className={styles.h1}> Pablo Ganin</h1>
      <hr />
      <br />
      <div className={styles.cardAbout}>
        <p>
          Soy Pablo Ganin, estudiante de Soy Henry. Nací el 23/11/79 en Ceres,
          Santa Fe, Argentina, donde vivo actualmente.... Técnico en reparación
          de electrodomésticos y energías renovables, estoy iniciando mi camino
          como desarrollador.
        </p>
      </div>

      <br />

      <div className={styles.iconContainer}>
        <ul className={styles.list}>
          <li className={styles.li}>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          </li>
          <li className={styles.li}>
            <a href="https://www.github.com/">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>

  

  
    </div>
  );
}
