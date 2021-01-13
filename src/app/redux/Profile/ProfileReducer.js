import {
    LISTEN_TO_CURRENT_USER_PROFILE,
    LISTEN_TO_SELECTED_USER_PROFILE, 
    LISTEN_TO_USER_PHOTO,
    LISTEN_TO_FOLLOWERS, 
    LISTEN_TO_FOLLOWINGS
} from './ProfileType'

const initialState ={
    currentUserProfile: null,
    selectedUserProfile:null,
    photos: [],
    followers: [],
    followings : [],
    loading: true
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
        case LISTEN_TO_USER_PHOTO:
            return{
                ...state,
                photos: payload
            }
        case LISTEN_TO_FOLLOWERS:
            return{
                ...state,
                loading: false,
                followers: payload
            }
        case LISTEN_TO_FOLLOWINGS:
            return{
                ...state,
                loading: false,
                followings: payload
            }
        default: return state;
    }
}
export default ProfileReducer;