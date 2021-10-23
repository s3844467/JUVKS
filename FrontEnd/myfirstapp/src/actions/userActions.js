import axios from 'axios';
import {GET_ALL_USERS} from './types'
import React, {useState, useEffect} from "react";

export const getAllUsers = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/users/allUsers");
    dispatch({
        type: GET_ALL_USERS,
        payload: res.data
    });
};

// export const UserProfiles = () => {
//     const [userProfiles, setUserProfiles] = useState([]);
//     const fetchUserProfiles = () => {
//         axios.get("http://localhost:8080/api/users/allUsers").then(res => {
//             console.log(res);
//             setUserProfiles(res.data);
//         });
//     };

//     useEffect(() => {
//         fetchUserProfiles();
//     }, []);

//     return userProfiles.map((userProfile, index) => {
//         return (
//         <div key={index}>
//             <p>{userProfile.username}</p>
//             <p>{userProfile.id}</p>
//             <p>{userProfile.fullName}</p>
//         </div>
//         )
//     })
// };

