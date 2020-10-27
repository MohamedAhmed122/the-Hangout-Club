import {SIGN_IN_USER ,SIGN_OUT_USER} from './AuthType'


const initialState = {
    isAuthenticated: false,
    currentUser: null
}

const AuthReducer = (state = initialState , {type, payload}) =>{
    switch(type){
        case SIGN_IN_USER:
            return{
                ...state,
                isAuthenticated: true,
                currentUser:{
                    email: payload.email,
                    photoURl:'/assets/user.png',
                    displayName: payload.displayName 
                }
            }
        case SIGN_OUT_USER:
            return{
                ...state,
                isAuthenticated: false,
                currentUser: null
            }
        default: 
        return state;
    }
}
export default AuthReducer;