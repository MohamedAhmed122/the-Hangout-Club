import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileMain from '../../Components/Profile/ProfileMain/ProfileMain'
import Loading from '../../Common/Loading/Loading'
import UseFirestoreDoc from '../../Hooks/useFirestoreDoc'
import {ListenToUserProfile} from '../../redux/Profile/ProfileAction'
import { getUserProfile } from '../../firebase/FirestoreServices'
export default function ProfilePage({match}) {

    const dispatch = useDispatch()
    const { currentUserProfile } = useSelector(state => state.profile);
    const { loading, error } = useSelector(state => state.async)

    UseFirestoreDoc({
    query: () => getUserProfile(match.params.id),
    data: (profile) => dispatch(ListenToUserProfile(profile)),
    deps: [dispatch, match.params.id],
    });

    if ((loading && !currentUserProfile) || (!currentUserProfile && !error))
    return <Loading >Loading Profile...</Loading>

    return (
        <div>
            <ProfileMain />
        </div>
    )
}
