import React, { Component } from 'react';
import { getValidatedUsers, getPendingUsers, getBLockedUsers, blockUser, unblockUser, validateUser } from "../../actions/adminAction";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "../Styles/Cart.css";

class UserManagement extends Component {
    constructor(props) {
        super(props);

        this.onCheckOut = this.onCheckOut.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state={
            validatedUsers: getValidatedUsers(),
            blockedUsers: getBLockedUsers()
        }
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.validatedUsers = this.props.getValidatedUsers();
            this.blockedUsers = this.props.getBLockedUsers();
        }
    }

    onChange(e) {
        const updatedValidatedUsers = new Map(this.state.validatedUsers);
        const updatedBlockedUsers = new Map(this.state.blockedUsers);

    }

    render() {
        
        return(
            <div className="container">
                <div className="validated-users">
                    <>
                      {this.validatedUsers}  
                    </>
                    <div className="user">

                    
                    </div>
                </div>
                <div className="blocked-users">
                    <>
                        {this.blockedUsers}
                    </>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        security: state.security
    };
  };

export default connect(mapStateToProps, {

})(UserManagement);