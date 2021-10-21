import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import SideMenu from "../Layout/SideMenu";

import "../Styles/MyAccount.css";

class MyAccount extends Component {
    render() {
        const {security} = this.props;
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">
                    <div className="my-account-container">
                        <h1>Welcome {security.user.fullName}</h1>
                        <div className="myaccount-details">
                            <div>
                                <div>
                                    <h5>Full Name</h5>
                                    <span>{security.user.fullName}</span>
                                </div>
                                <div>
                                    <h5>Email Address</h5>
                                    <span>{security.user.username}</span>
                                </div>
                                <div>
                                    <h5>Password</h5>
                                    <span>Filler Password</span>
                                </div>
                                <Link to={{pathname: "/update"}}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                            </div>
                            <div>
                                <div>
                                    <h5>Account Type</h5>
                                    <span>{security.user.accountType}</span>
                                    <button className="btn btn-primary">Request Upgrade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        security: state.security
    };
  };

export default connect(mapStateToProps, {
})(MyAccount);
  
// export default Dashboard;
        