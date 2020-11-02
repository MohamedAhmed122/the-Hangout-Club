import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import './PCHeader.css'

export default function PCHeader() {
    return (
        <div className='PC_header_main'>
            <div className='wrapper_header'
                style={{backgroundImage: `url(${img})`}}>
                    <div className='header_info'>
                        <img src={tyalor} alt='' />
                        <h1>Tyalor Swift</h1>
                    </div>
            </div>
            <Segment style={{marginTop: '13rem', marginBottom: '3rem'}}>
            <div className='person_info'>
               
                    <h3>
                        <Icon name='user' color='teal' />
                        Tyalor Swift
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
const img= 'https://i.pinimg.com/originals/65/af/bc/65afbcedcc45273a23fd140fe07923b6.jpg'
const tyalor ='https://www.rollingstone.com/wp-content/uploads/2019/08/taylor-swift-ultimate-album-sheff.jpg'

