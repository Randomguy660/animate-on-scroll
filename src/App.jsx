import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import AnimateOnScroll from "./Components/Pages/animate-on-scroll/AnimateOnScroll.jsx";

function App() {
  return(
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/scroll' element={<AnimateOnScroll />}/>
      <Route path='/' element={<Home />}/>
    </Routes>
  );
}
export default App

/**/