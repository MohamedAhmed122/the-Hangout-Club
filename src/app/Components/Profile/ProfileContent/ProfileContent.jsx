import React from 'react'
import PCHeader from './PCHeader'
import ProfilePhoto from './ProfilePhoto'
import  UseFirestoreCollection  from '../../../Hooks/UseFirestoreCollection'
import { ListenToUserPhoto } from '../../../redux/Profile/ProfileAction'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPhotos } from '../../../firebase/FirestoreServices'

export default function ProfileContent({isCurrentUser}) {
    const dispatch = useDispatch();
    const { selectedUserProfile : profile, photos } = useSelector(state => state.profile)
    const { loading } = useSelector(state => state.async)
    
  
    

    UseFirestoreCollection({
        query: ()=>getUserPhotos(profile.id),
        data: photo => dispatch(ListenToUserPhoto(photo)),
        deps: [dispatch ,profile.id]
    })
  
    return (
        <div>
            <PCHeader profile={profile}  isCurrentUser={isCurrentUser}/>
            <ProfilePhoto isCurrentUser={isCurrentUser} photos={photos} loading={loading}/>
        </div>
    )
}
