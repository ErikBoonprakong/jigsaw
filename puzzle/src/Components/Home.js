import React from "react";
import { Link, Redirect } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <h1>Pick A Game</h1>
        <Link to="/sliderpuzzle" className="menu-item">
          <span className="big-link">Slider Puzzle</span>
        </Link>
        <Link to="/sodoku" className="menu-item">
          <span className="big-link">Sodoku (UNFINISHED)</span>
        </Link>
      </div>
    );
  }
}

export default Home;
