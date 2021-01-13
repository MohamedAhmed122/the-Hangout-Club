import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Header, Segment } from 'semantic-ui-react'
import { getFollowersCollection, getFollowingCollection } from '../../../firebase/FirestoreServices'
import UseFirestoreCollection from '../../../Hooks/UseFirestoreCollection'
import { ListenToFollowers, ListenToFollowings } from '../../../redux/Profile/ProfileAction'
import ProfileCard from './ProfileCard'

export default function ProfileFollowers({title, profile}) {

    const dispatch = useDispatch()
    const {followers, followings, loading} = useSelector(state => state.profile)

    UseFirestoreCollection({
        query: 
            title === 'Followers' 
                ? () => getFollowersCollection(profile.id) 
                : () => getFollowingCollection(profile.id),
          data: (data) => 
            title === 'Followers'
                ? dispatch(ListenToFollowers(data))
                : dispatch(ListenToFollowings(data)),
            deps: [dispatch, title ]
    })
    return (
        <div style={{marginTop: '8rem', marginBottom:'2rem'}}>
            <Segment loading={loading}>
                <Header content={title} icon='user' />
                <Card.Group itemsPerRow={4}>
                    {
                        title === 'Followers' && followers.map(follower =>(
                            <ProfileCard profile={follower} key={follower.id} />
                        ))
                    }
                     {
                        title === 'Following' && followings.map(following =>(
                            <ProfileCard profile={following} key={following.id} />
                        ))
                    }
                    
                </Card.Group>
            </Segment>
        </div>
    )
}
