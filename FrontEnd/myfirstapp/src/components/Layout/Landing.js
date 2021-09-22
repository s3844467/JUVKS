import React, { Component } from "react";
import { connect } from "react-redux";
import '..//Styles/Landing.css';

class Landing extends Component {
  constructor(props){
      super(props)
  }
  render() {
    const {security} = this.props;
    return (
      <div>
        <div className="content">
          <h1>Welcome to Bookeroo</h1>
          <p className="slogan">Fill your mind with happy thoughts. <span className="advert">Join the Book Club now!</span></p>
          <hr></hr>
          <div>
            {security.validToken ?
            <>
              <a href="/dashboard"><button className="create-account-button">Dashboard</button></a>
            </>
            :
            <>
              <a href="/register"><button className="create-account-button">Create Account</button></a>
            </>
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      security: state.security,
  };
};
export default  connect(mapStateToProps)(Landing);