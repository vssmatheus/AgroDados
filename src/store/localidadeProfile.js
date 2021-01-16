export const initialState = {
    data: {}
};

export const ADD_LOCALIDADE = '@localidade/ADD_LOCALIDADE'

const localidadeProfileReducer = (state = initialState, action) => {
    switch( action.type ){
        case ADD_LOCALIDADE:
            return{...state, data: action.payload}
        default: return state
    }
}
export const pushLocalidade = localidade => {
    return{ type: ADD_LOCALIDADE, payload: localidade }
}

export default localidadeProfileReducer;