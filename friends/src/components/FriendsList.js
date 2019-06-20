import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import AddFriend from './AddFriend';
import { fetchFriends } from '../actions';

export function FriendsList(props) {
  const {fetchFriends} = props;
  useEffect(() => {
    fetchFriends();
  },[fetchFriends])
  
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
          friends={props.friends}
        />
      </table>
      {/* {
        requestError
        && <p>Sorry! The engineer got cranky! We are unable to get the friends data at this time</p>
      }
      {
        loading
        && <p>Friend is coming!</p>
      } */}
      <AddFriend />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, { fetchFriends })(FriendsList);
