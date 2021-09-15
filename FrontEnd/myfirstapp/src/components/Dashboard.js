import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';
import initial from '../reducers/securityReducer';
import { getAllBooks } from "../actions/bookActions";
import { login } from "../actions/securityActions";
import { connect } from "react-redux";


class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.getAllBooks();
    }
    render() {
        const {books, security} = this.props;
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
            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Search</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">title</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">isbn</label>
            </div>            
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">author</label>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>

            </form>
            <h5>Result</h5>
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
        security: state.security
    };
  };

export default connect(mapStateToProps, {
    getAllBooks,
    login
})(Dashboard);
  
// export default Dashboard;
        