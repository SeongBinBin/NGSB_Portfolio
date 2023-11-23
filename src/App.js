import React from "react";
import './App.css'
import Profile from "./Components/Profile";
import AOBO from "./Components/AOBO";
import FitnessHouston from "./Components/FitnessHouston";
import TravelMaker from "./Components/TravelMaker";

function App() {
  return (
    <div className="App">
      <Profile />
      <AOBO />
      <FitnessHouston />
      <TravelMaker />
    </div>
  );
}

export default App;
