import React, { Component } from 'react';
import { searchBookId } from "../../actions/bookActions";
import { searchReviewsBookId, addReview } from "../../actions/reviewActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "../Styles/Book.css";

class Book extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.addReview = this.addReview.bind(this);
        this.state={
            addReview_username: "",
            addReview_rating: "",
            addReview_comment:"",
            addReview_book_id: "",
            addReview_date: ""
        }
    }

    componentDidMount() {
        this.props.searchBookId(this.props.match.params.id);
        this.props.searchReviewsBookId(this.props.match.params.id);
    }

    addReview(e){
        e.preventDefault();

        this.state.addReview_username=this.props.security.user.username;
        this.state.addReview_book_id=this.props.book.id;

        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;

        this.state.addReview_date=today;

        const addReviewRequest = {
            username: this.state.addReview_username,
            rating: parseInt(this.state.addReview_rating),
            comment: this.state.addReview_comment,
            book_id: this.state.addReview_book_id,
            date_added: this.state.addReview_date
        };

        console.log(addReviewRequest);

        this.props.addReview(addReviewRequest);
        this.props.searchReviewsBookId(this.props.match.params.id);
        // window.location.href = "/books/"+this.props.match.params.id;
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {book, reviews, security} = this.props;
        
        return (
            <div className="container">
                <div className="details-section">
                    <div className="details-img">

                    </div>
                    <div className="details-info">
                        <div className="info-top">
                            <h1>{book.title}</h1>
                            <span>by {book.author} {book.isbn && (<i>(ISBN: {book.isbn})</i>)}</span>
                            <span>AU ${book.price && book.price.toFixed(2)}</span>
                        </div>
                        <div>
                            <p><b>Book Status: </b><i>{book.book_status}</i></p>

                            <strong>Description</strong>
                            <p>{book.description}</p>
                        </div>
                        <div>
                            <button className="purchase-btn">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="review-section">
                    <div className="create-review">
                        <div>
                            <h4 className="review-title">Review Test Book</h4>
                            {security.validToken ?
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
                                <button className="review-submit-btn" onClick={this.addReview}>Submit</button>
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
                                <h5>Oops.. There doesn't appear to be any reviews for {book.title}</h5>
                                <h5>Be the first to write a review!</h5>
                            </div>
                        </>
                        :
                        <>
                            {reviews.map((review) => (
                                <div className="review-card">
                                    <div className="review-top">
                                        <strong>{review.username}</strong>
                                        <span>{review.rating}</span>
                                    </div>
                                    <p className="review-btm">{review.comment}</p>
                                </div>
                            ))}
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
        book: state.books,
        reviews: state.reviews,
        security: state.security
    };
  };

export default connect(mapStateToProps, {
    searchBookId,
    searchReviewsBookId,
    addReview
})(Book);
// export default Dashboard;
        