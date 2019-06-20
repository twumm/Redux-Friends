import axios from 'axios';

import axiosImproved from '../axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'UPDATE_FRIEND';

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

export const fetchFriends = () => dispatch => {
  axiosImproved().get(`${friendsApiUrl}/friends`)
    .then(response => {
      dispatch(getFriends(response.data))
    })
    .catch(error => {
    })
}

export const login = (username, password) => dispatch => {
  axios.post(`${friendsApiUrl}/login`, {username, password})
    .then(response => {
      localStorage.setItem('token', response.data.payload);
    })
    .catch(error => {
    })
}