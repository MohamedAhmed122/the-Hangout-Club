import { 
    CREATE_EVENT, 
    UPDATE_EVENT,
     DELETE_EVENT,
    FETCH_EVENTS,
    GET_EVENT_COMMENT 
} from  "./eventType";

import fetchSampleData from '../../API/delayAPI'
import {asyncActionError, asyncActionFinish, asyncActionStart } from '../Async/AsyncAction'


export const loadEvents = () =>{
    return(async (dispatch) =>{
        dispatch(asyncActionStart())
        try {
            const event = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: event});
            dispatch(asyncActionFinish())
        } catch (error) {
            dispatch(asyncActionError(error))
        }
    })
}
export const listenToEvents = event =>({
    type: FETCH_EVENTS,
    payload: event
}) 

export const createEvent =(event)=>({
    type: CREATE_EVENT,
    payload: event
})

export const updateEvent =(event) =>({
    type: UPDATE_EVENT,
    payload: event
})

export const deleteEvent = (event) =>({
    type: DELETE_EVENT,
    payload: event
})

export const getEventComment = comment =>({
    type: GET_EVENT_COMMENT,
    payload: comment
}) 
