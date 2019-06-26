import React from 'react'
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import FriendsList from './FriendsList';

export default function Container() {
  return (
    <div>
      <Route
        exact
        path="/"
        component={LoginForm}
      />

      <Route path='/login' component={LoginForm} />
      <Route path='/friends' component={FriendsList} />
    </div>
  )
}
