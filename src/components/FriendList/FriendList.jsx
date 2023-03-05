import React from 'react';

import FriendListItem from './FriendListItem';
import style from '../FriendList/FriendList.modul.css';

const FriendList = ({friends}) => {
  if (friends.length === 0) return null;
  return <ul className="friend-list">{friends.map(FriendListItem)}</ul>;
};

export default FriendList;
