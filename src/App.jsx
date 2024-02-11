import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import AnimateOnScroll from "./Components/Pages/animate-on-scroll/AnimateOnScroll.jsx";

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/animate-on-scroll' component={AnimateOnScroll}/>
      </Switch>
    </Router>
  );
}
export default App
