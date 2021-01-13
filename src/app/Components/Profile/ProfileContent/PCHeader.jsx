import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {  Button, Divider, Icon, Reveal, Segment, Statistic } from 'semantic-ui-react'
import { toast } from 'react-toastify'

import { followUser, unfollowUser } from '../../../firebase/FirestoreServices'
import HeaderRow from '../../../Common/HeaderRow/HeaderRow'

import './PCHeader.css'

export default function PCHeader({isCurrentUser}) {

    const [loading, setLoading ] = useState(false)

    const { selectedUserProfile : profile } = useSelector(state => state.profile)
    const { displayName, bornAt  ,liveAt,bio, photoURL, interests } = profile;

    
    const handleFollowingUser = async () =>{
        setLoading(true)
        try {
            await followUser(profile)
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
                        <Statistic label='Followers' value={10} />
                        <Statistic label='Following' value={5} />
                    </Statistic.Group>
                    {!isCurrentUser &&
                    <>
                    <Divider />
                    <Reveal animated='move'>
                        <Reveal.Content visible style={{width: '100%'}}>
                            <Button fluid color='teal' content='Following' />
                        </Reveal.Content>
                        <Reveal.Content hidden style={{width: '100%'}}>
                            <Button 
                            basic 
                            onClick={handleFollowingUser} 
                            fluid 
                            color='green' 
                            content='Follow'
                            loading={loading} />
                        </Reveal.Content>
                    </Reveal>
                    <Button 
                            basic 
                            onClick={handleUnfollowUser} 
                            fluid 
                            color='red' 
                            content='UnFollow'
                            loading={loading} />
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