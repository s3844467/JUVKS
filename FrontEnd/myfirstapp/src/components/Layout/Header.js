import React, { Component } from 'react'
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';

import '../Styles/Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);

        this.state={
            search:""
        }
    }
    
    onLogoutClick(){
        this.props.logout();
        window.location.href="/";
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }
    
    render() {
        const {security} = this.props;
        return (
            <div>
                <div className="navbar-header">
                    <div className="navbar-container">

                        {security.validToken ?
                        <>
                            <Link className="bookeroo-title" to={{pathname: "/dashboard"}}>
                                <h1>Bookeroo</h1>
                            </Link>
                            <div className="search-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search for a book"
                                    name="search"
                                    value={this.state.search}
                                    onChange = {this.onChange}
                                />
                                <Link to={{
                                    pathname: `/search=${this.state.search.toLowerCase().replaceAll(' ', '-')}`
                                }}>
                                    <button className="btn btn-primary search-btn"><SearchIcon/></button>
                                </Link>
                            </div>
                            <div className="navbar-partials">
                                <div className="navbar-item">
                                    <Link className="navbar-btn-link" to="/addbook">
                                        <button className="navbar-btn"><AddIcon/><span>List Book</span></button>
                                    </Link>
                                    <Link className="navbar-btn-link" to="/cart">
                                        <button className="navbar-btn"><ShoppingCartIcon/><span>Cart</span></button>
                                    </Link>
                                    <Link className="navbar-btn-link" to="/my_account">
                                        <button className="navbar-btn"><AccountCircleIcon/><span>{security.user.fullName.slice(0, security.user.fullName.indexOf(' '))}</span></button>
                                    </Link>
                                    <button className="navbar-btn" onClick={this.onLogoutClick}><LogoutIcon/><span>Logout</span></button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <Link className="bookeroo-title" to={{pathname: "/"}}>
                                <h1>Bookeroo</h1>
                            </Link>
                            <div className="search-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search for a book"
                                    name="search"
                                    value={this.state.search}
                                    onChange = {this.onChange}
                                />
                                <Link to={{
                                    pathname: `/search=${this.state.search.toLowerCase().replaceAll(' ', '-')}`
                                }}>
                                    <button className="btn btn-primary search-btn"><SearchIcon/></button>
                                </Link>
                            </div>
                            <div className="navbar-partials">
                                <div className="navbar-item">
                                    <Link className="navbar-page-registerlink" to="/register">
                                        <button className="navbar-btn">Register</button>
                                    </Link>
                                </div>
                                <div className="navbar-item">
                                    <Link className="navbar-page-loginlink" to="/login">
                                        <button className="navbar-btn">Login</button>
                                    </Link>
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
export default  connect(mapStateToProps,{
    logout
})(Header);