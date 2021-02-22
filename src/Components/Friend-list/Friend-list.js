import FriendItem from "./Friend-item";
import PropTypes from "prop-types";
import s from "./friend-list.module.css";

const FriendList = ({ friendData }) => (
  <div className={s.friends__section}>
    <h2>Your friends</h2>
    <ul className={s.friend__list}>
      {friendData.map((friend) => {
        return <FriendItem key={friend.id} friend={friend} />;
      })}
    </ul>
  </div>
);

FriendList.prototypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
