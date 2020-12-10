import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileMain from '../../Components/Profile/ProfileMain/ProfileMain'
import Loading from '../../Common/Loading/Loading'
import UseFirestoreDoc from '../../Hooks/useFirestoreDoc'
import {ListenToSelectedUserProfile} from '../../redux/Profile/ProfileAction'
import { getUserProfile } from '../../firebase/FirestoreServices'
import Navbar from '../../layouts/Header/Header'


export default function ProfilePage({match}) {

 
        const dispatch = useDispatch();
        const { selectedUserProfile } = useSelector((state) => state.profile);
        const { currentUser } = useSelector((state) => state.auth);
      
        const { loading, error } = useSelector((state) => state.async);
      
        UseFirestoreDoc({
          query: () => getUserProfile(match.params.id),
          data: (profile) => dispatch(ListenToSelectedUserProfile(profile)),
          deps: [dispatch, match.params.id],
        });
      
        if ((loading && !selectedUserProfile) || (!selectedUserProfile && !error))
          return <Loading />;
 
    return (
        <>
            <Navbar />
            <ProfileMain  isCurrentUser={currentUser.uid === selectedUserProfile.id}/>
        </>
    )
}
