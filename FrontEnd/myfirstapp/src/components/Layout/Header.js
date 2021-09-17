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
                        <a className="bookeroo-title" href="/">
                            Bookeroo
                        </a> 
                        <ul className="navbar-partials">

                        {security.validToken ?
                        <>
                            <li className="navbar-item">
                                <a className="navbar-page-loginlink" onClick={this.onClick}>
                                    Logout
                                </a>
                            </li>
                        </>
                        :
                        <>
                            <li className="navbar-item">
                                <a className="navbar-page-registerlink" href="register">
                                    <button className="navbar-button-register">
                                        Register
                                    </button>
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-page-loginlink" href="login">
                                    <button className="navbar-button-login">
                                        Login
                                    </button>
                                </a>
                            </li>
                        </>
                        }
                        </ul>

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