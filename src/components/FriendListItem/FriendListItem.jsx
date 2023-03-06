import React from 'react';

import style from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
        <li className={style.item} key={ id }>
        <span className={`${isOnline ? style.online : style.offline}`}></span>
        <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={style.name}>{name}</p>
      </li>
  );
};

export default FriendListItem;
