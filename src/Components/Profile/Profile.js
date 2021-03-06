import PropTypes from "prop-types";
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
        {stats &&
          stats.map((stat, index) => {
            console.log(stat);
            const newStat = Object.entries(stat);
            console.log(newStat);
            return (
              <li className={s.stats_item} key={index}>
                <span className={s.label}>{newStat[0][0]}</span>
                <span className={s.quantity}>{newStat[0][1] ? newStat[0][1] : 0}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
export default Profile;
