import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {asyncActionError, asyncActionFinish, asyncActionStart } from '../redux/Async/AsyncAction'
import {dataFromSnapshot} from '../firebase/FirestoreServices'


 const UseFirestoreCollection =({query, data, deps}) =>{
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(asyncActionStart())
        const unsubscribe = query().onSnapshot(
            snapshot=>{
                const docs = snapshot.docs.map(doc => dataFromSnapshot(doc))
                data(docs);
                dispatch(asyncActionFinish())
            },
            error => dispatch(asyncActionError(error))
        )
        return()=>{
            unsubscribe();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },deps)

  
} 

export default UseFirestoreCollection;