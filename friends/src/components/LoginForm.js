import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import { login } from '../actions'

export function LoginForm(props) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      props.history.push('/friends')
    }
  })

  const usernameRef = React.createRef();
  const passwordRef = React.createRef();


  const doLogin = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    props.login(username, password);
  }

  return (
    <div>
      <h3>Login</h3>
      <form
        onSubmit={(event) => doLogin(event)}
      >
        <input
          type='text'
          placeholder='username'
          ref={usernameRef}
        />
        <input
          type='password'
          placeholder='password'
          ref={passwordRef}
        />
        <input
          type='submit'
          value='Login'
        />
      </form>
    </div>
  )
}

export default connect(null, { login })(LoginForm);
