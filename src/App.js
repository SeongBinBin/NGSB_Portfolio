// import React, { useState, useEffect } from "react";
import './App.css'

import Header from "./Components/Header";
import Cover from "./Components/Cover";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import AOBO from "./Components/AOBO";
import FitnessHouston from "./Components/FitnessHouston";
import TravelMaker from "./Components/TravelMaker";
import Careers from "./Components/Careers";

function App() {
  // const [currentComponent, setCurrentComponent] = useState(0)

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const deltaY = event.deltaY

  //     if (deltaY > 0 && currentComponent < 6) { // 5는 총 컴포넌트 개수 (0부터 시작)
  //       setCurrentComponent(prev => prev + 1)
  //     } else if (deltaY < 0 && currentComponent > 0) {
  //       setCurrentComponent(prev => prev - 1)
  //     }
  //   }

  //   window.addEventListener('wheel', handleScroll)

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll)
  //   }
  // }, [currentComponent])

  // useEffect(() => {
  //   const yOffset = window.innerHeight * currentComponent
  //   window.scrollTo({
  //     top: yOffset,
  //     behavior: 'smooth'
  //   });
  // }, [currentComponent])

  return (
    <div className="App">
      <Header />
      <div style={{height: '100vh', backgroundColor: '#EFEFEF'}}><Cover /></div>
      <div style={{height: '100vh', backgroundColor: '#EDEDE9'}}><Profile /></div>
      <div style={{height: '100vh', backgroundColor: '#EDEDE9'}}><Careers /></div>
      <div style={{height: '100vh', backgroundColor: '#EDEDE9'}}><Projects /></div>
      <div style={{height: '100vh', backgroundColor: '#F5EBE0'}}><AOBO /></div>
      <div style={{height: '100vh', backgroundColor: '#E6D9CF'}}><FitnessHouston /></div>
      <div style={{height: '100vh', backgroundColor: '#E3D5CA'}}><TravelMaker /></div>
    </div>
  );
}

export default App;
