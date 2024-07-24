export const MakeOrderReducer = (state = false, action) => {
    switch(action.type) {
        case 'Myfoodorders' : return action.payload
        default : return state
    }
}

export default MakeOrderReducer;