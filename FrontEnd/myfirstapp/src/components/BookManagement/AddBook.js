import React, { Component } from 'react'
import { getAllCategories, addBook} from "../../actions/bookActions";
import { connect } from "react-redux";


class AddBook extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.addBook = this.addBook.bind(this);
        this.state={
            addBook_title: "",
            addBook_author: "",
            addBook_price: "",
            addBook_quantity: "1",
            addBook_category:"",
            addBook_isbn: "",
            addBook_image: "",
            addBook_status: "used",
            addBook_description: "",
            message:""
        }
    }


    componentDidMount() {
        this.props.getAllCategories();
    }

    addBook(e){
        e.preventDefault();
        const addBookRequest = {
            title: this.state.addBook_title,
            author: this.state.addBook_author,
            category: this.state.addBook_category,
            isbn: this.state.addBook_isbn,
            book_status: this.state.addBook_status,
            description: this.state.addBook_description,
            owner_user_id: this.props.security.user.id,
            price: this.state.addBook_price,
            quantity: this.state.addBook_quantity

        };
        this.props.addBook(addBookRequest);

        if (! this.props.errors){
            this.setState({message: "Book is added sucessfully"})
        }else{
            this.setState({message: "There was error adding the book"})
        }

        // window.location.href = "/addbook";

        

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const {category, errors, security, books} = this.props;
        return (
            
        <div className="container">

        <div className="row">
            <div className="col-md-8 m-auto">
            <h3>Add book</h3>

            {this.state.message && errors.data &&(
                <div className="alert alert-danger">{this.state.message}</div>
            )}
            {this.state.message && ! errors.data &&(
                <div className="alert alert-success">{this.state.message}</div>
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
                    placeholder="Author"
                    name="addBook_author"
                    value={this.state.addBook_author}
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
                        className="form-control" 
                        placeholder="$0.00"
                        name="addBook_price"
                        value={this.state.addBook_price}
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
                        defaultValue="1"
                        name="addBook_quantity"
                        value={this.state.addBook_quantity}
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
                    placeholder="ISBN"
                    name="addBook_isbn"
                    value={this.state.addBook_isbn}
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
                    placeholder="Description of the book"
                    name="addBook_description"
                    value={this.state.addBook_description}
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
                    accept="image/png, image/jpeg"
                    formEncType="multipart/form-data"
                    className="form-control-file" 
                    name="addBook_image"
                    value={this.state.addBook_image}
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
                    name="addBook_category" 
                    onChange = {this.onChange}
                    required
                >
                <option defaultValue>Open this select menu</option>
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
                    name="addBook_status" 
                    onChange = {this.onChange}
                >
                <option defaultValue key="used" value="used">Used</option>

                {security.validToken && security.user.accountType == "public" ?
                <>
                    <option key="new" value="new" disabled>New</option>
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
            
            {/* Submit if user is logged in */}
            {security.validToken ?
            <>
                <button className="btn btn-primary mb-2" onClick={this.addBook}>Submit</button>
            
            </>:
                <button className="btn btn-primary mb-2" onClick={this.addBook} disabled>Submit</button>
            }
            
            {errors.data && errors.data.message && (
                <div className="text-danger">{errors.data.message}</div>
            )}
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
        security: state.security,
        books: state.books
    };
  };

export default connect(mapStateToProps, {
    getAllCategories,
    addBook,
})(AddBook);
  