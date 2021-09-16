import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';
import initial from '../reducers/securityReducer';
import { getAllBooks, searchBooksTitle, getAllCategories, addBook} from "../actions/bookActions";
import { login } from "../actions/securityActions";
import { connect } from "react-redux";


class Dashboard extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.addBook = this.addBook.bind(this);
        // this.filter = this.filter.bind(this);
        this.state={
            search:"",
            search_by:"",
            filterBook: [],
            addBook_title: "",
            addBook_author: "",
            addBook_category:"",
            addBook_isbn: "",
        }

    }


    componentDidMount() {
        this.props.getAllBooks();
        this.props.getAllCategories();
    }

    addBook(e){
        e.preventDefault();
        const addBookRequest = {
            title: this.state.addBook_title,
            author: this.state.addBook_author,
            category: this.state.addBook_category,
            isbn: this.state.addBook_isbn,
        };
        // this.searchBooksTitle("s");
        this.props.addBook(addBookRequest);
        this.props.getAllBooks();
        // this.props.searchBook(SearcRequest);
    }

    onClick(e){
        // e.preventDefault();
        // const SearchRequest = {
        //     search: this.state.search,
        //     search_by: this.state.search_by
        // };
        // this.searchBooksTitle("s");
        this.props.searchBooksTitle(this.state.search)
        // this.props.searchBook(SearcRequest);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {books, security, category, errors} = this.props;
        const {filterBook} = this.state;
        return (
            
        <div className="container">

        

            {/* <p>TODO: Retrieve and render user information (username, address and phone number) from securityReducer
            </p>
            <p>clickable UI components: 
                <li>Search bar</li>
                <li>Shopping Cart</li>
                <li>View Transaction</li>
                
                </p>
             */}
            {/* Displaying all backend data base here */}
            <h3>Current User</h3>
            <div className="row">
                <li className="col list-group-item bg-transparent"><b>ID:</b> {security.user.id}</li>
                <li className="col list-group-item bg-transparent"><b>Username:</b> {security.user.username}</li>
                <li className="col list-group-item bg-transparent"><b>Full name:</b> {security.user.fullName}</li>
                <li className="col list-group-item bg-transparent"><b>Account type:</b> {security.user.accountType}</li>
            </div>
            <br />
        <div className="row">
            <div className="col-sm-4 b">
            <h3>Add book</h3>
            {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Title"
                    name="addBook_title"
                    value={this.state.addBook_title}
                    onChange = {this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Author</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Author"
                    name="addBook_author"
                    value={this.state.addBook_author}
                    onChange = {this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">ISBN</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="ISBN"
                    name="addBook_isbn"
                    value={this.state.addBook_isbn}
                    onChange = {this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Category</label>
                <select className="form-control" 
                    name="addBook_category" 
                    onChange = {this.onChange}
                >
                <option selected>Open this select menu</option>
                {category && category.map((c) => (
                    <option value={c.categoryName}>{c.categoryName}</option>
                // <option value="2">Two</option>
                // <option value="3">Three</option>
                ))}
                </select>
            </div>
            
            <button className="btn btn-primary mb-2" onClick={this.addBook}>Submit</button>
            </div>
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

        // <div className="Persons">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <h1 className="display-4 text-center">Persons</h1>
        //                 <br />
        //                <CreatePersonButton />
        //                 <br />
        //                 <hr />
        //                 <Person/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
// import React, { Component } from 'react'
// import Person from './Persons/Person'
// import CreatePersonButton from './Persons/CreatePersonButton';

// class Dashboard extends Component {
//     render() {
//         return (
//             <div className="Persons">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h1 className="display-4 text-center">Persons</h1>
//                         <br />
//                        <CreatePersonButton />
//                         <br />
//                         <hr />
//                         <Person/>
//                     </div>
//                 </div>
//             </div>
//         </div>
    
//         )
//     }
// }
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
    login,
    addBook
})(Dashboard);
  
// export default Dashboard;
        