import React from "react";
import { Link, Redirect } from "react-router-dom";

class SliderPuzzle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-navigation">
        <h1>Slider Puzzle</h1>
        <div className="menu">
          <Link to="/howtoplay" className="menu-item">
            <span className="big-link">How To Play</span>
          </Link>
          <Link to="/choosedifficulty" className="menu-item">
            <span className="big-link">Play Game</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default SliderPuzzle;
