import React from 'react';
import Friend from './Friend';
import AddFriend from './AddFriend';

export default function FriendsList({ friends, requestError, loading, setFriendToEdit, deleteFriend }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <Friend
          friends={friends}
          // setFriendToEdit={setFriendToEdit}
          // deleteFriend={deleteFriend}
        />
        <AddFriend />
      </table>
      {
        requestError
        && <p>Sorry! The engineer got cranky! We are unable to get the friends data at this time</p>
      }
      {
        loading
        && <p>Friend is coming!</p>
      }
    </div>
  );
}
