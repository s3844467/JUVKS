import React, { Component } from 'react';
import { searchBookId } from "../../actions/bookActions";
import { searchReviewUsernameBookId, searchReviewsBookId, addReview } from "../../actions/reviewActions";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import "../Styles/Book.css";
import { getThemeProps } from '@material-ui/styles';

class Book extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.addReview = this.addReview.bind(this);

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
            username: this.props.security.user.username,
            rating: parseInt(this.state.addReview_rating),
            comment: this.state.addReview_comment,
            book_id: this.props.book[0].id,
            date_added: today
        };
        
        this.props.addReview(addReviewRequest);
        window.location.href = "/books/"+this.props.match.params.id;
    }

    componentDidMount() {
        this.props.searchBookId(this.props.match.params.id);
        this.props.searchReviewsBookId(this.props.match.params.id);

        if (this.props.security.validToken) {
            console.log(this.props);
            console.log(this.props.security.user.username);
            console.log(this.props.match.params.id);
            this.props.searchReviewUsernameBookId(this.props.match.params.id, this.props.security.user.username);
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
                                <button className="purchase-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="review-section">
                        <div className="create-review">
                            <div>
                                <h4 className="review-title">Review Test Book</h4>
                                {security.validToken ?
                                <>  {console.log(this.props)}
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
    searchReviewUsernameBookId,
    addReview
})(Book);
// export default Dashboard;
        