import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./play.css";

class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winMsg: "",
      contents: [
        " ",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ],
      arrowImg: "",
    };
  }

  componentDidMount = () => {
    const contentsCopy = this.state.contents;
    const contentsState = [];
    while (contentsState.length < 16) {
      let randValue =
        contentsCopy[Math.floor(Math.random() * contentsCopy.length)];
      contentsState.push(randValue);
      contentsCopy.splice(contentsCopy.indexOf(randValue), 1);
    }
    this.setState({ contents: contentsState });
  };

  initialiseTable = () => {
    return (
      <tbody className="puzzleTable">
        <tr>
          <td
            className={`puzzle-cell cell${this.state.contents[0]}`}
            style={{
              backgroundImage:
                this.state.contents[0] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[0])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[0]}
          </td>
          <td
            className={`puzzle-cell arrow-cell cell${this.state.contents[1]}`}
            style={{
              backgroundImage:
                this.state.contents[1] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[1])
                    }.jpg)`
                  : "none",
            }}
            // onMouseEnter={() => {
            //   if (this.state.contents[1 + 1] === " ") {
            //     this.setState({ arrowImg: "" });
            //   }
            // }}
            // onMouseLeave={() => {
            //   this.setState({ arrowImg: "" });
            // }}
          >
            {this.state.contents[1]}
            {/* <img src="arrowRight.png" className="arrow-overlay" /> */}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[2]}`}
            style={{
              backgroundImage:
                this.state.contents[2] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[2])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[2]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[3]}`}
            style={{
              backgroundImage:
                this.state.contents[3] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[3])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[3]}
          </td>
        </tr>
        <tr>
          <td
            className={`puzzle-cell cell${this.state.contents[4]}`}
            style={{
              backgroundImage:
                this.state.contents[4] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[4])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[4]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[5]}`}
            style={{
              backgroundImage:
                this.state.contents[5] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[5])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[5]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[6]}`}
            style={{
              backgroundImage:
                this.state.contents[6] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[6])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[6]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[7]}`}
            style={{
              backgroundImage:
                this.state.contents[7] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[7])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[7]}
          </td>
        </tr>
        <tr>
          <td
            className={`puzzle-cell cell${this.state.contents[8]}`}
            style={{
              backgroundImage:
                this.state.contents[8] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[8])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[8]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[9]}`}
            style={{
              backgroundImage:
                this.state.contents[9] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[9])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[9]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[10]}`}
            style={{
              backgroundImage:
                this.state.contents[10] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[10])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[10]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[11]}`}
            style={{
              backgroundImage:
                this.state.contents[11] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[11])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[11]}
          </td>
        </tr>
        <tr>
          <td
            className={`puzzle-cell cell${this.state.contents[12]}`}
            style={{
              backgroundImage:
                this.state.contents[12] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[12])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[12]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[13]}`}
            style={{
              backgroundImage:
                this.state.contents[13] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[13])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[13]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[14]}`}
            style={{
              backgroundImage:
                this.state.contents[14] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[14])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[14]}
          </td>
          <td
            className={`puzzle-cell cell${this.state.contents[15]}`}
            style={{
              backgroundImage:
                this.state.contents[15] !== " "
                  ? `url(/backgroundErikOne/${
                      17 - parseInt(this.state.contents[15])
                    }.jpg)`
                  : "none",
            }}
          >
            {this.state.contents[15]}
          </td>
        </tr>
      </tbody>
    );
  };

  handleClick = (e) => {
    if (
      this.state.contents[
        (e.target.parentNode.rowIndex + 1) * 4 + (e.target.cellIndex + 1) - 4
      ] === " " ||
      this.state.contents[
        (e.target.parentNode.rowIndex + 1) * 4 + (e.target.cellIndex + 1) - 6
      ] === " " ||
      this.state.contents[
        (e.target.parentNode.rowIndex + 1) * 4 + (e.target.cellIndex + 1) - 1
      ] === " " ||
      this.state.contents[
        (e.target.parentNode.rowIndex + 1) * 4 + (e.target.cellIndex + 1) - 9
      ] === " "
    ) {
      let tempContents = this.state.contents;
      tempContents[tempContents.indexOf(" ")] = e.target.textContent;
      tempContents[
        (e.target.parentNode.rowIndex + 1) * 4 + (e.target.cellIndex + 1) - 5
      ] = " ";
      this.setState({ contents: tempContents });
      console.log("tempContents: \n" + tempContents);
      console.log(this.state.contents);
      if (tempContents.join("") === "123456789101112131415 ") {
        console.log("yes");
        this.setState({
          winMsg: "Congratulations for solving the puzzle! Enjoy the view!",
        });
      } else {
        this.setState({ winMsg: "" });
      }
    }

    // UNCOMMENT CODE FOR QUICK SOLVE (CLICK BLANK SQUARE TO SOLVE)
    // if (e.target.textContent === " ") {
    //   this.setState({
    //     contents: [
    //       "1",
    //       "2",
    //       "3",
    //       "4",
    //       "5",
    //       "6",
    //       "7",
    //       "8",
    //       "9",
    //       "10",
    //       "11",
    //       "12",
    //       "13",
    //       "14",
    //       "15",
    //       " ",
    //     ],
    //   });
    // }
  };

  render() {
    return (
      <div className="play-game-wrapper">
        <h1>Play Game</h1>
        <div>
          <span className="message">{this.state.winMsg}</span>
        </div>
        <br></br>
        <div>
          <table
            cellspacing="0"
            onClick={(e) => this.handleClick(e)}
            className="puzzle-table"
          >
            {this.initialiseTable()}
          </table>
        </div>
        <div>
          <Link to="/home">
            <h2>Back To Home Page</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default PlayGame;
