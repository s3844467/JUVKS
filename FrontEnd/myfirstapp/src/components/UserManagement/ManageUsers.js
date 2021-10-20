import React, { Component } from 'react';

// import { getValidatedUsers, getPendingUsers, getBLockedUsers, blockUser, unblockUser, validateUser } from "../../actions/adminAction";

import { connect } from "react-redux";

import { Link } from 'react-router-dom';



import "../Styles/Cart.css";



class ManageUsers extends Component {

    constructor(props) {

        super(props);



        // this.onCheckOut = this.onCheckOut.bind(this);

        // this.onChange = this.onChange.bind(this);



    }



    componentDidMount() {

        if (this.props.security.validToken) {

            // this.props.getValidatedUsers();

            // this.props.getBLockedUsers();

        }

    }



    onChange(e) {

        const updatedValidatedUsers = new Map(this.state.validatedUsers);

        const updatedBlockedUsers = new Map(this.state.blockedUsers);



    }



    render() {

        // const {users} = this.props

        return(

            <div className="container">

                <div className="validated-users">

                    <h1>Validated users</h1>

                    <>

                      {/* {users.validatedUsers}   */}

                    </>

                    <div className="user">



                    

                    </div>

                </div>

                <div className="blocked-users">

                    <>

                        {/* {users.blockedUsers} */}

                    </>



                </div>

            </div>

        )

    }

}



const mapStateToProps = (state) => {

    return {

        // users: state.users,
        security:state.security
    };

  };



export default connect(mapStateToProps, {

    // getValidatedUsers,
// 
    // getBLockedUsers

})(ManageUsers);