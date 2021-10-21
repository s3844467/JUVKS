import { GET_ALL_USERS} from "../actions/types";

const initialState = [];


function userReducer(users = initialState, action) {
    const {type, payload} = action;


    switch(type) {
        case GET_ALL_USERS:
            return payload;

        default:
            return users;
    }

};

export default userReducer;