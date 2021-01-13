import React, { useEffect, useState } from 'react'

import {  Button, Divider, Icon, Reveal, Segment, Statistic } from 'semantic-ui-react'
import { toast } from 'react-toastify'

import { followUser, getFollowingDoc, unfollowUser } from '../../../firebase/FirestoreServices'
import HeaderRow from '../../../Common/HeaderRow/HeaderRow'

import './PCHeader.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFollowUser, setUnFollowUser } from '../../../redux/Profile/ProfileAction'

export default function PCHeader({isCurrentUser,profile}) {

    const [loading, setLoading ] = useState(false)
    const { displayName, bornAt  ,liveAt,bio, photoURL, interests } = profile;
    const {followingUser } = useSelector(state =>state.profile)
    const dispatch = useDispatch();

    useEffect(() => {
        if (isCurrentUser) return;
        setLoading(true);
        async function fetchFollowingDoc() {
          try {
            const followingDoc = await getFollowingDoc(profile.id);
            if (followingDoc && followingDoc.exists) {
              dispatch(setFollowUser())
            }
          } catch (error) {
            toast.error(error.message);
          }
        }
        fetchFollowingDoc().then(() => setLoading(false));
        // return () => {
        //   dispatch({type: CLEAR_FOLLOWINGS})
        // }
      }, [dispatch, profile.id, isCurrentUser])
    const handleFollowingUser = async () =>{
        setLoading(true)
        try {
            await followUser(profile)
            dispatch(setFollowUser())
        } catch (error) {
            toast.error(`Oops, ${error} `)
            console.log(error);
        }finally{
            setLoading(false)
        }
    }
    const handleUnfollowUser = async () =>{
        setLoading(true)
        try {
            await unfollowUser(profile)
            dispatch(setUnFollowUser())
        } catch (error) {
            toast.error(`Oops, ${error} `)
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className='PC_header_main'>
            <div className='wrapper_header'
                style={{backgroundImage: `url(${background})`}}>
                    <div className='header_info'>
                        <img src={ photoURL || '/assets/user.png'} alt='' />
                      
                    </div>
            </div>
            <Segment  className='person_segment' >
                <div className='person_info'>
                   {displayName && <HeaderRow name='user'>About {displayName}</HeaderRow>}
                    {bornAt && <HeaderRow name='birthday cake'> I am {bornAt } years old</HeaderRow>}
                    {liveAt?.address &&
                        <HeaderRow name='location arrow'> I Live in {liveAt.address }</HeaderRow>
                    }
                    {bio && <HeaderRow name='info'> Bio : {bio }</HeaderRow>}

                </div>
                <div style={{marginRight :'2rem'}}>
                <Statistic.Group>
                        <Statistic label='Followers' value={profile.followerCount || 0} />
                        <Statistic label='Following' value={profile.followingCount || 0}  />
                    </Statistic.Group>
                    {!isCurrentUser &&
                    <>
                     <Divider />
                    <Reveal animated='move'>
                        <Reveal.Content visible style={{ width: '100%' }}>
                        <Button fluid color='teal' content={followingUser ? 'Following' : 'Not following'} />
                        </Reveal.Content>
                        <Reveal.Content hidden style={{ width: '100%' }}>
                        <Button
                            onClick={followingUser ? () => handleUnfollowUser() : () => handleFollowingUser()}
                            loading={loading}
                            basic
                            fluid
                            color={followingUser ? 'red' : 'green'}
                            content={followingUser ? 'Unfollow' : 'Follow'}
                        />
                        </Reveal.Content>
                    </Reveal>
                 
                    </>}
                </div>
            </Segment>
            <Segment style={{marginBottom: '4rem'}}>
                <div className='person_interest'>
                    <div>
                        My Interests :
                    </div>
                    {
                        interests?.map(interest =>(
                            <div key={interest}>
                                <Icon name='heart' color='teal' style={{margin: '10px 5px'}} />
                                {interest}
                            </div>
                        ))
                    }
                   
                </div>
            </Segment>
        </div>
        
    )
}



const background ='https://dso7hsslwo1ge.cloudfront.net/images/sources/000/015/131/fullbox/HR_analytics_banner.jpg?1522051784'