import React, { Component } from 'react'
import { getAllBooks, searchBooksTitle, searchBooksAuthor,searchBooksIsbn, getAllCategories, addBook} from "../../actions/bookActions";
import { login } from "../../actions/securityActions";
import { connect } from "react-redux";


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

                        <h3>List of books</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">ISBN</th>
                                    <th scope="col">Category</th>
                                </tr>
                            </thead>

                            <tbody>
                            {books &&
                            books.map((book) => (
                                <tr>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.isbn}</td>
                                    <td>{book.category}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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
        