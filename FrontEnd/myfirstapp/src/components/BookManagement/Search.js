import React, { Component } from 'react'
import { getAllBooks,searchAllBooks} from "../../actions/bookActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "../Styles/Search.css";

class Search extends Component {
    componentDidMount() {
        if (this.props.match.params.query === undefined || this.props.match.params.query === "") {
            this.props.getAllBooks();
        } else {
            this.props.searchAllBooks(this.props.match.params.query.replaceAll('-', ' '));
        }
    }

    componentDidUpdate(prevProps) {
        if  (this.props.match.params.query === undefined || this.props.match.params.query === "") {
            this.props.getAllBooks();
        } else if (this.props.match.params.query && this.props.match.params.query !== prevProps.match.params.query)
            this.props.searchAllBooks(this.props.match.params.query.replaceAll('-', ' '));
    }

    render() {
        const {books} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="books-container">
                            {books &&
                            books.map((book) => (
                                <Link to={{
                                    pathname: `/books/${book.id}`,
                                    state: {book: book}
                                }}>
                                    <div className="book-card">
                                        <div className="book-img">
                                            <span>{book.category}</span>
                                        </div>
                                        <div className="book-info">
                                            <div className="book-info-top">
                                                <span>{book.title}</span>
                                                <span id="book-price">${book.price.toFixed(2)}</span>
                                            </div>
                                            <span className="book-info-bot">{book.author}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

export default connect(mapStateToProps, {
    getAllBooks,
    searchAllBooks
})(Search);      