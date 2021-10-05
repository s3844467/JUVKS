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
            validatedUsers: new Map(),
            blockedUsers: new Map()
        }
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.getValidatedUsers();

            this.props.UserManagement.map((user) => {
                this.state.validatedUsers.set(user.id, user);
            })

            this.props.getBLockedUsers();

            this.props.UserManagement.map((user) => {
                this.state.blockedUsers.set(user.id, user);
            })
        }
    }

    onChange(e) {
        const updatedValidatedUsers = new Map(this.state.validatedUsers);
        const updatedBlockedUsers = new Map(this.state.validatedUsers);

    }

    render() {
        this.props.cart.map((user) => {
            this.state.validatedUsers.set(user.id, user);
        })
        
        return(
            <div className="container">
                <div className="validated-users">
                    {
                        this.props.validatedUsers.map((user) => (
                            <div>
                                {user.id}
                                {user.username}
                                {user.status}
                            </div>
                        ))
                    }
                    <div className="user">

                    
                    </div>
                </div>
                <div className="blocked-users">


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