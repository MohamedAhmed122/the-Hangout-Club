import React, { Fragment } from 'react'
import { toast } from 'react-toastify'
import {  Icon, Segment } from 'semantic-ui-react'
import Loading from '../../../Common/Loading/Loading'
import { setPhotoToMain } from '../../../firebase/FirestoreServices'
import './StyleProfilePhoto.css'

export default function ProfilePhoto({loading, photos}) {
  
    const handleSetPhotoToMain = async photo =>{
        try {
           await setPhotoToMain(photo) 
        } catch (error) {
            toast.error(error.message)
        }
    }

    if(loading) return <Loading />

    return (
        <Segment style={{marginBottom: '4rem'}}>
             {/* <h3>
                <Icon name='camera' color='teal' />
                My Gallery
            </h3> */}
            <div className='profile_photo'>
               
                {
                    photos.map(img=>(
                        <Fragment key={img.id}  >
                            <div className='photo_top'>
                                <img src={img.url} alt='ii' />
                                <div className='btn_group'>
                                    <button className='photo_btn delete'>
                                        <Icon  name='trash' 
                                        size='large' style ={{color: 'white',}} />
                                    </button>
                                    <button  onClick={()=>handleSetPhotoToMain(img)} className='main-btn photo_btn'>
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

