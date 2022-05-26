import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home";
import HowToPlay from "./Components/HowToPlay";
import PlayGame from "./Components/PlayGame";
import ChooseDifficulty from "./Components/ChooseDifficulty";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/howtoplay">
            <HowToPlay />
          </Route>
          <Route path="/choosedifficulty">
            <ChooseDifficulty />
          </Route>
          <Route path="/playgame">
            <PlayGame />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
