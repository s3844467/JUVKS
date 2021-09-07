import React, { Component } from 'react'
import '..//Styles/Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar-header">
                    <div className="navbar-container">
                        <a className="bookeroo-title" href="/">
                            Bookeroo
                        </a> 
                        <ul className="navbar-partials">
                            <li className="navbar-item">
                                <a className="navbar-page-registerlink" href="register.html">
                                    Register
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-page-loginlink" href="login.html">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;