import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form method="POST">
          <label>
            Email:
            <input type="text" name="user_name" placeholder="your email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="password" />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
export default Login;
