import React, { Component } from "react";
import { connect } from "react-redux";

import PeopleIcon from '@material-ui/icons/People';
import UpgradeIcon from '@material-ui/icons/Update';
import BookIcon from '@material-ui/icons/LibraryBooks';
import TransactionIcon from '@material-ui/icons/Receipt';
import TimelineIcon from '@mui/icons-material/Timeline';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import '../Styles/Admin.css'


class AdminDashboard extends Component {
    render() {
        const { security } = this.props;
        console.log(security);
        return (
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
                            <li className="side-menu-row"> 
                                <div id="icon"><BookIcon/></div>
                                <div id="title">Manage Products</div>
                            </li>
                        </>
                        :
                        <>
                            <li className="side-menu-row"> 
                                <div id="icon"><PeopleIcon/></div>
                                <div id="title">My Account</div>
                            </li>
                            <li className="side-menu-row"> 
                                <div id="icon"><BookIcon/></div>
                                <div id="title">Manage Products</div>
                            </li>
                        </>}
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        security: state.security,
    };
  };

export default connect(mapStateToProps, {

})(AdminDashboard);