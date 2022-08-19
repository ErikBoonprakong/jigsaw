import React from "react";
import { Link, Redirect } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-navigation">
        <h1>Pick A Game</h1>
        <Link to="/sliderpuzzle">
          <span className="big-link">Slider Puzzle</span>
        </Link>
      </div>
    );
  }
}

export default Home;
