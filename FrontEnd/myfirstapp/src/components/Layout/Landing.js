import React, { Component } from "react";
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
            <a href="/register"><button className="create-account-button">Create Account</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;