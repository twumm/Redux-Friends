import axios from 'axios';
import { types } from 'util';

export const ADD_FRIENDS = 'ADD_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'UPDATE_FRIEND';

export function addFriends(friends) {
  return {
    type: ADD_FRIENDS,
    payload: friends,
  }
} 

export function addFriend(name, age, email) {
  return {
    type: ADD_FRIEND,
    payload: {
      name,
      age,
      email,
    }
  }
}

export function updateFriend(id, name, age, email) {
  return {
    type: UPDATE_FRIEND,
    payload: {
      id,
      name,
      age,
      email,
    }
  }
}

export function deleteFriend(id) {
  return {
    type: DELETE_FRIEND,
    payload: id,
  }
}