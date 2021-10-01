import React, { Component } from 'react';
import { searchBookId } from "../../actions/bookActions";
import { searchReviewUsernameBookId, searchReviewsBookId, addReview } from "../../actions/reviewActions";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import "../Styles/Book.css";

class Book extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.addReview = this.addReview.bind(this);
        this.state={
            redirect: false,
            userHasReviewed: false,
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
        this.hasUserReviewed();
    }

    hasUserReviewed() {
        this.props.reviews.map((review) => {
            if (!this.state.userHasReviewed && review.username === this.props.security.user.username) {
                this.setState({userHasReviewed: true});
                return;
            }
        });
    }

    addReview(){
        let today = new Date();

        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;

        const addReviewRequest = {
            username: this.props.security.user.username,
            rating: parseInt(this.state.addReview_rating),
            comment: this.state.addReview_comment,
            book_id: this.props.book[0].id,
            date_added: today
        };

        this.props.addReview(addReviewRequest);
        this.props.searchReviewsBookId(this.props.match.params.id);
        window.location.href="/book/"+this.props.match.params.id;
    }

    renderRedirect = () => {
      if (this.state.redirect === true) {
        return <Redirect to={`/books/${this.props.book[0].id}`} />
      }
    }

    renderAlreadyReviewed = () => {
        if (this.state.userHasReviewed === true) {
            return <span>You have already written a review for {this.props.book[0].title}</span>
        } else {
            return(
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
            )
        }
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {book, reviews, security} = this.props;
        return (
            <div className="container">
                {this.renderRedirect()}
                <div className="details-section">
                    <div className="details-img">

                    </div>
                    <div className="details-info">
                        <div className="info-top">
                            <h1>{book[0].title}</h1>
                            <span>by {book[0].author} {book[0].isbn && (<i>(ISBN: {book[0].isbn})</i>)}</span>
                            <span>AU ${book[0].price && book[0].price.toFixed(2)}</span>
                        </div>
                        <div>
                            <p><b>Book Status: </b><i>{book[0].book_status}</i></p>

                            <strong>Description</strong>
                            <p>{book[0].description}</p>
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
                                {this.renderAlreadyReviewed()}
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
                                <h5>Oops.. There doesn't appear to be any reviews for {book[0].title}</h5>
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
    searchReviewUsernameBookId,
    addReview
})(Book);
// export default Dashboard;
        