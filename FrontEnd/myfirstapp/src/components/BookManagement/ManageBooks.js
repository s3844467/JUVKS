import React, { Component } from 'react'
import { getAllCategories, updateBook, searchBooksUserId, addImage } from "../../actions/bookActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import SideMenu from '../Layout/SideMenu';

import "../Styles/ManageBooks.css";

class ManageBooks extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state={
            activeProduct: [],
            updateBook_id: 0,
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
        this.props.searchBooksUserId(this.props.security.user.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.books.length > 0 
                && this.state.updateBook_quantity !== nextProps.books[0].quantity
                        && this.state.updateBook_price !== nextProps.books[0].price) {
            this.setState({
                activeProduct: nextProps.books[0], 
                updateBook_id: nextProps.books[0].id,
                updateBook_quantity: nextProps.books[0].quantity,
                updateBook_price: nextProps.books[0].price,
                updateBook_title: nextProps.books[0].title,
                updateBook_author: nextProps.books[0].author,
                updateBook_category: nextProps.books[0].category,
                updateBook_isbn: nextProps.books[0].isbn,
                updateBook_image: nextProps.books[0].image,
                updateBook_status: nextProps.books[0].book_status,
                updateBook_description: nextProps.books[0].description
            });
        }
    }

    async updateImage(e){
        const formData = new FormData();

        formData.append('file', this.state.updateBook_image);
        formData.append('id', this.state.updateBook_id);

        await this.props.addImage(formData);
        if(! this.props.errors.data){
            window.location.href = "/manage/books";
        }

        
    }

    onChangeImage(e){
        this.setState({updateBook_image: e.target.files[0]});
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    updateBook(e){
        e.preventDefault();

        const updateBookRequest = {
            id: this.state.updateBook_id,
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

        window.location.pathname = "/manage/books";
    }

    render() {
        const {category, books, errors, security} = this.props;

        return (
            <div className="main">
                <SideMenu/>
                <div className="main-content">
                    <div className="product-container">
                        {(books && books.length > 0) &&
                            books.map((book) => (
                                <div className="product-card" id={book.id} onClick={() => {
                                    this.setState({
                                        activeProduct: book,
                                        updateBook_id: book.id,
                                        updateBook_title: book.title,
                                        updateBook_author: book.author,
                                        updateBook_category: book.category,
                                        updateBook_isbn: book.isbn,
                                        updateBook_book_status: book.status,
                                        updateBook_description: book.description,
                                        updateBook_user_id: parseInt(this.props.security.user.id),
                                        updateBook_price: book.price,
                                        updateBook_quantity: book.quantity
                                    })
                                }}>
                                    <div className="product-img">
                                        <img 
                                        className="product-img" 
                                        src={"http://localhost:8081/api/images/files/"+book.id} 
                                        alt={book.title}/>
                                    </div>
                                    <div className="product-details">
                                        <div className="product-header">
                                            <span className="product-title">{book.title}</span>
                                        </div>
                                        <div className="product-btns">
                                            <div className="product-detail">
                                                <span>Quantity</span>
                                                <span>{book.quantity}</span>
                                            </div>
                                            <div className="product-detail">
                                                <span>Price</span>
                                                <span>${book.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="update-content">
                        <div className="update-container">
                            {this.state.activeProduct && 
                            <>
                                <div className="">
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Title</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder={this.state.activeProduct.title}
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
                                            placeholder={this.state.activeProduct.author}
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
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Publisher (ISBN)</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder={this.state.activeProduct.isbn}
                                                    name="updateBook_isbn"
                                                    value={this.state.updateBook_isbn}
                                                    onChange = {this.onChange}
                                                />
                                                {errors.data && errors.data.isbn &&(
                                                <div className="text-danger">{errors.data.isbn}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Description</label>
                                        <textarea  
                                            rows="4" 
                                            className="form-control" 
                                            placeholder={this.state.activeProduct.description}
                                            name="updateBook_description"
                                            value={this.state.updateBook_description}
                                            onChange = {this.onChange}
                                            required
                                        ></textarea>
                                    {errors.data && errors.data.description &&(
                                        <div className="text-danger">{errors.data.description}</div>
                                    )}
                                    </div>
                                    

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
                                        <div className="d-flex">
                                        <div className="product-img mb-3 mr-3">
                                            <img 
                                            src={"http://localhost:8081/api/images/files/"+this.state.updateBook_id} 
                                            alt={this.state.updateBook_title}/>
                                        </div>
                                        </div>
                                        <div>
                                            <div className="form-group col">
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
                                            <div className="d-flex">
                                                <div className="col form-group">
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
                                                <div className="col form-group">
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
                                    </div>
                                    <button className="btn btn-primary mb-2" onClick={this.updateBook}>Update</button>
                                    
                                    {errors.data && errors.data.message && (
                                        <div className="text-danger">{errors.data.message}</div>
                                    )}

                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Change Image</label>
                                        <input 
                                            type="file" 
                                            accept="image/png, image/jpeg"
                                            formEncType="multipart/form-data"
                                            className="form-control-file" 
                                            name="updateBook_image"
                                            // value={this.state.updateBook_image}
                                            onChange = {this.onChangeImage}
                                        />
                                    </div>
                                    {errors.data && errors.data.file &&(
                                        <div className="text-danger">{errors.data.file}</div>
                                    )}
                                    <button className="btn btn-primary mb-2" onClick={this.updateImage}>Upload Image</button>

                                </div> 
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category:state.category,
        errors: state.errors,
        books: state.books,
        security: state.security
    };
};

export default connect(mapStateToProps, {
    getAllCategories,
    updateBook,
    searchBooksUserId,
    addImage
})(ManageBooks);      