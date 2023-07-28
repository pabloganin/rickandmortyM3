// import { useDispatch, useSelector } from "react-redux";
// import Card from "../Card/Card";
// import styled from "styled-components";
// import { filterCards, orderCards } from "../../redux/actions";
// import { useState } from "react";

// export const FavoriteStyle = styled.div`
//   display: grid;
//   grid-template-columns: 20% 20% 20% 20%;
//   justify-content: space-evenly;
//   padding: 5px;
//   width: 100%;
//   margin: auto;
//   height: 110vh;
// `;

// const Favorites = () => {
//   const [aux, setAux] = useState(false);
//   const dispatch = useDispatch();
//   const myFavorites = useSelector(state => state.myFavorites);

//   const handleOrder = (e) => {
//     dispatch(orderCards(e.target.value));
//     setAux(!aux);
//   }

//   const handleFilter = (e) => {
//     dispatch(filterCards(e.target.value));
//   }

//   return (
//     <div>
//       <div>
//         <select onChange={handleOrder}>
//           <option value="A">Ascendente</option>
//           <option value="D">Descendente</option>
//         </select>
//         <select onChange={handleFilter}>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Genderless">Genderless</option>
//           <option value="unknown">Unknown</option>
//         </select>
//       </div>
//     <FavoriteStyle>
//       {myFavorites?.map((fav) => (
//         <Card
//           id={fav.id}
//           key={fav.id}
//           name={fav.name}
//           species={fav.species}
//           status={fav.status}
//           origin={fav.origin}
//           gender={fav.gender}
//           image={fav.image}
//         />
//       ))}
//     </FavoriteStyle>
//     </div>
//   );
// };

// export default Favorites;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Fav.module.css";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";

const Favorites = ({ removeFav }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const navigate = useNavigate();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  // Función para manejar la eliminación de una tarjeta favorita
  const handleFavorite = (id) => {
    // Llamamos a la acción removeFav para eliminar la tarjeta con el id proporcionado
    removeFav(id);
  };

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.FavoriteStyle}>
        {myFavorites?.map((fav) => (
          <Card
            id={fav.id}
            key={fav.id} // Asegúrate de que esta clave sea única
            name={fav.name}
            species={fav.species}
            status={fav.status}
            origin={fav.origin}
            gender={fav.gender}
            image={fav.image}
            // Pasamos la función handleFavorite al componente Card para poder eliminar tarjetas
            removeFav={() => handleFavorite(fav.id)}
          />
        ))}
      </div>

      {/* Bloque de botones dentro del return */}
      <div className={styles.buttonBack}>
        <button className={styles.links} onClick={() => navigate("/home")}>
          Pagina Inicio
        </button>
      </div>
    </div>
  );
};

export default Favorites;
