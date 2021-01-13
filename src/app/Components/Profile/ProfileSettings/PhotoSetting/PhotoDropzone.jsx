import React,  {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Header, Icon } from 'semantic-ui-react';

export default function PhotoDropzone({setFiles}) {
    

  const onDrop = useCallback(acceptedFiles => {
      
      setFiles(acceptedFiles.map(file =>Object.assign(file, {
          preview: URL.createObjectURL(file)
      })))
    }, [setFiles]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div 
      style={isDragActive ? {...dropZoneStyle,...dropZoneActive} : dropZoneStyle} 
      {...getRootProps()
      }>
        <input {...getInputProps()} />
        <Icon name='download' size="huge" />
        <Header sub content="Drop Image Here" />
      </div>
    )
}

const dropZoneStyle = {
  border: "dashed 3px #eee",
  borderRadius: "5%",
  padding: '30px 45px',
  textAlign: "center",
  marginBottom: 20,
  marginTop: 10,
};
const dropZoneActive = {
  border: "dashed 4px green",
};