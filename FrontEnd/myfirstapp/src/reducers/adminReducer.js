import { GET_VALIDATED_USERS,GET_PENDING_USERS,GET_BLOCKED_USERS} from "../actions/types";

const initialState = [];


function adminReducer(users = initialState, action) {
    const {type, payload} = action;


    switch(type) {
        case GET_VALIDATED_USERS:
            return {...users, validatedUsers: action.payload};
        case GET_PENDING_USERS:
            return {...users, pendingUsers: action.payload};
        case GET_BLOCKED_USERS:
            return {...users, blockedUsers: action.payload};
       
        default:
            return users;
    }

};

export default adminReducer;