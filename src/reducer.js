import axios from 'axios';

const API = {
  URL: 'https://pixabay.com/api',
  KEY: '14631600-7cc18e2413758d0f62fdf2027',
}

export const GET_IMAGES_STARTED = Symbol();
export const GET_IMAGES_DONE = Symbol();
export const GET_IMAGES_ERROR = Symbol();
export const SEARCH_TEXT_CHANGE = Symbol();
export const AMOUNT_CHANGE = Symbol();
export const ZOOM_IN_OPEN = Symbol();
export const ZOOM_IN_CLOSE = Symbol();

const initialState = {
  searchText: 'boy',
  loading: false,
  amount: 5,
  images: [],
  error: '',
  currentImage: '',
  openZoomIn: false,
};

export const getImages = ({ amount, searchText }) => async (dispatch) => {
  try {
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
    dispatch({ type: GET_IMAGES_ERROR, payload: err.message });
  }
}
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case SEARCH_TEXT_CHANGE:
      return {
        ...state,
        searchText: payload,
      };
    case AMOUNT_CHANGE:
      return {
        ...state,
        amount: payload,
      };
    case GET_IMAGES_DONE:
      return {
        ...state,
        images: payload,
      };
    case GET_IMAGES_ERROR:
      return {
        ...state,
        error: payload,
      };

    case ZOOM_IN_OPEN:
      return {
        ...state,
        currentImage: payload,
        openZoomIn: true,
      };
    case ZOOM_IN_CLOSE:
      return {
        ...state,
        openZoomIn: false,
      };
  }
}

export default reducer;