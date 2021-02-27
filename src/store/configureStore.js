import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        rootReducer,
        process.env.NODE_ENV === "production" || !(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ?
            applyMiddleware(thunk) :
            compose(
                applyMiddleware(thunk), // use logger
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
    );
}