import {LISTEN_TO_CURRENT_USER_PROFILE } from './ProfileType'


export const ListenToUserProfile = profile =>({
    type: LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile
})