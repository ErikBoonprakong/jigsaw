import React from "react";
import { Link, Redirect } from "react-router-dom";

class ChooseDifficulty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Choose Difficulty</h1>
        <Link
          className="big-link"
          to={{
            pathname: "/playgame",
            state: {
              size: 16,
            },
          }}
        >
          16 Squares
        </Link>
        <span className="small-text">&nbsp;(200 Points)</span>
        <br />
        <br />
        <Link className="big-link" to="/playgame">
          64 Squares
        </Link>
        <span className="small-text">&nbsp;(Coming Soon)</span>
      </div>
    );
  }
}

export default ChooseDifficulty;
