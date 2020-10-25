import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapshot } from "../firebase/FirestoreServices";
import {asyncActionError, asyncActionFinish, asyncActionStart } from '../redux/Async/AsyncAction'



const UseFirestoreDoc =({query, data, deps}) =>{
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(asyncActionStart())
        const unsubscribe = query().onSnapshot(
            snapshot=>{
                
                data(dataFromSnapshot(snapshot));
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
export default UseFirestoreDoc