
import  { useEffect, useState } from 'react'
import {db} from '../firebase/firebase.config'

const UseGetChannelNames= () =>{
    const [channel,setChannel] = useState([])
    useEffect(()=>{
      const unsubscribe =  db.collection('channels').onSnapshot(snapshot => 
          setChannel(
                snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })
    
         )
     ))
     return(()=>{
        unsubscribe()
     })
    
     },[channel])
     return channel
 }

 export default UseGetChannelNames