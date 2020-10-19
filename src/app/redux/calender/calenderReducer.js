const OPEN_CALENDER = 'OPEN_CALENDER'

export const openCalender = () =>({
    type: OPEN_CALENDER
})

const initialState = {
    isOpen : false
}

const calenderReducer = (state = initialState, {type}) =>{
    switch(type){
        case OPEN_CALENDER:
            return{
                ...state,
                isOpen: !state.isOpen
            }
        default: 
            return state;
    }
}
export default calenderReducer