import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { addProfileImage } from "../../actions/securityActions";

import SideMenu from "../Layout/SideMenu";

import "../Styles/MyAccount.css";

class MyAccount extends Component {
    constructor(props) {
        super(props);

        this.updateImage = this.updateImage.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.setState({
            updateProfile_image: 0,
        });

    }

    async updateImage(e){
        const formData = new FormData();

        formData.append('file', this.state.updateProfile_image);
        formData.append('id', this.props.security.user.id);

        await this.props.addProfileImage(formData);
        if(! this.props.errors.data){
            window.location.href = "/my_account";
        }

        
    }

    onChangeImage(e){
        this.setState({updateProfile_image: e.target.files[0]});
    }

    render() {
        const {security, errors} = this.props;
        return (
            <div className="main">
                <SideMenu/>
                <div className="container">
                    <div className="my-account-container">
                        <h1>Welcome {security.user.fullName}</h1>
                        <div className="myaccount-details">
                            <div>
                                <div>
                                    <h5>Full Name</h5>
                                    <span>{security.user.fullName}</span>
                                </div>
                                <div>
                                    <h5>Email Address</h5>
                                    <span>{security.user.username}</span>
                                </div>
                                <div>
                                    <h5>Password</h5>
                                    <span>Filler Password</span>
                                </div>
                                <Link to={{pathname: "/update"}}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                            </div>
                            <div>
                                <div>
                                    <h5>Account Type</h5>
                                    <span>{security.user.accountType}</span>
                                    <button className="btn btn-primary">Request Upgrade</button>
                                </div>
                            </div>
                            <div className="product-img">
                                <img 
                                className="product-img" 
                                src={"http://localhost:8080/api/profileimages/files/"+security.user.id} 
                                alt={security.user.id}
                                onError={(e)=>{e.target.src="http://localhost:8080/api/profileimages/files/1"}}/>
                            </div>
                            <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Change Profile Image</label>
                                    <input 
                                        type="file" 
                                        accept="image/png, image/jpeg"
                                        formEncType="multipart/form-data"
                                        className="form-control-file" 
                                        name="updateProfile_image"
                                        // value={this.state.updateProfile_image}
                                        onChange = {this.onChangeImage}
                                    />
                                </div>
                                {errors.data && errors.data.file &&(
                                    <div className="text-danger">{errors.data.file}</div>
                                )}
                                <button className="btn btn-primary mb-2" onClick={this.updateImage}>Upload Image</button>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        security: state.security,
        errors: state.errors
    };
  };

export default connect(mapStateToProps, {
    addProfileImage
})(MyAccount);
  
// export default Dashboard;
        