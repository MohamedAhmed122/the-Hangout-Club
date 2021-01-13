import {
    LISTEN_TO_CURRENT_USER_PROFILE,
    LISTEN_TO_SELECTED_USER_PROFILE, 
    LISTEN_TO_USER_PHOTO,
    LISTEN_TO_FOLLOWERS, 
    LISTEN_TO_FOLLOWINGS
} from './ProfileType'


export const ListenToUserProfile = profile =>({
    type: LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile
})

export const ListenToSelectedUserProfile = profile =>({
    type: LISTEN_TO_SELECTED_USER_PROFILE,
    payload: profile
})

export const ListenToUserPhoto = photo =>({
    type: LISTEN_TO_USER_PHOTO,
    payload: photo
})

export const ListenToFollowers = followers =>({
    type: LISTEN_TO_FOLLOWERS,
    payload: followers
})



export const ListenToFollowings = followings =>({
    type: LISTEN_TO_FOLLOWINGS,
    payload: followings
})
