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
          to={{
            pathname: "/playgame",
            state: {
              size: 16,
            },
          }}
        >
          <h3>16 Squares</h3>
        </Link>
        <Link to="/playgame">
          <h3>64 Squares</h3>
        </Link>
      </div>
    );
  }
}

export default ChooseDifficulty;
