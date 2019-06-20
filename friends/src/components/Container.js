import React from 'react'
import { Route, Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';
import FriendsList from './FriendsList';

export default function Container() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => {
          if (localStorage.getItem('token')) {
            return (
              <FriendsList />
            )
          }
          return <Redirect to='login' />
        }}
      />

      <Route path='/login' component={LoginForm} />
    </div>
  )
}
