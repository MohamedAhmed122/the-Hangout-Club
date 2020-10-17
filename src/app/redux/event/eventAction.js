import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from  "./eventType";


export const createEvent =(event)=>({
    type: CREATE_EVENT,
    payload: event
})

export const updateEvent =(event) =>({
    type: UPDATE_EVENT,
    payload: event
})
export const DeleteEvent = (event) =>({
    type: DELETE_EVENT,
    payload: event
})