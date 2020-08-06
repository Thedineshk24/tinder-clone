import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <h2 className="text text-info"> tinder-clone </h2>
      <Header />
      {/* {------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------} */}
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/profile">
            <h1>profile</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
