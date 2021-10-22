import React, { Component } from 'react'
import { getAllCategories, updateBook, searchBooksUserId } from "../../actions/bookActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import PeopleIcon from '@material-ui/icons/People';
import UpgradeIcon from '@material-ui/icons/Update';
import BookIcon from '@material-ui/icons/LibraryBooks';
import TransactionIcon from '@material-ui/icons/Receipt';
import TimelineIcon from '@material-ui/icons/Timeline';

import '../Styles/Admin.css'

class SideMenu extends Component {
    render() {
        const { security } = this.props;

        return(
            <div className="main-content">
                <div className="side-menu">
                    <ul className="side-menu-list">
                        {security.user.accountType.toLowerCase() === "admin" ? 
                        <>
                            <Link to={{pathname: "/manage/users"}}>
                                <li className="side-menu-row"> 
                                    <div id="icon"><PeopleIcon/></div>
                                    <div id="title">Manage Users</div>
                                </li>
                            </Link>
                            <Link to={{pathname: "/manage/upgrade-requests"}}>
                                <li className="side-menu-row"> 
                                    <div id="icon"><UpgradeIcon/></div>
                                    <div id="title">Upgrade Requests</div>
                                </li>
                            </Link>
                        </>
                        :
                        <>
                            <Link to={{pathname: "/my_account"}}>
                                <li className="side-menu-row"> 
                                    <div id="icon"><PeopleIcon/></div>
                                    <div id="title">My Account</div>
                                </li>
                            </Link>
                        </>}
                            <Link to={{pathname: "/manage/books"}}>
                                <li className="side-menu-row"> 
                                    <div id="icon"><BookIcon/></div>
                                    <div id="title">Manage Products</div>
                                </li>
                            </Link>
                            <Link to={{pathname: "/manage/orders"}}>
                                <li className="side-menu-row"> 
                                    <div id="icon"><TimelineIcon/></div>
                                    <div id="title">Manage Orders</div>
                                </li>
                            </Link>
                            <Link to={{pathname: "/manage/transactions"}}>
                                <li className="side-menu-row"> 
                                    <div id="icon"><TransactionIcon/></div>
                                    <div id="title">Manage Transactions</div>
                                </li>
                            </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        security: state.security
    }
}

export default connect(mapStateToProps)(SideMenu);