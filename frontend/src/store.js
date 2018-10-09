import { createStore, applyMiddleware, compose } from 'redux';

// redux-logger is a middleware that lets you log every state change
// import logger from 'redux-logger';

// Our combined reducer
import rootReducer from './reducers';

// Our middleware
import api from './app/middleware/api';

// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ - If redux devtools are installed then activate it
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, 
    composeEnhancers(applyMiddleware(api))
);

// This line allows to peek into store from any part of application, including devTools console
// but this is poluting global variable space and should not be used as programming pattern
// window.store = store;

export default store;