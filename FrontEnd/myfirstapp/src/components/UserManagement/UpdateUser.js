import React, { Component } from 'react'
import { updateUser, logout, login } from "../../actions/securityActions";
import { connect } from "react-redux";

import SideMenu from '../Layout/SideMenu';

import "../Styles/UpdateUser.css";

class UpdateUser extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.updateUser = this.updateUser.bind(this);

        this.state={
            updateUser_id: 0,
            updateUser_fullName: "",
            updateUser_username: "",
            updateUser_address: "",
            updateUser_phoneNum: "",
            updateUser_password: ""
        }
    }

    componentDidMount() {
        this.setState({
            updateUser_id: this.props.security.user.id,
            updateUser_fullName: this.props.security.user.fullName,
            updateUser_username:this.props.security.user.username,
            updateUser_address: this.props.security.user.address,
            updateUser_phoneNum: this.props.security.user.phone
        });
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    updateUser(e){
        e.preventDefault();

        const loginRequest = {
            username: this.state.updateUser_username,
            password: this.state.updateUser_password
        };
        
        if (this.props.login(loginRequest)) {
            let currentDate = new Date();
    
            let currentTimestamp = 
                    currentDate.getFullYear() 
                    + "-" 
                    + (currentDate.getMonth() + 1) 
                    + "-" 
                    + currentDate.getDate() 
                    + " " 
                    + currentDate.getHours() 
                    + ":" 
                    + currentDate.getMinutes() 
                    + ":" 
                    + currentDate.getSeconds();
            
            let userCreatedAt = (this.props.security.user.createdAt)
            ? this.props.security.user.createdAt
            : currentTimestamp
    
            const updateUserRequest = {
                id: this.state.updateUser_id,
                fullName: this.state.updateUser_fullName,
                username: this.state.updateUser_username,
                address: this.state.updateUser_address,
                phoneNum: this.state.updateUser_phoneNum,
                accountType: this.props.security.user.accountType,
                createdAt: userCreatedAt,
                updatedAt: currentTimestamp
            };
    
            this.props.updateUser(updateUserRequest);

            this.props.logout();

            window.location.href = "/login";
        }
    }

    render() {
        const {security} = this.props;

        console.log(security);

        return (
            <div className="container">
                <form className="update-user-container" onSubmit={this.updateUser}>
                    <div className="update-form">
                        <div className="form-group">
                            <h3>Update Details</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateUser_fullName">Full Name</label>
                            <input
                                className="form-control"
                                name="updateUser_fullName"
                                value={this.state.updateUser_fullName}
                                onChange={this.onChange}
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateUser_username">Email Address</label>
                            <input
                                className="form-control"
                                name="updateUser_username"
                                value={this.state.updateUser_username}
                                onChange={this.onChange}
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateUser_address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="updateUser_address"
                                value={this.state.updateUser_address}
                                onChange={this.onChange}
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="updateUser_phoneNum">Phone</label>
                            <input
                                className="form-control"
                                name="updateUser_phoneNum"
                                value={this.state.updateUser_phoneNum}
                                onChange={this.onChange}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="updateUser_phoneNum">Please input your password to submit changes</label>
                        <input
                            type="password"
                            className="form-control"
                            name="updateUser_password"
                            value={this.state.updateUser_password}
                            onChange={this.onChange}
                            required={true}
                        />
                    </div>
                    <input 
                        type="submit" 
                        className="btn btn-primary"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        security: state.security
    };
};

export default connect(mapStateToProps, {
    updateUser,
    logout,
    login
})(UpdateUser);      