import { auth } from "../../firebase";

export const loginSuccessAction = ()=>{
    return {
        type: "LOGIN_SUCCESS",
        payload: auth.currentUser?.toJSON()
    }
};

export const registerSuccessAction = ()=>{
    return {
        type:"REGISTER_SUCCESS",
        payload: auth.currentUser?.toJSON()
    }
};

export const signOutAction = ()=>{
    return {
        type:"SIGN_OUT"
    }
};