import React, { Component } from 'react';
import { searchBookId } from "../../actions/bookActions";
import { searchReviewUserIdBookId, searchReviewsBookId, addReview } from "../../actions/reviewActions";
import { addCartItem } from "../../actions/cartActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';

import "../Styles/Book.css";

class Book extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.addReview = this.addReview.bind(this);
        this.addCartItem = this.addCartItem.bind(this);

        this.state = {
            addReview_comment: "",
            addReview_rating: 0
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    addReview() {
        let today = new Date();

        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;

        const addReviewRequest = {
            user_id: this.props.security.user.id,
            fullname: this.props.security.user.fullName,
            rating: parseInt(this.state.addReview_rating),
            comment: this.state.addReview_comment,
            book_id: this.props.book[0].id,
            date_added: today
        };

        this.props.addReview(addReviewRequest);
        window.location.href = "/books/"+this.props.match.params.id;
    }

    addCartItem() {
        const addCartItemRequest = {
            book_id: this.props.match.params.id,
            user_id: this.props.security.user.id,
            quantity: 1,
            title: this.props.book[0].title,
            username: this.props.security.user.username,
            price_per: this.props.book[0].price,
            total_price: this.props.book[0].price
        }

        this.props.addCartItem(addCartItemRequest);
        window.location.href = "/cart";
    }

    componentDidMount() {
        this.props.searchBookId(this.props.match.params.id);
        this.props.searchReviewsBookId(this.props.match.params.id);

        if (this.props.security.validToken) {
            this.props.searchReviewUserIdBookId(this.props.match.params.id, this.props.security.user.id);
        }
    }

    render() {
        const {book, userReview, reviews, security} = this.props;

        return(
            <div className="container">
                {(book[0] && book[0].id === parseInt(this.props.match.params.id)) &&
                <>
                    <div className="details-section">
                        <div className="details-img">

                        </div>
                        <div className="details-info">
                            <div className="info-top">
                                <h1>{book[0].title}</h1>
                                <span>by {book[0].author} {book[0].isbn && (<span>(<b>ISBN:</b> {book[0].isbn})</span>)}</span>
                                <span>AU ${book[0].price && book[0].price.toFixed(2)}</span>
                            </div>
                            <div>
                                <div className="mb-2"><b>Details</b></div>
                                <div className="mb-2"><b>Condition: </b><span>{book[0].book_status.charAt(0).toUpperCase() + book[0].book_status.slice(1)}</span></div>

                                <p>{book[0].description}</p>
                            </div>
                            <div>
                                <button className="purchase-btn" onClick={this.addCartItem}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="review-section">
                        <div className="create-review">
                            <div>
                                <h4 className="review-title">Review Test Book</h4>
                                {security.validToken ?
                                <>
                                    {userReview ? 
                                    <>
                                        <span>You have already written a review for {book[0].title}</span>
                                    </>
                                    :
                                    <>
                                        <div onChange={this.onChange}>
                                            <input className="review-rating" type="radio" name="addReview_rating" value="1"/> 
                                            <input className="review-rating" type="radio" name="addReview_rating" value="2"/> 
                                            <input className="review-rating" type="radio" name="addReview_rating" value="3"/> 
                                            <input className="review-rating" type="radio" name="addReview_rating" value="4"/> 
                                            <input className="review-rating" type="radio" name="addReview_rating" value="5"/> 
                                        </div>
                                        <textarea 
                                            className="review-text" 
                                            type="textarea"
                                            placeholder="Write your review here..." 
                                            rows="5"
                                            name="addReview_comment"
                                            value={this.state.addReview_comment}
                                            onChange={this.onChange}
                                        />
                                        <button className="review-submit-btn"onClick={this.addReview}>Submit</button>
                                    </>}
                                </>
                                :
                                <>
                                    <Link to={{pathname: "/login"}}>
                                        <button className="review-login-btn">You need to login to write a review.</button>
                                    </Link>
                                </>
                                }
                            </div>
                        </div>
                        <div className="user-reviews">
                            <h4 className="review-title">Reviews</h4>
                            {reviews.length === 0 ?
                            <>
                                <div>
                                    <span>Be the first to write a review!</span>
                                </div>
                            </>
                            :
                            <>
                                {reviews.map((review) => (
                                    <div className="review-card">
                                        <div className="review-top">
                                            <strong>{review.fullname}</strong>
                                            <ul className="review-rating">{Array.from(Array(parseInt(review.rating)), (e, i) => {
                                                return <li className="rating-item" key={i}><StarIcon/></li>
                                            })}</ul>
                                        </div>
                                        <p className="review-btm">{review.comment}</p>
                                    </div>
                                ))}
                            </>
                            }
                        </div>
                    </div>
                </>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.books,
        userReview: state.userReview,
        reviews: state.reviews,
        security: state.security
    };
  };

export default connect(mapStateToProps, {
    searchBookId,
    searchReviewsBookId,
    searchReviewUserIdBookId,
    addReview,
    addCartItem
})(Book);
// export default Dashboard;
        