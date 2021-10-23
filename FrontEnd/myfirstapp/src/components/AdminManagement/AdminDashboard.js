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
                <div className="dashboard-content">
                    <div class="overview-box">
                        <div class="box">
                            <div class="left-side">
                                <div class="box-topic">Total Customers</div>
                                <div class="number">7</div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="left-side">
                                <div class="box-topic">Total Requests</div>
                                <div class="number">0</div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="left-side">
                                <div class="box-topic">Total Transactions</div>
                                <div class="number">2</div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="left-side">
                                <div class="box-topic">Total Products</div>
                                <div class="number">9</div>
                            </div>
                        </div>
                    </div>
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