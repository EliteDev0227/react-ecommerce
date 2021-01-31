import { OPEN_MENU, CLOSE_MENU } from '../actions';

const initialState = {
  menuOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        menuOpen: true,
      };
    case CLOSE_MENU:
      console.log('Close menu reducer');
      return {
        ...state,
        menuOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
