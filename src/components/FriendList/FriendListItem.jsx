import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return <div>
    <li className="item">
                  <span className="status"></span>
              <img className="avatar" src={ avatar } alt="User avatar" width="48" />
      <p className="name">{ name }</p>
          </li>;
  </div>
};

export default FriendListItem;