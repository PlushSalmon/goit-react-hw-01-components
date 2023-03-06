import React from 'react';
import style from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location"> {location}</p>
      </div>

      <ul className={style.stats}>
        <li className="stats-item">
          <span className={style.label}>Followers</span>
          <span className={style.quantity}> {stats.followers}</span>
        </li>
        <li className="stats-item">
          <span className={style.label}>Views</span>
          <span className={style.quantity}> {stats.views}</span>
        </li>
        <li className="stats-item">
          <span className={style.label}>Likes</span>
          <span className={style.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile