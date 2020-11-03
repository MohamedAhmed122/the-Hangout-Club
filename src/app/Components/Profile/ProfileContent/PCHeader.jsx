import React from 'react'
import { useSelector } from 'react-redux'
import { Icon, Segment } from 'semantic-ui-react'
import './PCHeader.css'

export default function PCHeader() {

    const { currentUserProfile } = useSelector(state => state.profile)

    return (
        <div className='PC_header_main'>
            <div className='wrapper_header'
                style={{backgroundImage: `url(${tel})`}}>
                    <div className='header_info'>
                        <img src={currentUserProfile.photoURL || tyalor} alt='' />
                      
                    </div>
            </div>
            <Segment style={{marginTop: '7rem', marginBottom: '3rem'}}>
            <div className='person_info'>
               
                    <h3>
                        <Icon name='user' color='teal' />
                       { currentUserProfile.displayName}
                    </h3>
                    <h3>
                        <Icon name='birthday cake' color='teal' />
                        Was Born At 2020
                    </h3>
                    <h3>
                        <Icon name='map marker alternate' color='teal' />
                        Was Born in Egypt
                    </h3>
                    <h3>
                        <Icon name='warehouse' color='teal' />
                        I Live in Tomsk
                    </h3>
                    <h3>
                        <Icon name='info' color='teal' />
                        Bio : Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </h3>
                   
                </div>
            </Segment>
            <Segment style={{marginBottom: '4rem'}}>
                <div className='person_interest'>
                    <div>
                        My Interests :
                    </div>
                    <div>
                        <Icon name='heart' color='teal' />
                       Music
                    </div>
                    <div>
                        <Icon name='heart' color='teal' />
                       Film
                    </div>
                    <div>
                        <Icon name='heart' color='teal' />
                       Education
                    </div>
                   
                </div>
            </Segment>
        </div>
        
    )
}
const img= 'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const tyalor ='https://www.rollingstone.com/wp-content/uploads/2019/08/taylor-swift-ultimate-album-sheff.jpg'
const tel='https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54d447c3b4e79_-_esq110114esq_a014-share-swift.jpg'