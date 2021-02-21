import s from "./App.module.css";
import Profile from "./Components/Profile/Profile.js";
import Stats from "./Components/Stats/Stats.js";
import statsData from "./Components/Stats/stats.json";
import userData from "./Components/Profile/user.json";
import FriendList from "./Components/Friend-list/Friend-list.js";
import TransactionHistory from "./Components/Transactions/Transactions";
import transactionData from "./Components/Transactions/transaction.json";
function App() {
  return (
    <>
      <div className={s.profile__container}>
        <Profile data={userData} />
        <Stats stats={statsData} title="Upload stats" />
        <FriendList />
      </div>
      <TransactionHistory transactionData={transactionData} />
    </>
  );
}

export default App;
