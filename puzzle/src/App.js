import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home";
import HowToPlay from "./Components/HowToPlay";
import PlayGame from "./Components/PlayGame";
import ChooseDifficulty from "./Components/ChooseDifficulty";
import LogIn from "./Components/LogIn";
import CreateAccount from "./Components/CreateAccount";
import Header from "./Components/Header";
import cookieObj from "./Components/GetCookies";
import SliderPuzzle from "./Components/SliderPuzzle";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cookie: cookieObj(),
    };
  }

  getCookie(newCookie) {
    this.setState({ cookie: newCookie });
  }

  render() {
    return (
      <>
        <Header
          newCookie={this.getCookie.bind(this)}
          userData={this.state.cookie}
        ></Header>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
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
              <PlayGame
                userData={this.state.cookie}
                newCookie={this.getCookie.bind(this)}
              />
            </Route>
            <Route path="/login">
              <LogIn newCookie={this.getCookie.bind(this)} />
            </Route>
            <Route path="/createaccount">
              <CreateAccount newCookie={this.getCookie.bind(this)} />
            </Route>
            <Route path="/sliderpuzzle">
              <SliderPuzzle newCookie={this.getCookie.bind(this)} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
