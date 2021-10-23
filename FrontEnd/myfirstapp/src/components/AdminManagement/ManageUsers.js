import React, {useState, useEffect, Component } from 'react';
// import {UserProfiles} from "../../actions/userActions";
// import {getAllUsers} from '../../actions/userActions';
import { connect } from "react-redux";


import SideMenu from '../Layout/SideMenu';

import '../Styles/ManageUsers.css';
import axios from 'axios';

class ManageUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/users/allUsers").then(res => {
            console.log(res)
            this.setState({users: res.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {users} = this.state
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">
                    <div className="users-container">
                        <table className="table-body">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Full Name </th>
                                    <th> Username </th>
                                    <th> Account Type </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key= {user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.fullName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.accountType}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, {
})(ManageUsers);      