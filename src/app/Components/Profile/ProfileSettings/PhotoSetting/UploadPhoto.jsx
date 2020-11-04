import React, { useState } from 'react'
import {  Button, Header, Segment } from 'semantic-ui-react'
import PhotoDropzone from './PhotoDropzone'

import './UploadPhoto.css'

export default function UploadPhoto() {
    const [files, setFiles] =useState([])
    return (
        <Segment style={{marginTop: '2rem', marginBottom: '5rem'}}> 
            {/* <div style={{display: 'block'}}>
                <Header 
                floated="left" 
                icon="photo" 
                color='teal' 
                content="Add some photos to your gallery" 
                />
            </div> */}
           
            <div className='photo_settings' >
                <div className='photo_settings_left'>
                    <Header  
                    textAlign='center' 
                    color='teal' 
                    sub 
                    content='Step 1 - Add Photo' 
                    />
                    <PhotoDropzone setFiles={setFiles}/>
                </div>
                <div className='photo_settings_middle'>
                    <Header  
                    textAlign='center' 
                    color='teal' 
                    sub 
                    content='Step 2 - Resize' 
                    />
                </div>
                <div className='photo_settings_right'>
                    <Header  
                    textAlign='center' 
                    color='teal' 
                    sub 
                    content='Step 3 - Preview & upload' 
                    />
                    {/* <Button.Group>
                        <Button loading={loading}  onClick={handleUploadImage} style={{ width: 100 }} positive icon='check' />
                        <Button disabled={loading} onClick={handleCancelCrop} style={{ width: 100 }} icon='close' />
                    </Button.Group> */}
                </div>
            </div>
        </Segment>
     
    )
}
