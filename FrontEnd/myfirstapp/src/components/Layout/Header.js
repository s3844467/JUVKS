import React, { Component } from 'react'
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";

import '..//Styles/Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        this.props.logout();
        window.location.href = "/";
    }
    render() {
        const {security} = this.props;
        return (
            <div>
                <div className="navbar-header">
                    <div className="navbar-container">

                        {security.validToken ?
                        <>
                            <a className="bookeroo-title" href="/dashboard">
                                Bookeroo
                            </a> 
                            <div className="navbar-partials">
                                <div className="navbar-item">
                                    <a href="/addbook">Add Book</a>
                                    <a href="/my_account">
                                        <button className="navbar-btn">
                                            My Account
                                        </button>
                                    </a>
                                    <button className="navbar-btn" onClick={this.onClick}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <a className="bookeroo-title" href="/">
                                Bookeroo
                            </a> 
                            <div className="navbar-partials">
                                <div className="navbar-item">
                                    <a className="navbar-page-registerlink" href="/register">
                                        <button className="navbar-btn">
                                            Register
                                        </button>
                                    </a>
                                </div>
                                <div className="navbar-item">
                                    <a className="navbar-page-loginlink" href="/login">
                                        <button className="navbar-btn">
                                            Login
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </>
                        }
                        </div>

                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        security: state.security,
    };
  };
export default  connect(mapStateToProps,{logout})(Header);