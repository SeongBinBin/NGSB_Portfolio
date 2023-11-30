import React from "react";
import './App.css'

import Header from "./Components/Header";
import Cover from "./Components/Cover";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import AOBO from "./Components/AOBO";
import FitnessHouston from "./Components/FitnessHouston";
import TravelMaker from "./Components/TravelMaker";

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Profile />
      <Projects />
      <AOBO />
      <FitnessHouston />
      <TravelMaker />
    </div>
  );
}

export default App;
