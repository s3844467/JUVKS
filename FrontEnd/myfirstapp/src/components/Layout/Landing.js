import React, { Component } from "react";
import { Link } from "react-router-dom";
import '..//Styles/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h1>Welcome to Bookeroo</h1>
          <p className="slogan">Fill your mind with happy thoughts. <span className="advert">Join the Book Club now!</span></p>
          <hr></hr>
          <div>
            <button className="create-account-button"><a href="/register">Create Account</a></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;