import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import SideMenu from "../Layout/SideMenu";

import "../Styles/MyAccount.css";

class MyAccount extends Component {
    render() {
        const {security} = this.props;
        console.log(security);
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">
                    <div className="my-account-container">
                        <h1>Welcome {security.user.fullName[0].toUpperCase() 
                            + security.user.fullName.slice(1, security.user.fullName.indexOf(' '))}
                        </h1>
                        <div className="my-account-details">
                            <div className="my-account-details-section">
                                <div className="profile-img">
                                    <img 
                                    className="product-img profile-img" 
                                    src={"http://localhost:8080/api/profileimages/files/"+security.user.id} 
                                    alt={security.user.id}
                                    onError={(e)=>{e.target.src="http://localhost:8080/api/profileimages/files/1"}}/>
                                </div>
                            </div>
                            <div className="my-account-details-section details-summary">
                                <div className="account-details account-section">
                                    <div id="details-main">
                                        <div className="account-field account-summary">
                                            <h4>Account Summary</h4>
                                            <Link to={{pathname: "/update"}}>
                                                <button className="btn btn-primary">Edit</button>
                                            </Link>
                                        </div>
                                        <div className="account-field">
                                            <b><span className="account-label">Full Name</span></b>
                                            <span>
                                                {
                                                security.user.fullName[0].toUpperCase() 
                                                + security.user.fullName.slice(1, security.user.fullName.indexOf(' ')) 
                                                + ' ' 
                                                + security.user.fullName[security.user.fullName.indexOf(' ') + 1].toUpperCase()
                                                + security.user.fullName.slice(security.user.fullName.indexOf(' ') + 2)
                                                }
                                            </span>
                                        </div>
                                        <div className="account-field">
                                            <b><span className="account-label">Email Address</span></b>
                                            <span>{security.user.username}</span>
                                        </div>
                                        <div className="account-field">
                                            <b><span className="account-label">Address</span></b>
                                            <span>{security.user.address}</span>
                                        </div>
                                        <div className="account-field">
                                            <b><span className="account-label">Phone Number</span></b>
                                            <span>{security.user.phone}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="account-type account-section">
                                    <div className="account-field type-field">
                                        <h5>Account Type</h5>
                                        <span>{security.user.accountType[0].toUpperCase() + security.user.accountType.slice(1)}</span>
                                    </div>
                                    <button className="btn btn-primary">Request Upgrade</button>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Deactivate</button>
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