import axios from 'axios';

const URL = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}`, character);

      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL}/${id}`);

      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: 'FILTER',
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: 'ORDER',
    payload: orden,
  };
};