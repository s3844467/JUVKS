import React, { Component } from 'react';
import { searchUserId } from "../../actions/cartActions";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

import "../Styles/Checkout.css";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            orderName: "",
            orderEmail: "",
            orderPhone: "",
            orderAddress: "",
            orderCity: "",
            orderState: "",
            orderZipCode: "",
            orderInstructions: "",
            orderTotal: 0
        }
    }

    componentDidMount() {
        this.props.searchUserId(this.props.security.user.id);

        this.setState({
            orderName: this.props.security.user.fullName,
            orderEmail: this.props.security.user.username,
            orderState: "Victoria",
            orderZipCode: 3000
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cart.length > 0) {
            let cartTotal = 0;

            nextProps.cart.forEach(cartItem => {
                cartTotal += cartItem.total_price;
            })

            this.setState({orderTotal: cartTotal});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { cart, security } = this.props;
        console.log(cart);
        console.log(security);
        console.log("Total is: " + this.state.orderTotal);

        return(
            <div className="container">
                <div className="checkout-container"> 
                    <div className="checkout-form checkout-section">
                        <div className="checkout-details form-group">
                            <div className="details-card" id="your-details">
                                <h3>Enter your details</h3>
                                <div className="form-group">
                                    <label htmlFor="orderName">Full Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={this.state.orderName}
                                        name="orderName"
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="orderEmail">Email Address</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your email address"
                                        value={this.state.orderEmail}
                                        name="orderEmail"
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="orderPhone">Phone Number</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your phone number"
                                        value={this.state.orderPhone}
                                        name="orderPhone"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>

                            <div className="details-card" id="delivery">
                                <h3>Enter your delivery details</h3>

                                <div className="form-group">
                                    <label htmlFor="orderAddress">Address</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your delivery address"
                                        value={this.state.orderAddress}
                                        name="orderAddress"
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="orderCity">City</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your delivery city"
                                        value={this.state.orderCity}
                                        name="orderCity"
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="orderState">State</label>
                                            <select 
                                            name="orderState"
                                            onChange={this.onChange}
                                            className="form-control"
                                            >
                                                <option value={this.state.orderState}>Queensland</option>
                                                <option value={this.state.orderState}>New South Wales</option>
                                                <option value={this.state.orderState}>South Australia</option>
                                                <option value={this.state.orderState}>Tasmania</option>
                                                <option value={this.state.orderState}>Victoria</option>
                                                <option value={this.state.orderState}>Western Australia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="orderZipCode">Zip Code</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                placeholder="Enter your delivery zip code"
                                                value={this.state.orderZipCode}
                                                name="orderZipCode"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="orderInstructions">Delivery instructions</label>
                                    <input
                                        className="form-control"
                                        type="textarea"
                                        placeholder="Enter your delivery instructions"
                                        value={this.state.orderInstructions}
                                        name="orderInstructions"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-summary checkout-section">
                        <h3>Checkout Summary</h3>
                        <h5>Items in your cart</h5>
                        <div className="item-list">
                            {cart.map((cartItem) => {
                                console.log(cartItem);
                                <span>{cartItem.title}</span>
                            })}
                        </div>
                        <span>Total</span><span>${this.state.orderTotal}</span>
                        <button>Pay with PayPal</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        security: state.security
    };
  };

export default connect(mapStateToProps, {
    searchUserId
})(Cart);
// export default Dashboard;
        