

export const authReducer = (state=null,action:any)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return action.payload;
        case "SIGN_OUT":
            return null;
        default:
            return state;
    }
}

