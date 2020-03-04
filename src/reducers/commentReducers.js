import { GET_ITEM, ADD_ITEM } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return action.payload;

    case ADD_ITEM:
      return { ...state, items: state.items.concat(action.payload) };
    // items:...state.items,action.payload
    default:
      return state || [];
  }
};
