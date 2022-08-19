import React from "react";
import { Link, Redirect } from "react-router-dom";
import cookieObj from "./GetCookies";
import Networking from "./Networking";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm: "",
      error: "",
      redirect: false,
      showPassword: false,
      cookies: cookieObj(),
    };
    this.Networking = new Networking();
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { json, status } = await this.Networking.createUser(
      this.state.username,
      this.state.password,
      this.state.confirm
    );
    if (status === 200) {
      //Redirects to login page if the user has created an account correctly.
      this.setState({ valid: true, redirect: true, error: "" });
      this.props.newCookie(this.state.cookies);
    } else if (status === 400) {
      //Retrieves error message from json if post request has return a 400 Bad Response.
      this.setState({
        valid: false,
        error: json.message,
      });
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
          <Redirect to="/login" />
        ) : (
          <div>
            <h1>Sign Up</h1>
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
              <label for="confirm" className="input-label white-text">
                Confirm Password
              </label>
              <input
                type={this.state.showPassword ? "text" : "password"}
                name="confirm"
                id="confirm"
                onChange={(e) => this.handleChange(e)}
                className="input-field"
              />
              <label className="white-text">
                Show Password
                <input
                  type="checkbox"
                  onChange={this.showPassword.bind(this)}
                ></input>
              </label>
              <br />
              <input
                type="submit"
                value="signUp"
                className="input-field"
              ></input>
              <br />
              <h4>{this.state.error}</h4>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default CreateAccount;
