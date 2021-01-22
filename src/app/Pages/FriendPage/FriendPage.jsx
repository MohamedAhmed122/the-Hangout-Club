import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Common/Loading/Loading';
import ProfileFollowers from '../../Components/Profile/ProfileContent/ProfileFollowers';
import { getUserProfile } from '../../firebase/FirestoreServices';
import UseFirestoreDoc from '../../Hooks/useFirestoreDoc';
import { ListenToSelectedUserProfile } from '../../redux/Profile/ProfileAction';

export default function FriendPage({match}) {

    const dispatch = useDispatch();
    const { selectedUserProfile :profile } = useSelector((state) => state.profile);
    const { loading, error } = useSelector((state) => state.async);

  
    UseFirestoreDoc({
      query: () => getUserProfile(match.params.id),
      data: (profile) => dispatch(ListenToSelectedUserProfile(profile)),
      deps: [dispatch, match.params.id],
    });

    if ((loading && !profile) || (!profile && !error))
    return <Loading />;
  
    return (
        <div className='tab_main'>
            <div className='tab' style={{marginBottom: '5rem'}}>
                <ProfileFollowers title='Followers' profile={profile} />
                <ProfileFollowers title='Following' profile={profile} />
            </div>
        </div>
    )
}
