import React from 'react';
import Context from './config';

const Conect = Component => {
    return props => (
        <Context.Consumer>
            {({ dispatch, store }) => { return <Component {...store} dispatch={dispatch}/>}}
        </Context.Consumer>
    );
}

export default Conect;
