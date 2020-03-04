import { GET_ITEM, ADD_ITEM } from '../actions';

const initialState = { items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return action.payload;

    case ADD_ITEM:
      return { ...state, items: state.items.concat(action.payload) };

    default:
      return state || [];
  }
};
