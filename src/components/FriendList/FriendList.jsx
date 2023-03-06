import React from 'react';

import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({friends}) => {
  if (friends.length === 0) return null
  return <ul className={style.friendLlist}>{friends.map(FriendListItem)}</ul>;
};

export default FriendList;
