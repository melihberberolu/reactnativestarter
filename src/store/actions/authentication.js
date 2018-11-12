import { AUTH_INIT, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from "./actionTypes";
import { writeStorage } from 'helpers/storage';
import { makeRequest } from "helpers/request";


const authInit = () => {
    return {
        type: AUTH_INIT,
        loading: true,
        error: null,
    }
};

const loginRequest = async(email, password) => {
    await makeRequest("POST", "", { email, password } )
        .then(response => {
            writeStorage("memberLoginData", response.data.memberData);
            authSuccess(response.data.memberData);
        }).catch(error => {
            console.log(error);
        })
};

const registerRequest = async( name, surname, email, password ) => {
    await makeRequest("POST", "", { name, surname, email, password })
        .then(response => {

        })
        .catch(error => {
            console.log(error);
        })
};

const authSuccess = ( memberData ) => {
    return {
        type: AUTH_SUCCESS,
        loading: false,
        memberData
    }
};

const authFail = ( error, errorMessage ) => {
    return {
        type: AUTH_FAIL,
        error: true,
        errorMessage
    }
};

const authLogout = () => {
    return {
        type: AUTH_LOGOUT,
        memberData: null,
        loading: false
    }
};
