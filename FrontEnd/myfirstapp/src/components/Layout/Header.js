import React, { Component } from 'react'
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

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
                            <Link className="bookeroo-title" to="/dashboard">
                                Bookeroo
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
                                    <Link to="/addbook">
                                        <button className="navbar-btn">Add Book</button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="navbar-btn"><ShoppingCartIcon/>Cart</button>
                                    </Link>
                                    <Link to="/my_account">
                                        <button className="navbar-btn"><AccountBoxIcon/>My Account</button>
                                    </Link>
                                    <button className="navbar-btn" onClick={this.onLogoutClick}>Logout</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <Link className="bookeroo-title" to="/">
                                Bookeroo
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