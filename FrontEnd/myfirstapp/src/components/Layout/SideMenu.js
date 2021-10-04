import React, { Component } from 'react'
import { getAllCategories, updateBook, searchBooksUserId } from "../../actions/bookActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import PeopleIcon from '@material-ui/icons/People';
import UpgradeIcon from '@material-ui/icons/Update';
import BookIcon from '@material-ui/icons/LibraryBooks';
import TransactionIcon from '@material-ui/icons/Receipt';
import TimelineIcon from '@mui/icons-material/Timeline';

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
                            <li className="side-menu-row"> 
                                <div id="icon"><PeopleIcon/></div>
                                <div id="title">Manage Users</div>
                            </li>
                            <li className="side-menu-row"> 
                                <div id="icon"><UpgradeIcon/></div>
                                <div id="title">Upgrade Requests</div>
                            </li>
                        </>
                        :
                        <>
                            <li className="side-menu-row"> 
                                <div id="icon"><PeopleIcon/></div>
                                <div id="title">My Account</div>
                            </li>
                        </>}
                            <Link to={{pathname: "/manage/books"}}>
                                <li className="side-menu-row"> 
                                    <div id="icon"><BookIcon/></div>
                                    <div id="title">Manage Products</div>
                                </li>
                            </Link>
                            <li className="side-menu-row"> 
                                <div id="icon"><TimelineIcon/></div>
                                <div id="title">Manage Orders</div>
                            </li>
                            <li className="side-menu-row"> 
                                <div id="icon"><TransactionIcon/></div>
                                <div id="title">Transaction History</div>
                            </li>
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