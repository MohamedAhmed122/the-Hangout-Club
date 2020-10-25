import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapshot } from "../firebase/FirestoreServices";
import {asyncActionError, asyncActionFinish, asyncActionStart } from '../redux/Async/AsyncAction'



const UseFirestoreDoc =({query, data, deps, shouldExecute =true}) =>{
    const dispatch = useDispatch();
   
    useEffect(()=>{
        if (!shouldExecute) return;
        dispatch(asyncActionStart())
        const unsubscribe = query().onSnapshot(
            snapshot=>{
                if (!snapshot.exists){
                     dispatch(asyncActionError({code: '',message:''}))
                     return;
                }
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