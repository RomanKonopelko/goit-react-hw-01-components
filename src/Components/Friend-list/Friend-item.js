import PropTypes from "prop-types";
import s from "./friend-list.module.css";

const FriendItem = ({ friendData }) => {
  return friendData.map((friend) => {
    return (
      <li key={friend.id} className={s.item}>
        {friend.isOnline ? <span className={s.active}></span> : <span className={s.offline}></span>}
        <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p className="name">{friend.name}</p>
      </li>
    );
  });
};

FriendItem.prototypes = {
  friendData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendItem;
