import React, { useState } from 'react'
import {  Button, Header, Segment } from 'semantic-ui-react'
import PhotoCropper from './PhotoCropper'
import PhotoDropzone from './PhotoDropzone'
import { uploadToFirebaseStorage } from '../../../../firebase/firebaseService'
import './UploadPhoto.css'
import cuid from 'cuid'
import { toast } from 'react-toastify'
import { updateUserProfilePhoto } from '../../../../firebase/FirestoreServices'

export default function UploadPhoto() {
    const [files, setFiles] =useState([])
    const [image, setImage] =useState(null)
    const [loading, setLoading] = useState(false)

    const getFileExtension = (filename) => {
        return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    };

    function handleUploadImage() {

        setLoading(true);
        const filename = cuid() + '.' + getFileExtension(files[0].name);
        const uploadTask = uploadToFirebaseStorage(image, filename);
        uploadTask.on('state_changed', snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          
        }, error => {
          toast.error(error.messege);
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            updateUserProfilePhoto(downloadURL, filename).then(() => {
              setLoading(false);
              handleCancelCrop();
              toast.success('Success,Photo has been uploaded')
            }).catch(error => {
              toast.error(error.message);
              setLoading(false);
            });
          })
        })
      }
    
      function handleCancelCrop() {
        setFiles([]);
        setImage(null);
      }
    
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
                    {files.length> 0 &&
                        <PhotoCropper setImage={setImage} imagePreview={files[0].preview}/>
                    }
                    
                </div>
                <div className='photo_settings_right'>
                    <Header  
                    textAlign='center' 
                    color='teal' 
                    sub 
                    content='Step 3 - Preview & upload' 
                    />
                     {files.length > 0 && (
                        <>
                            <div
                                className='img-preview'
                                style={{ minHeight: 200, minWidth: 200, overflow: 'hidden' }}
                            />
                            <Button.Group>
                                <Button 
                                loading={loading} 
                                onClick={()=>handleUploadImage()}  
                                style={{ width: 100 }} 
                                positive 
                                icon='check' 
                                />
                                <Button 
                                loading={loading} 
                                onClick={()=>handleUploadImage()}  
                                style={{ width: 100 }} 
                                icon='close' 
                                />
                            </Button.Group>
                        </>
                    )}
                </div>
            </div>
        </Segment>
     
    )
}
