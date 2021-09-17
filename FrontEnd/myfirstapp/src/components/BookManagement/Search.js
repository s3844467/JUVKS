import React, { Component } from 'react'
import { getAllBooks, searchBooksTitle, searchBooksAuthor,searchBooksIsbn, getAllCategories, addBook} from "../../actions/bookActions";
import { login } from "../../actions/securityActions";
import { connect } from "react-redux";

import "../Styles/Search.css";


class Dashboard extends Component {
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
        this.props.getAllBooks();
        this.props.getAllCategories();
    }

    onClick(e){
        e.preventDefault();
        if(this.state.search_by === "title"){
            this.props.searchBooksTitle(this.state.search);
        }
        else if(this.state.search_by === "author"){
            this.props.searchBooksAuthor(this.state.search);
        }
        else if(this.state.search_by === "isbn"){
            this.props.searchBooksIsbn(this.state.search);
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
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Search</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Example input"
                                name="search"
                                value={this.state.search}
                                onChange = {this.onChange}
                            />
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="search_by" 
                                value="title"
                                onChange = {this.onChange}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">title</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="search_by" 
                                value="isbn"
                                onChange = {this.onChange}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">isbn</label>
                        </div>            

                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="search_by" 
                                value="author"
                                onChange = {this.onChange}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">author</label>
                        </div>

                        <button className="btn btn-primary mb-2" onClick={this.onClick}>Submit</button>
                        <div className="books-container">
                            {books &&
                            books.map((book) => (
                                <div className="book-item">
                                    <div className="book-setup">
                                        <div className="book-img">
                                            <span>{book.category}</span>
                                        </div>
                                        <div className="book-info">
                                            <span>$$</span>
                                            <span>{book.title}</span>
                                            <span>{book.author}</span>
                                        </div>
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
        category:state.category,
        errors: state.errors
    };
  };

export default connect(mapStateToProps, {
    getAllBooks,
    getAllCategories,
    searchBooksTitle,
    searchBooksAuthor,
    searchBooksIsbn,
    login,
    addBook
})(Dashboard);
  
// export default Dashboard;
        