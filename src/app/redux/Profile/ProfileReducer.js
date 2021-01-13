import {
    LISTEN_TO_CURRENT_USER_PROFILE,
    LISTEN_TO_SELECTED_USER_PROFILE, 
    LISTEN_TO_USER_PHOTO,
    LISTEN_TO_FOLLOWERS, 
    LISTEN_TO_FOLLOWINGS,
    SET_UNFOLLOW_USER,
    SET_FOLLOW_USER,
    CLEAR_FOLLOWINGS
} from './ProfileType'

const initialState ={
    currentUserProfile: null,
    selectedUserProfile:null,
    photos: [],
    followers: [],
    followings : [],
    loading: true,
    followingUser: false
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
        case SET_FOLLOW_USER:
            return{
                ...state,
                followingUser:true
            }
        case SET_UNFOLLOW_USER:
            return{
                ...state,
                followingUser:false
            }
        case  CLEAR_FOLLOWINGS:
            return{
                ...state,
                followers:[],
                followings:[],
            }
        default: return state;
    }
}
export default ProfileReducer;