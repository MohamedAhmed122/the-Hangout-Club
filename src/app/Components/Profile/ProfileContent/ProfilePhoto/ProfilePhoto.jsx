import React, { Fragment } from 'react'
import { Button, Icon, Segment } from 'semantic-ui-react'
import './StyleProfilePhoto.css'

export default function ProfilePhoto() {
    return (
        <Segment>
            <div className='profile_photo'>
                {
                    images.map(img=>(
                        <Fragment>
                            <div className='photo_top'>
                                <img key={img.id} src={img.img} alt='ii' />
                                <div className='btn_group'>
                                    <button className='photo_btn delete'>
                                        <Icon name='trash' 
                                        size='large' style ={{color: 'white'}} />
                                    </button>
                                    <button className='main photo_btn'>
                                        <Icon name='check'
                                        size='large' style ={{color: 'white'}} />
                                    </button>
                                </div>
                            </div>      
                            
                        </Fragment>
                      
                        
                    ))
                   
                }
            </div>
        </Segment>
        
    )
}

const images =[
    {id:1,  img: 'https://variety.com/wp-content/uploads/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=681&h=383&crop=1' },
    {id:2,  img: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F0449b194-ce5c-11ea-bbb4-8fadf03ff542.jpg?crop=1200%2C1500%2C525%2C0'},
    {id:3,  img: 'https://static01.nyt.com/images/2019/08/23/arts/23swift-news/merlin_157778103_3ea96033-cf73-4ab9-8e08-166e386ccdbd-superJumbo.jpg' },
    {id:4,  img:'https://static01.nyt.com/images/2019/08/23/arts/23swift-news/merlin_157778103_3ea96033-cf73-4ab9-8e08-166e386ccdbd-superJumbo.jpg' },
    {id:5,  img:'https://talentrecap.com/wp-content/uploads/2020/04/Taylor-Swift-Instagram-1200x900.png' }

]