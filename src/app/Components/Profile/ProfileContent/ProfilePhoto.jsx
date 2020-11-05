import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {  Icon, Segment } from 'semantic-ui-react'
import Loading from '../../../Common/Loading/Loading'
import { deleteFromFirbaseStorage } from '../../../firebase/firebaseService'
import { deletePhotoFromCollection } from '../../../firebase/FirestoreServices'
import { setPhotoToMain } from '../../../firebase/FirestoreServices'
import './StyleProfilePhoto.css'

export default function ProfilePhoto({loading, photos}) {
    
    const { currentUserProfile } = useSelector(state => state.profile)
    const handleSetPhotoToMain = async photo =>{
        try {
           await setPhotoToMain(photo) 
           window.scrollTo({top:0,behavior: 'smooth'})
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleDeletePhoto = async photo =>{
        try {
            await deleteFromFirbaseStorage(photo.name)
            await deletePhotoFromCollection(photo.id)
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

                                    <button 
                                    disabled={img.url ===currentUserProfile.photoURL } 
                                    onClick={()=>handleDeletePhoto(img)} 
                                    className='photo_btn delete'
                                    >
                                        <Icon  name='trash' 
                                        size='large' style ={{color: 'white',}} />
                                    </button>
                                    <button 
                                    disabled={img.url ===currentUserProfile.photoURL }
                                     onClick={()=>handleSetPhotoToMain(img)} 
                                     className='main-btn photo_btn'
                                     >
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

