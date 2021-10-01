import React, { Component } from 'react'
import { connect } from "react-redux";


class Dashboard extends Component {
    render() {
        return (
        <div className="container"/>
    )};
}

const mapStateToProps = (state) => {
    console.log("Dashboard Initial state is")
    console.log(state);
    return {
        books: state.books
    };
};
export default connect(mapStateToProps)(Dashboard);
  
// export default Dashboard;
        