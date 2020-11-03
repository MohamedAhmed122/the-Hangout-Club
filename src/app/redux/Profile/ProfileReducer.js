import {LISTEN_TO_CURRENT_USER_PROFILE } from './ProfileType'

const initialState ={
    currentUserProfile: null
}

const ProfileReducer  =(state = initialState, {type, payload}) =>{
    switch(type){
        case LISTEN_TO_CURRENT_USER_PROFILE:
            return{
                ...state,
                currentUserProfile: payload
            }
        default: return state;
    }
}
export default ProfileReducer;