import React from 'react';

import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <li className={style.item}>
        <span className={`${isOnline ? style.online : style.offline}`}></span>
        <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={style.name}>{name}</p>
      </li>
    </div>
  );
};

export default FriendListItem;
