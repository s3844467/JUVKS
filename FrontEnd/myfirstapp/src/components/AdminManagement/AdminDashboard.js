import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import SideMenu from '../Layout/SideMenu'

import '../Styles/Admin.css'


class AdminDashboard extends Component {
    render() {
        const { security } = this.props;
        console.log(security);
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">

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