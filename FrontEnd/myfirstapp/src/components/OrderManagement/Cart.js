import React, { Component } from 'react';
import { searchUserId, deleteCartItem, updateCartItemQuantity } from "../../actions/cartActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "../Styles/Cart.css";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.onCheckOut = this.onCheckOut.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state={
            cartItems: new Map()
        }
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.searchUserId(this.props.security.user.id);

            this.props.cart.map((cartItem) => {
                this.state.cartItems.set(cartItem.id, cartItem);
            })
        }
    }

    onChange(e) {
        const updatedCartItems = new Map(this.state.cartItems);
        const updatedCartItem = updatedCartItems.get(parseInt(e.target.id));

        updatedCartItem.quantity = parseInt(e.target.value);
        updatedCartItem.total_price = parseInt(e.target.value * updatedCartItem.price_per);
        updatedCartItems.set(updatedCartItem.id, updatedCartItem);

        this.setState({cartItems: updatedCartItems})
    }

    onCheckOut() {
        const newCheckOutRequest = [];

        this.props.cart.map((cartItem) => {
            newCheckOutRequest.push(cartItem);
        })

        console.log(newCheckOutRequest);
    }

    render() {
        this.props.cart.map((cartItem) => {
            this.state.cartItems.set(cartItem.id, cartItem);
        })
        
        return(
            <div className="container">
                <div className="cart-container">
                    <div className="cart-display">
                        <h2>Shopping Cart</h2>
                        <div className="cart-items">
                            {this.props.cart.length > 0 ? 
                            <>
                                {this.props.cart.map((cartItem) => (
                                    <>
                                        <div className="item-card">
                                            <div className="item-img"></div>
                                            <div className="item-details">
                                                <div>
                                                    <Link className="item-link" to={{pathname: `/books/${cartItem.book_id}`}}>
                                                        <span className="item-title">{cartItem.title}</span>
                                                    </Link>
                                                </div>
                                                <div className="item-btns">
                                                    <div className="item-detail">
                                                        <span>Quantity</span>
                                                        <input 
                                                            type="number"
                                                            id={cartItem.id}
                                                            className="item-quantity" 
                                                            min="1"
                                                            name="cartItemQuantity"
                                                            value={cartItem.quantity}
                                                            onChange = {this.onChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="item-detail">
                                                        <span>Price</span>
                                                        <span>${cartItem.price_per}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <span className="item-remove" onClick={()=>{
                                                    this.props.deleteCartItem(cartItem.id);
                                                    window.location.href="/cart"
                                                }}>Remove</span>
                                                <div className="item-total">
                                                    <span>Total</span>
                                                    <div>${cartItem.total_price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </>
                            :
                            <>
                                <h4>You have not put anything in your cart..</h4>
                            </>}
                        </div>
                    </div>
                    
                    <div className="cart-checkout">
                        <button className="btn primary-btn" onClick={this.onCheckOut}>Checkout</button>
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
    searchUserId,
    deleteCartItem,
    updateCartItemQuantity
})(Cart);
// export default Dashboard;
        