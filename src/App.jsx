import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import AnimateOnScroll from "./Components/Pages/animate-on-scroll/AnimateOnScroll.jsx";
import Header from './Components/Header/Full/Header.jsx';

function App() {
  return(
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/scroll' element={<AnimateOnScroll />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}
export default App

/**/