import {SIGN_IN_USER ,SIGN_OUT_USER} from './AuthType'
import firebase from '../../firebase/firebase.config'
import {APP_LOADED} from '../Async/AsyncType'
import { dataFromSnapshot, getUserProfile} from '../../firebase/FirestoreServices'
import { ListenToUserProfile } from '../Profile/ProfileAction';



const auth = firebase.auth();


export const signInUser = user =>({
    type: SIGN_IN_USER,
    payload: user
})


export const verifyAuth = () =>{
    return (dispatch=>{
       
        return auth.onAuthStateChanged(user =>{
          if (user){
            dispatch(signInUser(user))
            const profileRef = getUserProfile(user.uid)
            profileRef.onSnapshot(snapShot =>{
              dispatch(ListenToUserProfile(dataFromSnapshot(snapShot)))
              dispatch({type: APP_LOADED})
            })
           
          }else{
            dispatch(signOutUser())
            dispatch({type: APP_LOADED})
          }
        })
      })
}

export const signOutUser = () =>({
    type: SIGN_OUT_USER
})