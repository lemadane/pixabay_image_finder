import { MyState, MyAction } from './types';

export const GET_IMAGES_STARTED = Symbol();
export const GET_IMAGES_DONE = Symbol();
export const GET_IMAGES_ERROR = Symbol();
export const SEARCH_TEXT_CHANGE = Symbol('');
export const AMOUNT_CHANGE = Symbol();
export const ZOOM_IN_OPEN = Symbol();
export const ZOOM_IN_CLOSE = Symbol();

const initialState: MyState = {
  searchText: 'manila',
  loading: false,
  amount: 10,
  images: [],
  error: '',
  currentImageURL: '',
  openZoomIn: false,
};

export const reducer = (state: MyState = initialState, action: MyAction) => {
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
};
