import React from 'react'
import { useSelector } from 'react-redux'
import {  Icon, Segment } from 'semantic-ui-react'
import HeaderRow from '../../../Common/HeaderRow/HeaderRow'
import './PCHeader.css'

export default function PCHeader() {

    const { selectedUserProfile } = useSelector(state => state.profile)
    const { displayName, bornAt  ,liveAt,bio, photoURL, interests } = selectedUserProfile;
    return (
        <div className='PC_header_main'>
            <div className='wrapper_header'
                style={{backgroundImage: `url(${background})`}}>
                    <div className='header_info'>
                        <img src={ photoURL || '/assets/user.png'} alt='' />
                      
                    </div>
            </div>
            <Segment style={{marginTop: '7rem', marginBottom: '3rem'}}>
                <div className='person_info'>
                   {displayName && <HeaderRow name='user'>About {displayName}</HeaderRow>}
                    {bornAt && <HeaderRow name='birthday cake'> I am {bornAt } years old</HeaderRow>}
                    {liveAt?.address &&
                        <HeaderRow name='location arrow'> I Live in {liveAt.address }</HeaderRow>
                    }
                    {bio && <HeaderRow name='info'> Bio : {bio }</HeaderRow>}

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
                                <Icon name='heart' color='teal' />
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