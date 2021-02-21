import FriendItem from "./Friend-item";
import friendData from "./friend-list.json";
import s from "./friend-list.module.css";

const FriendList = () => (
  <div className={s.friends__section}>
    <h2>Your friends</h2>
    <ul className={s.friend__list}>
      <FriendItem friendData={friendData} />
    </ul>
  </div>
);

export default FriendList;
