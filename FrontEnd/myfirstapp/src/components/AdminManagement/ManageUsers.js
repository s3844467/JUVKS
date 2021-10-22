import React, { Component } from 'react'

import SideMenu from '../Layout/SideMenu';

import '../Styles/ManageUsers.css';

class ManageUsers extends Component {
    render() {
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">
                    <h1>Testing Manage Users</h1>
                </div>
            </div>
        );
    }
}

export default ManageUsers;