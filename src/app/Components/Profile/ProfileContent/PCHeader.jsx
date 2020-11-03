import React from 'react'
import { useSelector } from 'react-redux'
import {  Icon, Segment } from 'semantic-ui-react'
import HeaderRow from '../../../Common/HeaderRow/HeaderRow'
import './PCHeader.css'

export default function PCHeader() {

    const { currentUserProfile } = useSelector(state => state.profile)
    const { displayName, bornAt  ,liveAt,bio, photoURL, interests } = currentUserProfile;
    return (
        <div className='PC_header_main'>
            <div className='wrapper_header'
                style={{backgroundImage: `url(${tel})`}}>
                    <div className='header_info'>
                        <img src={ photoURL || tyalor} alt='' />
                      
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

const tyalor ='https://www.rollingstone.com/wp-content/uploads/2019/08/taylor-swift-ultimate-album-sheff.jpg'
const tel='https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54d447c3b4e79_-_esq110114esq_a014-share-swift.jpg'
