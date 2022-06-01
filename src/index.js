import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import reportWebVitals from './reportWebVitals'
import {combineReducers, createStore} from 'redux'
import favoritesCatsReducer from './store/reducers/favoritesCatsReducer'
import {Provider} from 'react-redux'
import './index.css';

let rootReducer = combineReducers({
    favoritesCats: favoritesCatsReducer,
})

export let store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

reportWebVitals();
