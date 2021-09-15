import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';
import initial from '../reducers/securityReducer';
import { getAllBooks, searchBooks } from "../actions/bookActions";
import { login } from "../actions/securityActions";
import { connect } from "react-redux";


class Dashboard extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        // this.filter = this.filter.bind(this);
        this.state={
            search:"",
            search_by:"",
            filterBook: []
        }

    }


    componentDidMount() {
        this.props.getAllBooks();
    }

    onClick(e){
        // e.preventDefault();
        // const SearchRequest = {
        //     search: this.state.search,
        //     search_by: this.state.search_by
        // };
        // this.searchBooks("s");
        console.log(this.state.search);
        console.log(this.state.search_by);
        this.props.searchBooks(this.state.search)
        .then((response) => {
          this.setState({
            filterBook: response.data,
          });
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
        // this.props.searchBook(SearcRequest);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {books, security} = this.props;
        const {filterBook} = this.state;
        return (
        <div className="container">
        <div className="userInfo">

            <p>TODO: Retrieve and render user information (username, address and phone number) from securityReducer
            </p>
            <p>clickable UI components: 
                <li>Search bar</li>
                <li>Shopping Cart</li>
                <li>View Transaction</li>
                
                </p>
            
            {/* Displaying all backend data base here */}
            <h3>User logged in as</h3>
            <p>ID: {security.user.id}</p>
            <p>Username: {security.user.username}</p>
            <p>Full name: {security.user.fullName}</p>
            <p>Account type: {security.user.accountType}</p>

            <h3>List of All books</h3>
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


            <h3>Search book</h3>
            {/* <form > */}
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

            {/* </form> */}

            {/* <h5>Result</h5>
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
                {filterBook && filterBook.map((book)=>
                    <tr>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.isbn}</td>
                        <td>{book.category}</td>
                    </tr>
                )}
                </tbody>
            </table> */}


            <h3>My Cart</h3>

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
    };
  };

export default connect(mapStateToProps, {
    getAllBooks,
    searchBooks,
    login
})(Dashboard);
  
// export default Dashboard;
        