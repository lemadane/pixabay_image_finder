import axios from 'axios';
import { GET_IMAGES_STARTED, GET_IMAGES_DONE, GET_IMAGES_ERROR } from './reducer';
import { Dispatch } from 'redux';

const API = {
  URL: 'https://pixabay.com/api',
  KEY: '14631600-7cc18e2413758d0f62fdf2027',
};

export const getImages = (input: { amount: number, searchText: string; }) => async (dispatch: Dispatch) => {
  try {
    const { amount, searchText } = input;
    if (amount && searchText) {
      const uri = `${API.URL}/?safesarech=true`
        + `&image_type=photo`
        + `&key=${API.KEY}`
        + `&per_page=${amount}`
        + `&q=${searchText}`;
      dispatch({ type: GET_IMAGES_STARTED });
      const response = await axios.get(uri);
      dispatch({ type: GET_IMAGES_DONE, payload: response.data.hits });
    }
  } catch (err) {
    dispatch({ type: GET_IMAGES_ERROR, payload: err.c });
  }
};