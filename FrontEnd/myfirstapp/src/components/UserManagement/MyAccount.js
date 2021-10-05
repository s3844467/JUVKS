import React, { Component } from 'react';
import { connect } from "react-redux";

import "../Styles/MyAccount.css";

class MyAccount extends Component {
    render() {
        const {security} = this.props;
        return (
            <div className="container">
                <h1>My Account</h1>
                <div className="myaccount-container">
                    <div>
                        <h5>Account Profile</h5>
                        <h5>Update Account</h5>
                        <br></br>
                        <br></br>
                        <h5>My Cart</h5>
                        <h5>Transaction History</h5>
                    </div>
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
                        <div>
                            <h5>Account Type</h5>
                            <span className="mydetails-account-type">Request Upgrade</span>
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
        