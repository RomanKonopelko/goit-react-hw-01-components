import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Profile from "./Components/Profile/Profile.js";
import Stats from "./Components/Stats/Stats.js";
import userData from "./user.json";
function App() {
  return (
    <>
      <Profile data={userData} />
      <Stats />
    </>
  );
}

export default App;
