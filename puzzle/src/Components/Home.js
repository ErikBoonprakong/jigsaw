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
        <h1>Pick A Game</h1>
        <Link to="/sliderpuzzle">
          <h3>Slider Puzzle</h3>
        </Link>
        {/* <Link to="/choosedifficulty">
          <h3>Play Game</h3>
        </Link> */}
      </div>
    );
  }
}

export default Home;
