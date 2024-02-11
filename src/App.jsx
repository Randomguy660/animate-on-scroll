import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import AnimateOnScroll from "./Components/Pages/animate-on-scroll/AnimateOnScroll.jsx";

function App() {
  return(
    <Router>
      <Switch>
        <Router exact path='/' component={Home}/>
        <Router path='/home' component={Home}/>
        <Router path='/animate-on-scroll' component={AnimateOnScroll}/>
      </Switch>
    </Router>
  );
}
export default App
