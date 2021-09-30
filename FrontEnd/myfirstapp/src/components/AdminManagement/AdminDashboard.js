import React, { Component } from "react";
import { SidebarContent } from "./SidebarContent";
import '../Styles/Admin.css'

class AdminDashboard extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="side-menu">
                    <div className="header-menu">
                        <h1> Bookeroo </h1>
                    </div>
                    <ul className="side-menu-list">
                        <a href="/user-management">
                            <li className="side-menu-row">
                                <span id="title">Manage Users</span>
                            </li>
                        </a>
                        <a href="/upgrade-requests">
                            <li className="side-menu-row">
                                <span id="title">Upgrade Requests</span>
                            </li>
                        </a>
                        <a href="/book-management">
                            <li className="side-menu-row">
                                <span id="title">Manage Books</span>
                            </li>
                        </a>
                        <a href="/transactions">
                            <li className="side-menu-row">
                                <span id="title">Transactions History</span>
                            </li>
                        </a>

                        {/* {SidebarContent.map((menuItem, index)=> {
                            return (
                                <li className="side-menu-row" index={index} onClick={()=> {window.location.pathname = menuItem.link}}> 
                                    <div id="icon"> {menuItem.icon} </div>
                                    <div id="title"> {menuItem.title} </div>
                                </li>
                        )})} */}
                    </ul>
                </div>
                <section className="header-dashboard">
                    <nav>
                        <div class="banner-dashboard">
                            <span class="dashboard">Dashboard</span>
                        </div>
                        <div class="admin-details">
                            <span class="admin-name">Admin</span>
                        </div>
                    </nav>
                </section>
            </div>
        );
    }
}

export default AdminDashboard;