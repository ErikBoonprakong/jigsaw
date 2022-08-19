import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./how-to-play.css";

class HowToPlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="how-to-play">
        <h1>How To Play</h1>
        <p className="description">
          The aim of this game is to reorder the squares so that the photo is
          complete, with only the bottom-right square being blank. Click a
          square adjacent to a blank square to move it into the blank space.
        </p>
        <div>
          <Link to="/sliderpuzzle">
            <h2>Back</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default HowToPlay;
