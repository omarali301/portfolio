import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Blog1 from './Component/Home/Blog/Blog1';
import Blog2 from './Component/Home/Blog/Blog2';
import Blog3 from './Component/Home/Blog/Blog3';

function App() {
  return (

    <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/Blog1">
     <Blog1/>
    </Route>
    <Route path="/Blog2">
     <Blog2/>
    </Route>
    <Route path="/Blog3">
     <Blog3/>
    </Route>
    <Route path="/dashboard">
     
    </Route>
  </Switch>

</Router>

  );
}

export default App;
