import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { createFriend, modifyFriend } from '../actions'

export function AddFriend(props) {
  useEffect(() => {

  })

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

  const onModifyFriend = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;
    const id = props.friendToUpdate.id;
    const friend = {id, name, age, email}

    props.modifyFriend(friend);
  }

  
  return (
    <div>
      <h4>Add a friend</h4>
      <form
        onSubmit={event => {
          !props.updatingFriend
            ? onAddNewFriend(event)
            : onModifyFriend(event)
        }}
      >
        <input
          type="text"
          placeholder="Name"
          ref={nameRef}
          defaultValue={props.friendToUpdate ? props.friendToUpdate.name : ''}
        />
        <input
          type="text"
          placeholder="Age"
          ref={ageRef}
          defaultValue={props.friendToUpdate ? props.friendToUpdate.age : ''}
        />
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
          defaultValue={props.friendToUpdate ? props.friendToUpdate.email : ''}
        />
        <input
          type="submit"
          value={props.updatingFriend ? 'Update Friend' : 'Add Friend'}
        />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    friendToUpdate: state.friendsReducer.friend,
    updatingFriend: state.friendsReducer.updatingFriend
  }
}

export default connect(mapStateToProps, { createFriend, modifyFriend })(AddFriend);
