import React from "react";
import { Link, Redirect } from "react-router-dom";
import Networking from "./Networking";
import cookieObj from "./GetCookies";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: cookieObj(),
      user: this.props.userData.user,
      score: this.props.userData.userScore,
    };
    this.Networking = new Networking();
  }

  isLoggedIn() {
    if (this.props.userData.user) {
      return (
        <span className="header-side white-text">
          You are signed in as: <br />
          <span className="user-info">{this.props.userData.user}</span>
          <button
            onClick={async () => {
              await this.Networking.logOut();
              this.props.newCookie(cookieObj());
            }}
          >
            Log Out
          </button>
        </span>
      );
    } else {
      return (
        <span className="header-side white-text">
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/createaccount">
            <button>Sign Up</button>
          </Link>
        </span>
      );
    }
  }

  render() {
    return (
      <>
        <div className="header">
          {this.props.userData.user ? (
            <span className="header-side white-text">
              You have: <br />{" "}
              <span className="user-info">{this.props.userData.userScore}</span>
              Points
            </span>
          ) : (
            <span className="header-side white-text">
              Sign in to keep track of your score
            </span>
          )}
          <Link id="title" to="/home">
            Puzzle
          </Link>
          <span>{this.isLoggedIn()}</span>
        </div>
      </>
    );
  }
}

export default Header;
