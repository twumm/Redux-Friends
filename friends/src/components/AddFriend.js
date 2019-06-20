import React from 'react';
import { connect } from 'react-redux';

import { createFriend } from '../actions'

export function AddFriend(props) {
  const nameRef = React.createRef();
  const ageRef = React.createRef();
  const emailRef = React.createRef();

  const onAddNewFriend = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;

    props.createFriend(name, age, email);
  }

  
  return (
    <div>
      <h4>Add a friend</h4>
      <form
        onSubmit={event => onAddNewFriend(event)}
      >
        <input
          type="text"
          placeholder="Name"
          ref={nameRef}
        />
        <input
          type="text"
          placeholder="Age"
          ref={ageRef}
        />
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          type="submit"
          // value={editMode ? 'Update Friend' : 'Add Friend'}
        />
      </form>
    </div>
  );
}

export default connect(null, { createFriend })(AddFriend);
