import { combineReducers } from 'redux';
import * as types from '../actions';

const initialState = {
  friends: [],
}

export function friendsReducer(state = initialState.friends, action) {
  switch(action.type) {
    case (types.GET_FRIENDS):
      return action.payload;
    case (types.ADD_FRIEND):
      return [...state, action.payload];
    case (types.UPDATE_FRIEND):
        return state.map(friend => {
          if (friend.id === action.payload.id) {
            return [ ...friend, action.payload ];
          }
          return friend;
        })
    case (types.DELETE_FRIEND):
      return state.filter(friend => friend.id !== action.payload);
    default:
      return state;
  }
}

export const combinedReducers = combineReducers({
  friends: friendsReducer,
});
