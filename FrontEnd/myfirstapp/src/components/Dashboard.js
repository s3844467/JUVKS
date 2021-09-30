import React, { Component } from 'react'
import { getAllBooks, searchBooksTitle, searchBooksAuthor,searchBookIsbn, getAllCategories, addBook} from "../actions/bookActions";
import { login } from "../actions/securityActions";
import { connect } from "react-redux";


class Dashboard extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.addBook = this.addBook.bind(this);
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
        window.location.href = "/dashboard";

        // this.props.searchBook(SearcRequest);
    }

    onClick(e){
        e.preventDefault();
        // const SearchRequest = {
        //     search: this.state.search,
        //     search_by: this.state.search_by
        // };
        // this.searchBooksTitle("s");
        if(this.state.search_by == "title"){
            this.props.searchBooksTitle(this.state.search);
        }
        else if(this.state.search_by == "author"){
            this.props.searchBooksAuthor(this.state.search);
        }
        else if(this.state.search_by == "isbn"){
            this.props.searchBookIsbn(this.state.search);
        }

        // this.props.searchBook(SearcRequest);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {books, security, category, errors} = this.props;
        const {filterBook} = this.state;
        return (<div></div>)
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
    searchBooksAuthor,
    searchBookIsbn,
    login,
    addBook
})(Dashboard);
  
// export default Dashboard;
        