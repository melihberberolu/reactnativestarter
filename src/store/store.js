import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const rootReducers = combineReducers({
    form: formReducer
});

const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
    const store = createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

export default configureStore;
