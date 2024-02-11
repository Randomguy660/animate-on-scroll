import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import AnimateOnScroll from "./Components/Pages/animate-on-scroll/AnimateOnScroll.jsx";

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/animate-on-scroll' element={<AnimateOnScroll />}/>
      </Routes>
    </Router>
  );
}
export default App
