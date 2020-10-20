import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from  "./eventType";



const initialState = {
    events : []
}

const EventReducer = (state =initialState , {type, payload}) =>{
    switch(type){
        case CREATE_EVENT:
            return{
                ...state,
                events: [...state.events, payload]
            }
        case UPDATE_EVENT:
            return{
                ...state,
                events: [
                    ...state.events.filter((event) => event.id !== payload.id),
                    payload,
                ],
            }
        case DELETE_EVENT:
            return{
                ...state,
                events: [...state.events.filter((event) => event.id !== payload)],
            }
        case FETCH_EVENTS:
            return{
                ...state,
                events: payload
            }
        default:{
            return state;
        }
    }
}



export default EventReducer
