import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      address: "",
      phoneNum: "",
      accountType: "",
      abn: "",
      businessName: "",

      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      address: this.state.address,
      phoneNum: this.state.phoneNum,
      accountType: this.state.accountType,
      abn: this.state.abn,
      businessName: this.state.businessName,
    };

    this.props.createNewUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                  />
                </div>
                {errors.data && errors.data.fullname && (
                    <div>{errors.data.fullname}</div>
                  )}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                {errors.data && errors.data.username && (
                    <div>{errors.data.username}</div>
                  )}
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                {errors.data && errors.data.password && (
                    <div>{errors.data.password}</div>
                  )}
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                </div>
                {errors.data && errors.data.confirmPassword && (
                    <div>{errors.data.confirmPassword}</div>
                  )}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Phone Number"
                    name="phoneNum"
                    value={this.state.phoneNum}
                    onChange={this.onChange}
                  />
                </div>
               
                <h5>Account Type</h5>
                <div className="form-group">
                  <div className="form-check form-check-inline">
                  <input 
                      className="form-check-input" 
                      type="radio" 
                      name="accountType" 
                      value="Public"
                      onChange = {this.onChange}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">Public</label>
                  </div>
                  <div className="form-check form-check-inline">
                  <input 
                      className="form-check-input" 
                      type="radio" 
                      name="accountType" 
                      value="Publisher"
                      onChange = {this.onChange}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">Publisher</label>
                  </div>
                </div>
                
                {this.state.accountType  === "Publisher" ?
                <>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="ABN"
                      name="abn"
                      value={this.state.abn}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Business Name"
                      name="businessName"
                      value={this.state.businessName}
                      onChange={this.onChange}
                    />
                  </div>
                </>
                :null}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createNewUser }
)(Register);