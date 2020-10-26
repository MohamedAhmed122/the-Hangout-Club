import {SIGN_IN_USER ,SIGN_OUT_USER} from './AuthType'
import firebase from '../../firebase/firebase.config'


const auth = firebase.auth();

// sign in with Firebase Email, Password
export const signInUser = user =>({
    type: SIGN_IN_USER,
    payload: user
})

 // presist login
export const verifyAuth = () =>{
    return async(dispatch)=>{
        return auth.onAuthStateChanged(user=>{
            if(user){
                dispatch(signInUser(user))
            }else{
                dispatch(signOutUser())
            }
        })
    }
}

export const signOutUser = () =>({
    type: SIGN_OUT_USER
})