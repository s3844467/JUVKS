import React, { Component } from 'react';
import { searchBookId } from "../../actions/bookActions";
import { connect } from "react-redux";

import "../Styles/Book.css";

class Book extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.searchBookId(this.props.match.params.id);
    }

    render() {
        const {book} = this.props;
        console.log(book);
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
                            {/* <br></br> */}
                            {/* <p>Donec rutrum turpis sit amet fringilla rhoncus. Donec quis tempor mauris, vitae cursus metus. Etiam ex elit, malesuada et euismod ut, dictum malesuada eros. Morbi fermentum sem nec.</p> */}
                        </div>
                        <div>
                            <button className="purchase-btn">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="review-section">
                    <div>
                        <div>
                            <p>Review Test Book</p>
                            <textarea className="review-text" type="textarea" placeholder="Write your review here..." rows="5"></textarea>
                        </div>
                        <button className="review-submit-btn">Submit</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.books
    };
  };

export default connect(mapStateToProps, {
    searchBookId
})(Book);
// export default Dashboard;
        