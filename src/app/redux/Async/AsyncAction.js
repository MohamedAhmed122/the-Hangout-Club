import { ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START } from "./AsyncType"

export const asyncActionStart =() =>({
    type : ASYNC_ACTION_START
})
export const asyncActionFinish =() =>({
    type: ASYNC_ACTION_FINISH
})
export const asyncActionError =  error=>{
    console.log(error)
    return{
        type: ASYNC_ACTION_ERROR,
        payload : error
    }
}

// const error = error=>{
//     console.log(error)
//     return{
//         type: ASYNC_ACTION_ERROR,
//         payload : error
//     }
// }