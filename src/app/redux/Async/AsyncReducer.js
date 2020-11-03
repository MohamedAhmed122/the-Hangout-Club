import { APP_LOADED, ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START } from "./AsyncType"


const initialState = {
    loading: false,
    error: null,
    initialized: false
}

const asyncReducer = (state = initialState, {type , payload}) =>{
    switch(type) {
        case ASYNC_ACTION_START:
            return{
                ...state,
                loading: true,
                error: null
            }
        case ASYNC_ACTION_FINISH:
            return{
                ...state,
                loading: false,
            }
        case ASYNC_ACTION_ERROR:
            return{
                ...state,
                loading:false,
                error: payload
            }

        case APP_LOADED:
            return{
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export default  asyncReducer;