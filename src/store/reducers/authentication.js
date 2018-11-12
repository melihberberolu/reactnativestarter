import { AUTH_INIT, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from "../actions/actionTypes/index";


const initialState = {
  loading: false,
  error: null,
  errorMessage: null,
  memberData: null
};

const authReducer = ( initialState , action ) => {
    switch ( action.type ) {
        case AUTH_INIT: return {};
        case AUTH_SUCCESS: return {};
        case AUTH_FAIL: return {};
        case AUTH_LOGOUT: return {};
    }
};


export default authReducer;
