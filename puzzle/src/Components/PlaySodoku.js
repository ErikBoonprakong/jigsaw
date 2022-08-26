import React from "react";
import { Link, Redirect } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

class PlaySodoku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCell: [],
      contents: [
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      ],
    };
  }

  componentDidMount = () => {
    this.populateBoard();
  };

  initialiseKeypad = () => {
    return (
      <tbody>
        <tr>
          <td>
            <button onClick={() => this.printNumber("1")}>1</button>
          </td>
          <td>
            <button onClick={() => this.printNumber("2")}>2</button>
          </td>
          <td>
            <button onClick={() => this.printNumber("3")}>3</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => this.printNumber("4")}>4</button>
          </td>
          <td>
            <button onClick={() => this.printNumber("5")}>5</button>
          </td>
          <td>
            <button onClick={() => this.printNumber("6")}>6</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => this.printNumber("7")}>7</button>
          </td>
          <td>
            <button onClick={() => this.printNumber("8")}>8</button>
          </td>
          <td>
            <button onClick={() => this.printNumber("9")}>9</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => this.printNumber("0")}>0</button>
          </td>
          <td>
            <button onClick={() => this.printNumber("")}>Delete</button>
          </td>
        </tr>
      </tbody>
    );
  };

  initialiseTable = () => {
    return (
      <tbody className="sodoku-table-body">
        <tr>
          <td className="sodoku-cell" onClick={() => this.inputNumber(0, 0, 0)}>
            {this.state.contents[0][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(0, 0, 1)}>
            {this.state.contents[0][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(0, 0, 2)}
          >
            {this.state.contents[0][0][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(1, 0, 0)}>
            {this.state.contents[1][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(1, 0, 1)}>
            {this.state.contents[1][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(1, 0, 2)}
          >
            {this.state.contents[1][0][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(2, 0, 0)}>
            {this.state.contents[2][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(2, 0, 1)}>
            {this.state.contents[2][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(2, 0, 2)}
          >
            {this.state.contents[2][0][2]}
          </td>
        </tr>
        <tr>
          <td className="sodoku-cell" onClick={() => this.inputNumber(0, 1, 0)}>
            {this.state.contents[0][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(0, 1, 1)}>
            {this.state.contents[0][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(0, 1, 2)}
          >
            {this.state.contents[0][1][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(1, 1, 0)}>
            {this.state.contents[1][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(1, 1, 1)}>
            {this.state.contents[1][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(1, 1, 2)}
          >
            {this.state.contents[1][1][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(2, 1, 0)}>
            {this.state.contents[2][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(2, 1, 1)}>
            {this.state.contents[2][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(2, 1, 2)}
          >
            {this.state.contents[2][1][2]}
          </td>
        </tr>
        <tr>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(0, 2, 0)}
          >
            {this.state.contents[0][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(0, 2, 1)}
          >
            {this.state.contents[0][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(0, 2, 2)}
          >
            {this.state.contents[0][2][2]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(1, 2, 0)}
          >
            {this.state.contents[1][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(1, 2, 1)}
          >
            {this.state.contents[1][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(1, 2, 2)}
          >
            {this.state.contents[1][2][2]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(2, 2, 0)}
          >
            {this.state.contents[2][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(2, 2, 1)}
          >
            {this.state.contents[2][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(2, 2, 2)}
          >
            {this.state.contents[2][2][2]}
          </td>
        </tr>
        <tr>
          <td className="sodoku-cell" onClick={() => this.inputNumber(3, 0, 0)}>
            {this.state.contents[3][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(3, 0, 1)}>
            {this.state.contents[3][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(3, 0, 2)}
          >
            {this.state.contents[3][0][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(4, 0, 0)}>
            {this.state.contents[4][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(4, 0, 1)}>
            {this.state.contents[4][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(4, 0, 2)}
          >
            {this.state.contents[4][0][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(5, 0, 0)}>
            {this.state.contents[5][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(5, 0, 1)}>
            {this.state.contents[5][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(5, 0, 2)}
          >
            {this.state.contents[5][0][2]}
          </td>
        </tr>
        <tr>
          <td className="sodoku-cell" onClick={() => this.inputNumber(3, 1, 0)}>
            {this.state.contents[3][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(3, 1, 1)}>
            {this.state.contents[3][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(3, 1, 2)}
          >
            {this.state.contents[3][1][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(4, 1, 0)}>
            {this.state.contents[4][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(4, 1, 1)}>
            {this.state.contents[4][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(4, 1, 2)}
          >
            {this.state.contents[4][1][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(5, 1, 0)}>
            {this.state.contents[5][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(5, 1, 1)}>
            {this.state.contents[5][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(5, 1, 2)}
          >
            {this.state.contents[5][1][2]}
          </td>
        </tr>
        <tr>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(3, 2, 0)}
          >
            {this.state.contents[3][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(3, 2, 1)}
          >
            {this.state.contents[3][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(3, 2, 2)}
          >
            {this.state.contents[3][2][2]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(4, 2, 0)}
          >
            {this.state.contents[4][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(4, 2, 1)}
          >
            {this.state.contents[4][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(4, 2, 2)}
          >
            {this.state.contents[4][2][2]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(5, 2, 0)}
          >
            {this.state.contents[5][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(5, 2, 1)}
          >
            {this.state.contents[5][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(5, 2, 2)}
          >
            {this.state.contents[5][2][2]}
          </td>
        </tr>
        <tr>
          <td className="sodoku-cell" onClick={() => this.inputNumber(6, 0, 0)}>
            {this.state.contents[6][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(6, 0, 1)}>
            {this.state.contents[6][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(6, 0, 2)}
          >
            {this.state.contents[6][0][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(7, 0, 0)}>
            {this.state.contents[7][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(7, 0, 1)}>
            {this.state.contents[7][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(7, 0, 2)}
          >
            {this.state.contents[7][0][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(8, 0, 0)}>
            {this.state.contents[8][0][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(8, 0, 1)}>
            {this.state.contents[8][0][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(8, 0, 2)}
          >
            {this.state.contents[8][0][2]}
          </td>
        </tr>
        <tr>
          <td className="sodoku-cell" onClick={() => this.inputNumber(6, 1, 0)}>
            {this.state.contents[6][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(6, 1, 1)}>
            {this.state.contents[6][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(6, 1, 2)}
          >
            {this.state.contents[6][1][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(7, 1, 0)}>
            {this.state.contents[7][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(7, 1, 1)}>
            {this.state.contents[7][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(7, 1, 2)}
          >
            {this.state.contents[7][1][2]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(8, 1, 0)}>
            {this.state.contents[8][1][0]}
          </td>
          <td className="sodoku-cell" onClick={() => this.inputNumber(8, 1, 1)}>
            {this.state.contents[8][1][1]}
          </td>
          <td
            className="sodoku-cell right-box"
            onClick={() => this.inputNumber(8, 1, 2)}
          >
            {this.state.contents[8][1][2]}
          </td>
        </tr>
        <tr>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(6, 2, 0)}
          >
            {this.state.contents[6][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(6, 2, 1)}
          >
            {this.state.contents[6][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(6, 2, 2)}
          >
            {this.state.contents[6][2][2]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(7, 2, 0)}
          >
            {this.state.contents[7][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(7, 2, 1)}
          >
            {this.state.contents[7][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(7, 2, 2)}
          >
            {this.state.contents[7][2][2]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(8, 2, 0)}
          >
            {this.state.contents[8][2][0]}
          </td>
          <td
            className="sodoku-cell bottom-box"
            onClick={() => this.inputNumber(8, 2, 1)}
          >
            {this.state.contents[8][2][1]}
          </td>
          <td
            className="sodoku-cell right-box bottom-box"
            onClick={() => this.inputNumber(8, 2, 2)}
          >
            {this.state.contents[8][2][2]}
          </td>
        </tr>
      </tbody>
    );
  };

  populateBoard = () => {
    let board = this.state.contents;
    let count = 0;
    while (count <= 21) {
      let box = Math.floor(Math.random() * 9);
      let row = Math.floor(Math.random() * 3);
      let column = Math.floor(Math.random() * 3);
      let number = Math.floor(Math.random() * 10).toString();
      let originalNumber = board[box][row][column];
      board[box][row][column] = number;
      console.log(board);
      console.log(
        `Box: ${box} (${column + 1}, ${3 - row}) \n Number: ${number}`
      );
      console.log(this.validateCell(board, box, row, column, number));
      if (this.validateCell(board, box, row, column, number)) {
        count++;
      } else {
        board[box][row][column] = originalNumber;
      }
    }
    this.setState({ contents: board });
  };

  inputNumber = (box, row, column) => {
    this.setState({ selectedCell: [box, row, column] });
  };

  printNumber = (number) => {
    if (this.state.selectedCell.length === 3) {
      let updatedContents = this.state.contents;
      updatedContents[this.state.selectedCell[0]][this.state.selectedCell[1]][
        this.state.selectedCell[2]
      ] = number;
      this.setState({ contents: updatedContents });
      console.log(
        this.validateCell(
          this.state.contents,
          this.state.selectedCell[0],
          this.state.selectedCell[1],
          this.state.selectedCell[2],
          number
        )
      );
    }
  };

  validateCell = (board, box, row, column, number) => {
    const boxNumbers =
      board[box][0].join("") + board[box][1].join("") + board[box][2].join("");
    const rowNumbers = [];
    const columnNumbers = [];
    if (box === 0 || box === 3 || box === 6) {
      for (let i = 0; i <= 2; i++) {
        rowNumbers.push(board[box][row][i]);
        rowNumbers.push(board[box + 1][row][i]);
        rowNumbers.push(board[box + 2][row][i]);
      }
    } else if (box === 1 || box === 4 || box === 7) {
      for (let i = 0; i <= 2; i++) {
        rowNumbers.push(board[box - 1][row][i]);
        rowNumbers.push(board[box][row][i]);
        rowNumbers.push(board[box + 1][row][i]);
      }
    } else if (box === 2 || box === 5 || box === 8) {
      for (let i = 0; i <= 2; i++) {
        rowNumbers.push(board[box - 2][row][i]);
        rowNumbers.push(board[box - 1][row][i]);
        rowNumbers.push(board[box][row][i]);
      }
    }
    if (box === 0 || box === 1 || box === 2) {
      for (let j = 0; j <= 2; j++) {
        columnNumbers.push(board[box][j][column]);
        columnNumbers.push(board[box + 3][j][column]);
        columnNumbers.push(board[box + 6][j][column]);
      }
    } else if (box === 3 || box === 4 || box === 5) {
      for (let j = 0; j <= 2; j++) {
        columnNumbers.push(board[box - 3][j][column]);
        columnNumbers.push(board[box][j][column]);
        columnNumbers.push(board[box + 3][j][column]);
      }
    } else if (box === 6 || box === 7 || box === 8) {
      for (let j = 0; j <= 2; j++) {
        columnNumbers.push(board[box - 6][j][column]);
        columnNumbers.push(board[box - 3][j][column]);
        columnNumbers.push(board[box][j][column]);
      }
    }
    const allNumbers = [
      ...(boxNumbers + rowNumbers.join("") + columnNumbers.join("")),
    ];
    console.log(`box numbers = ${boxNumbers}`);
    console.log(`row numbers = ${rowNumbers}`);
    console.log(`column numbers = ${columnNumbers}`);
    allNumbers.sort();
    console.log(`all numbers = ${allNumbers}`);
    allNumbers.splice(allNumbers.indexOf(number), 3);
    console.log(`all numbers = ${allNumbers}`);
    return !allNumbers.includes(number);
  };

  render() {
    return (
      <div className="game-body">
        <h1>Play Sodoku</h1>
        <div className="sodoku-board-container">
          <table className="sodoku-table">{this.initialiseTable()}</table>
          <table>{this.initialiseKeypad()}</table>
        </div>
        <div>
          <Link to="/sodoku">
            <h2 className="little-link">Back</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default PlaySodoku;
