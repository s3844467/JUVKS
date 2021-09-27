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
                            <span>by {book.author}</span>
                            <span>AU$</span>
                        </div>
                        <div>
                            <strong>Description</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nisl id turpis sagittis ullamcorper et non mauris. Aliquam erat volutpat. Vestibulum ac scelerisque sapien, vel lacinia lectus. Cras in sapien consectetur, blandit metus rutrum, aliquam magna. Nunc ipsum mauris, accumsan ac sodales et, dignissim ut purus. Fusce iaculis porttitor diam, eget cursus eros condimentum a. Quisque massa enim, semper id viverra eu, sagittis eget sapien. Aenean efficitur lorem at fringilla congue.</p>
                            <br></br>
                            <p>Donec rutrum turpis sit amet fringilla rhoncus. Donec quis tempor mauris, vitae cursus metus. Etiam ex elit, malesuada et euismod ut, dictum malesuada eros. Morbi fermentum sem nec.</p>
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
        