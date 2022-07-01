import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-navigation">
        <h1>Puzzle Game</h1>
        <Link to="/howtoplay">
          <h3>How To Play</h3>
        </Link>
        <Link to="/choosedifficulty">
          <h3>Play Game</h3>
        </Link>
      </div>
    );
  }
}

export default Home;
