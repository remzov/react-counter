import React  from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app/app';
import update from './reducers/update'

const mountPoint = document.getElementById('root');
const initialState = {value: 0};
const store = createStore(update, initialState)
 
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    mountPoint
);