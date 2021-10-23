import React, { Component } from 'react'

import SideMenu from '../Layout/SideMenu';

class ManageTransactions extends Component {
    render() {
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">
                    <h1>Testing Manage Transactions</h1>
                </div>
            </div>
        );
    }
}

export default ManageTransactions;