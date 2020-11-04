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
                    photoURL: payload.photoURL,
                    uid: payload.uid,
                    providerId: payload.providerData[0].providerId,
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