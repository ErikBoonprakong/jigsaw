import React from "react";
import { Link, Redirect } from "react-router-dom";

class Sodoku extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-navigation">
        <h1>Sodoku</h1>
        <div className="menu">
          <Link to="/howtosodoku" className="menu-item">
            <span className="big-link">How To Play</span>
          </Link>
          <Link to="/playsodoku" className="menu-item">
            <span className="big-link">Play Game</span>
          </Link>
          <Link to="/home">
            <span className="little-link">Back</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sodoku;
