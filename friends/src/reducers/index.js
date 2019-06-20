import { combineReducers } from 'redux';
import * as types from '../actions';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

export function friendsReducer(state = initialState, action) {
  switch(action.type) {
    case (types.GET_FRIENDS):
      return { ...state, friends: action.payload };

    case (types.ADD_FRIEND):
      return {
        ...state,
        friends: [ ...state.friends, action.payload ]
      };

    case (types.UPDATE_FRIEND):
        return state.friends.map(friend => {
          if (friend.id === action.payload.id) {
            return [ ...friend, action.payload ];
          }
          return friend;
        })

    case (types.DELETE_FRIEND):
      return state.friends.filter(friend => friend.id !== action.payload);

    case (types.DELETING_FRIEND):
      return {
        ...state,
        deletingFriend: action.payload
      }
    
    case (types.FETCHING_FRIENDS):
      return {
        ...state,
        fetchingFriends: action.payload
      }
      
    case (types.LOGGING_IN):
      return {
        ...state,
        loggingIn: action.payload
      }

    case (types.SAVING_FRIENDS):
      return {
        ...state,
        savingFriends: action.payload
      }

    case (types.UPDATING_FRIEND):
      return {
        ...state,
        updatingFriend: action.payload
      }

    case (types.ERROR):
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}

export const combinedReducers = combineReducers({
  friendsReducer,
});
