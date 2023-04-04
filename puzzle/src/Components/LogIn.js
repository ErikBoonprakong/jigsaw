import React from "react";
import { Link, Redirect } from "react-router-dom";
import cookieObj from "./GetCookies";
import Networking from "./Networking";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      redirect: false,
      valid: true,
      showPassword: false,
      cookies: this.props.newCookie,
    };
    this.Networking = new Networking();
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await this.Networking.postLogin(
      this.state.username,
      this.state.password
    );
    this.setState({ cookies: cookieObj() });
    this.props.newCookie(cookieObj());
    if (this.state.cookies.user) {
      this.setState({ redirect: true, valid: true, error: "" });
    } else {
      // Error messages are set in the backend, retrieved from login post request.
      this.setState({ valid: false, error: response.message });
    }
  };

  showPassword(e) {
    //If the state of showPassword is true, the input type in the render function is changed from password to text with a ternary operator.
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <div className="home-navigation">
        {this.state.redirect ? (
          <Redirect to="/home" />
        ) : (
          <div>
            <h1>Log In</h1>
            <p className="pre-text white-text">Not a member yet? <Link to="/createaccount">Sign up</Link>!</p>
            <form onSubmit={this.handleSubmit} className="register">
              <label for="username" className="input-label white-text">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => this.handleChange(e)}
                className="input-field"
              />
              <label for="password" className="input-label white-text">
                Password
              </label>
              <input
                type={this.state.showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => this.handleChange(e)}
                className="input-field"
              />
              <label className="white-text" for="showPassword">
                Show Password{"  "}
                <input
                  id="showPassword"
                  type="checkbox"
                  onChange={this.showPassword.bind(this)}
                ></input>
              </label>
              <br />
              <input
                type="submit"
                value="login"
                className="input-field"
              ></input>
              <h4>{this.state.error}</h4>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default LogIn;
