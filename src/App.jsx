import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import AnimateOnScroll from "./Components/Pages/animate-on-scroll/AnimateOnScroll.jsx";

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/animate-on-scroll' element={<AnimateOnScroll />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}
export default App

/**/