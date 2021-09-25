import React, { Component } from 'react';
import { getBookById } from "../../actions/bookActions";
import { connect } from "react-redux";

import "../Styles/Book.css";

class Book extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.getBookById(this.props.match.params.id);
    }

    render() {
        const {book} = this.props;
        return (
            <div className="container">
                <div>
                    <div>

                    </div>
                    <div>
                        <h1>
                            {/* {book.title} */}
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.book
    };
  };

export default connect(mapStateToProps, {
    getBookById
})(Book);
// export default Dashboard;
        