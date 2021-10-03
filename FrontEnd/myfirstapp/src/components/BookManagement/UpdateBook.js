import React, { Component } from 'react'
import { getAllCategories, updateBook, searchBookId} from "../../actions/bookActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class UpdateBook extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.state={
            updateBook_title: "",
            updateBook_author: "",
            updateBook_price: "",
            updateBook_quantity: "1",
            updateBook_category:"",
            updateBook_isbn: "",
            updateBook_image: "",
            updateBook_status: "used",
            updateBook_description: ""
        }

    }

    componentDidMount() {
        this.props.getAllCategories();
        this.props.searchBookId(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.book.length > 0 
                && this.state.updateBook_quantity !== nextProps.book[0].quantity
                        && this.state.updateBook_price !== nextProps.book[0].price) {
            this.setState({updateBook_quantity: nextProps.book[0].quantity});
            this.setState({updateBook_price: nextProps.book[0].price});
            this.setState({updateBook_title: nextProps.book[0].title});
            this.setState({updateBook_author: nextProps.book[0].author});
            this.setState({updateBook_category: nextProps.book[0].category});
            this.setState({updateBook_isbn: nextProps.book[0].isbn});
            this.setState({updateBook_status: nextProps.book[0].book_status});
            this.setState({updateBook_description: nextProps.book[0].description});
        }
    }

    updateBook(e){
        e.preventDefault();
        const updateBookRequest = {
            id: parseInt(this.props.match.params.id),
            title: this.state.updateBook_title,
            author: this.state.updateBook_author,
            category: this.state.updateBook_category,
            isbn: this.state.updateBook_isbn,
            book_status: this.state.updateBook_status,
            description: this.state.updateBook_description,
            user_id: parseInt(this.props.security.user.id),
            price: this.state.updateBook_price,
            quantity: this.state.updateBook_quantity
        };

        this.props.updateBook(updateBookRequest);

        window.location.href = "/books/"+this.props.match.params.id;
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {category, book, errors, security} = this.props;

        return (
            
        <div className="container">
            {(book[0] && book[0].id === parseInt(this.props.match.params.id)) &&
            <div className="row">

                {parseInt(security.user.id) !== book[0].user_id &&
                <>
                    <Redirect to="/dashboard"/>
                </>}
                <div className="col-md-8 m-auto">
                    <h3>Update {book[0].title}</h3>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder={book[0].title}
                            name="updateBook_title"
                            value={this.state.updateBook_title}
                            onChange = {this.onChange}
                            required
                        />
                        {errors.data && errors.data.title &&(
                        <div className="text-danger">{errors.data.title}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Author</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder={book[0].author}
                            name="updateBook_author"
                            value={this.state.updateBook_author}
                            onChange = {this.onChange}
                            required
                        />
                    {errors.data && errors.data.author &&(
                        <div className="text-danger">{errors.data.author}</div>
                    )}
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Price</label>
                                <input 
                                    type="number" 
                                    min="0"
                                    className="form-control" 
                                    name="updateBook_price"
                                    value={this.state.updateBook_price}
                                    onChange = {this.onChange}
                                    required
                                />
                            {errors.data && errors.data.price &&(
                                <div className="text-danger">{errors.data.price}</div>
                            )}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Quantity</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    min="1"
                                    name="updateBook_quantity"
                                    value={this.state.updateBook_quantity}
                                    onChange = {this.onChange}
                                    required
                                />
                            {errors.data && errors.data.quantity &&(
                                <div className="text-danger">{errors.data.quantity}</div>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Publisher (ISBN)</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder={book[0].isbn}
                            name="updateBook_isbn"
                            value={this.state.updateBook_isbn}
                            onChange = {this.onChange}
                        />
                        {errors.data && errors.data.isbn &&(
                        <div className="text-danger">{errors.data.isbn}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Description</label>
                        <textarea  
                            rows="4" 
                            className="form-control" 
                            placeholder={book[0].description}
                            name="updateBook_description"
                            value={this.state.updateBook_description}
                            onChange = {this.onChange}
                            required
                        ></textarea>
                    {errors.data && errors.data.description &&(
                        <div className="text-danger">{errors.data.description}</div>
                    )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Upload Image</label>
                        <input 
                            type="file" 
                            className="form-control-file" 
                            name="updateBook_image"
                            value={this.state.updateBook_image}
                            onChange = {this.onChange}
                        />
                    </div>
                    {errors.data && errors.data.image &&(
                        <div className="text-danger">{errors.data.image}</div>
                    )}

                <div className="row">
                    <div className="col">
                
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Category</label>
                            <select className="form-control" 
                                name="updateBook_category" 
                                onChange = {this.onChange}
                                required
                            >
                            <option defaultValue>{this.state.updateBook_category}</option>
                            {category && category.map((c) => (
                                <option key={c.categoryName} value={c.categoryName}>{c.categoryName}</option>
                            ))}
                            </select>
                            {errors.data && errors.data.category &&(
                                <div className="text-danger">{errors.data.category}</div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Book status</label>
                            <select className="form-control" 
                                name="updateBook_status" 
                                onChange = {this.onChange}
                            >
                            <option defaultValue key="used" value="used">Used</option>
                            {security.validToken && security.user.accountType === "public" ?
                            <>
                                <option key="new" value="new" disabled={true}>New</option>
                            </>
                            :
                            <>
                                <option key="new" value="new">New</option>
                            </>
                            }
                            </select>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary mb-2" onClick={this.updateBook}>Submit</button>
                
                {errors.data && errors.data.message && (
                    <div className="text-danger">{errors.data.message}</div>
                )}
                </div> 
                
            </div>
            }   
         </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category:state.category,
        errors: state.errors,
        security: state.security,
        book: state.books
    };
  };

export default connect(mapStateToProps, {
    getAllCategories,
    updateBook,
    searchBookId
})(UpdateBook);
  