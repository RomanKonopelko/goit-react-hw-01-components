import React from "react";
import avatar from "./avatar.jpg";
import s from "./Profile.module.css";

const Profile = ({ data }) => {
  const { name, tag, location, stats } = data;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stats_item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.stats_item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.stats_item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
