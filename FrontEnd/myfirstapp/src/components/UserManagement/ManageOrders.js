import React, { Component } from 'react'

import SideMenu from '../Layout/SideMenu';

class ManageOrders extends Component {
    render() {
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">
                    <h1>Testing Manage Orders</h1>
                </div>
            </div>
        );
    }
}

export default ManageOrders;