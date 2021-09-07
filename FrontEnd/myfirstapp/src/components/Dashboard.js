import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';
import initial from '../reducers/securityReducer';

class Dashboard extends Component {

    render() {
        return (
        <div className="userInfo">

            <p>TODO: Retrieve and render user information (username, address and phone number) from securityReducer
            </p>
            <p>clickable UI components: 
                <li>Search bar</li>
                <li>Shopping Cart</li>
                <li>View Transaction</li>
                
                </p>
            
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
// export default Dashboard;
        