import {LISTEN_TO_CURRENT_USER_PROFILE, LISTEN_TO_SELECTED_USER_PROFILE } from './ProfileType'


export const ListenToUserProfile = profile =>({
    type: LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile
})

export const ListenToSelectedUserProfile = profile =>({
    type: LISTEN_TO_SELECTED_USER_PROFILE,
    payload: profile
})