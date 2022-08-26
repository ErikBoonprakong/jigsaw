import React from "react";
import { Link, Redirect } from "react-router-dom";

class HowToSodoku extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="description-page">
        <h1>How To Play</h1>
        <div className="white-text">
          Sudoku is a puzzle based on a small number of very simple rules:
          <ul>
            <li>Every square has to contain a single number</li>
            <li>Only the numbers from 1 through to 9 can be used</li>
            <li>Each 3×3 box can only contain each number from 1 to 9 once</li>
            <li>
              Each vertical column can only contain each number from 1 to 9 once
            </li>
            <li>
              Each horizontal row can only contain each number from 1 to 9 once
            </li>
          </ul>
          Once the puzzle is solved, this means that every row, column, and 3×3
          box will contain every number from 1 to 9 exactly once.
        </div>
        <p className="white-text">
          To put a number in a space click on the space you want and then click
          the number you want from the keypad on the right of the board.
        </p>
        <div>
          <Link to="/sodoku">
            <span className="little-link">Back</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default HowToSodoku;
