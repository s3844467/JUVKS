import React, { Component } from 'react';
import { getValidatedUsers, getPendingUsers, getBLockedUsers, blockUser, unblockUser, validateUser } from "../../actions/adminAction";
import { connect } from "react-redux";

import "../Styles/Search.css";

class ManageUsers extends Component {
    constructor(props) {
        super(props);

        // this.onCheckOut = this.onCheckOut.bind(this);
        this.onChange = this.onChange.bind(this);
        this.blockUser = this.blockUser.bind(this);
        this.unblockUser = this.unblockUser.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.getValidatedUsers();
            this.props.getBLockedUsers();
        }
    }

    onChange(e) {
        const updatedValidatedUsers = new Map(this.state.validatedUsers);
        const updatedBlockedUsers = new Map(this.state.blockedUsers);

    }

    blockUser(id){
        console.log("blockUser" + id)
        this.props.blockUser(id)
    }

    unblockUser(id){
        console.log("unblockUser" + id)
        this.props.unblockUser(id)
    }

    render() {

        const { users } = this.props
        return (
            <div className="container">
                <div className="validated-users">
                    <h1>Validated users</h1>

                    {users.validatedUsers &&
                        users.validatedUsers.map((user) => (

                            <div className="user-card">
                               
                                <div className="user-info">
                                    <div className="user-info-top">
                                        <span>{user.fullName}</span>
                                        <span>{user.username}</span>
                                        <span>{user.status}</span>
                                        <span>{user.accountType}</span>
                                        <span>
                                            <button onClick={this.blockUser(user.id)}>
                                            Block</button></span>
                                    </div>
                        
                                </div>
                            </div>

                        ))}

                </div>
                <div className="blocked-users">
                    <h1>Blocked users</h1>

                    {users.blockedUsers &&
                        users.blockedUsers.map((user) => (

                            <div className="user-card">
                               
                                <div className="user-info">
                                    <div className="user-info-top">
                                        <span>{user.fullName}</span>
                                        <span>{user.username}</span>
                                        <span>{user.status}</span>
                                        <span>{user.accountType}</span>
                                        <span><button onClick={this.unblockUser(user.id)}>Unblock</button></span>
                                    </div>
                        
                                </div>
                            </div>

                        ))}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        security: state.security
    };
};

export default connect(mapStateToProps, {
    getValidatedUsers,
    getBLockedUsers,
    blockUser,
    unblockUser
})(ManageUsers);