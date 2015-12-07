'use strict'
import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from './utils/devTools';

import Example from './components/example/example';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {    
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Example />
                </Provider>
                {renderDevTools(store)}
            </div>
        );
    }
}



