import React, { useReducer } from 'react';
import Context from '../store/config/config';
import localidadeProfileReducer, { initialState } from './localidadeProfile';

const Store = props => {
    const [ addLocalidadeState, addLocalidadeDispatch ] = useReducer(localidadeProfileReducer, initialState);
    const CombinedReducer = {
        store: {...addLocalidadeState},
        dispatch: action => addLocalidadeDispatch(action)
    };
    return ( 
        <Context.Provider value={CombinedReducer}>
            {props.children}
        </Context.Provider>
    )
}
export default Store;
