import { createStore, applyMiddleware, compose } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// eslint-disable-next-line no-undef,no-underscore-dangle
const storeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk)),
);

export default store;
