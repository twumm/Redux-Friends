import React from 'react';
import { connect } from 'react-redux';
import { removeFriend } from '../actions'

export function Friend(props) {
  const onRemoveFriend = (event, id) => {
    event.preventDefault();
    props.removeFriend(id);
  }

  return (
    <tbody>
      {
        props.friends.map(friend => (
          <tr
            key={friend.id}
            // onClick={event => setFriendToEdit(event, friend)}
          >
            <td>{friend.name}</td>
            <td>{friend.email}</td>
            <td>{friend.age}</td>
            <td
              onClick={event => onRemoveFriend(event, friend.id)}
            >
              X
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default connect(null, { removeFriend })(Friend);
