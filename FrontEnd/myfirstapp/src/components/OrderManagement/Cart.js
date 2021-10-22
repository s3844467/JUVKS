import React, { Component } from 'react';
import { searchUserId, deleteCartItem, updateCartItemQuantity, getCartTotal } from "../../actions/cartActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


import "../Styles/Cart.css";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.onCheckOut = this.onCheckOut.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateCartTotal = this.updateCartTotal;

        this.state={
            cartItems: new Map(),
            cartTotal: 0
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

    componentWillReceiveProps(nextProps) {
        this.updateCartTotal(nextProps);
    }

    updateCartTotal(props) {
        if (props.cart.length > 0) {
            let cartTotal = 0;

            props.cart.forEach((cartItem) => {
                cartTotal += cartItem.total_price;
            })

            this.setState({cartTotal: cartTotal});
        }
    }

    onChange(e) {
        const updatedCartItems = new Map(this.state.cartItems);
        const updatedCartItem = updatedCartItems.get(parseInt(e.target.id));

        updatedCartItem.quantity = parseInt(e.target.value);
        updatedCartItem.total_price = parseInt(e.target.value * updatedCartItem.price_per);
        updatedCartItems.set(updatedCartItem.id, updatedCartItem);

        this.setState({
            cartItems: updatedCartItems
        });

        this.props.updateCartItemQuantity(updatedCartItem.quantity, updatedCartItem.id);
        this.updateCartTotal(this.props);
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
                                            <div className="item-img">
                                                <img className="book-img" src={"http://localhost:8081/api/images/files/"+cartItem.book_id} alt={cartItem.title}/>
                                            </div>
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

                        <div>
                            <h2>Order Summary</h2>
                            <div className="summary-details">
                                <b><span>Total</span></b><b><span>${this.state.cartTotal}</span></b>
                            </div>
                        </div>
                        <Link to={{pathname: "/checkout"}}>
                            <button className="btn btn-primary checkout-btn" onClick={this.onCheckOut}>Continue to Checkout</button>
                        </Link>
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
    updateCartItemQuantity,
    getCartTotal
})(Cart);
// export default Dashboard;
        