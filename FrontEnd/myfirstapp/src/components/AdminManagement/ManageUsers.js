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
                    <h1>Testing Manage Users</h1>
                    {
                        users.length ?
                        users.map((user) => 
                        <div className="username-col">
                            <h1>{user.username}</h1>
                        </div>) :
                        null
                    }
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
    getAllUsers
})(ManageUsers);      