import React from 'react';
import { connect } from 'react-redux';
import { removeFriend, triggerFriendUpdate } from '../actions'

export function Friend(props) {
  const onRemoveFriend = (event, id) => {
    event.preventDefault();
    props.removeFriend(id);
  }

  const onTriggerFriendUpdate = (event, friend) => {
    event.preventDefault();
    props.triggerFriendUpdate(friend);
  }

  return (
    <tbody>
      {
        props.friends.map(friend => (
          <tr
            key={friend.id}
            onClick={event => onTriggerFriendUpdate(event, friend)}
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

export default connect(null, { removeFriend, triggerFriendUpdate })(Friend);
