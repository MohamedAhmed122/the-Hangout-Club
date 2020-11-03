import {LISTEN_TO_CURRENT_USER_PROFILE,LISTEN_TO_SELECTED_USER_PROFILE } from './ProfileType'

const initialState ={
    currentUserProfile: null,
    selectedUserProfile:null,
}

const ProfileReducer  =(state = initialState, {type, payload}) =>{
    switch(type){
        case LISTEN_TO_CURRENT_USER_PROFILE:
            return{
                ...state,
                currentUserProfile: payload
            }
        case LISTEN_TO_SELECTED_USER_PROFILE:
            return{
                ...state,
                selectedUserProfile: payload
            }
        default: return state;
    }
}
export default ProfileReducer;