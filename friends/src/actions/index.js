import axios from 'axios';

import axiosImproved from '../axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'UPDATE_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const LOGGING_IN = 'LOGGING_IN';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const ERROR = 'ERROR';

const friendsApiUrl = 'http://127.0.0.1:5000/api';

export function getFriends(friends) {
  return {
    type: GET_FRIENDS,
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

export function genericAction(type, payload) {
  return {
    type,
    payload,
  }
}

export const login = (username, password) => dispatch => {
  dispatch(genericAction(LOGGING_IN, true))
  axios.post(`${friendsApiUrl}/login`, {username, password})
    .then(response => {
      localStorage.setItem('token', response.data.payload);
    })
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(LOGGING_IN, false)))
}

export const fetchFriends = () => dispatch => {
  dispatch(genericAction(FETCHING_FRIENDS, true))
  axiosImproved().get(`${friendsApiUrl}/friends`)
    .then(response => dispatch(getFriends(response.data)))
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(FETCHING_FRIENDS, false)))
}
