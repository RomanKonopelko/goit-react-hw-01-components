import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Profile from "./Components/Profile/Profile.js";
import Stats from "./Components/Stats/Stats.js";
import statsData from "./Components/Stats/stats.json";
import userData from "./Components/Profile/user.json";
function App() {
  return (
    <>
      <Profile data={userData} />
      <Stats stats={statsData} title="Upload stats" />
    </>
  );
}

export default App;
