import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./home.css";
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

  loggedIn() {
    if (this.props.userData.user) {
      return (
        <span className="rhs">
          You are signed in as: <br />
          <span className="username">{this.props.userData.user}</span>
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
        <span className="rhs">
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
            <span className="rhs">
              You have: <br />{" "}
              <span className="username">{this.props.userData.userScore}</span>
              Points
            </span>
          ) : (
            <span className="rhs">Sign in to keep track of your score</span>
          )}
          <Link id="title" to="/home">
            Puzzle
          </Link>
          <span>{this.loggedIn()}</span>
        </div>
      </>
    );
  }
}

export default Header;
