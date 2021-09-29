import React, { Component } from 'react'
import { getAllBooks,searchAllBooks} from "../../actions/bookActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "../Styles/Search.css";


class Search extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state={
            search:""
        }

    }


    componentDidMount() {
        this.props.getAllBooks();
    }

    onClick(e){
        e.preventDefault();
        if (this.state.search === "") {
            this.props.getAllBooks();
        } else {
            this.props.searchAllBooks(this.state.search);
        }
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {books} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="search-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search for a book"
                                name="search"
                                value={this.state.search}
                                onChange = {this.onChange}
                            />
                            <button className="btn btn-primary mb-2" onClick={this.onClick}>Submit</button>
                        </div>
                        <div className="books-container">
                            {books &&
                            books.map((book) => (
                                <Link to={{pathname: `/books/${book.isbn}`}}>
                                    <div className="book-card">
                                        <div className="book-img">
                                            <span>{book.category}</span>
                                        </div>
                                        <div className="book-info">
                                            <div className="book-info-top">
                                                <span>{book.title}</span>
                                                <span>${book.price.toFixed(2)}</span>
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
  
// export default Search;
        