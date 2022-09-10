import React, { Component } from "react";
export default class Forgot extends Component {
  render() {
    return (
      <form>
        <h3>Reset your password</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Send link
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-in">Back to sign in</a>
        </p>
      </form>
    );
  }
}
