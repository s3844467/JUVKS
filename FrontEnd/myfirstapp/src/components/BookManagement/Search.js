import React, { Component } from 'react'
import {searchAllBooks} from "../../actions/bookActions";
import { connect } from "react-redux";

import "../Styles/Search.css";


class Search extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state={
            search:"",
            search_by:"",
            filterBook: [],
        }

    }


    componentDidMount() {
    }

    onClick(e){
        e.preventDefault();
        this.props.searchAllBooks(this.state.search);
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
                        <div className="form-group">
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
                                <div className="book-card">
                                    <div className="book-img">
                                        <span>{book.category}</span>
                                    </div>
                                    <div className="book-info">
                                        <div className="book-info-top">
                                            <span>{book.title}</span>
                                            <span>$$</span>
                                        </div>
                                        <span className="book-info-bot">{book.author}</span>
                                    </div>
                                </div>
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
        books: state.books, 
        security: state.security,
        errors: state.errors
    };
  };

export default connect(mapStateToProps, {
    searchAllBooks
})(Search);
  
// export default Search;
        