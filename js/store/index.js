import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducer';
import thunk from 'redux-thunk';
import {middleware} from '../navigator/AppNavigators';

// logger middleware
const logger = store => next => action => {
  if (typeof action === 'function') {
      console.log('dispatching a function');
  } else {
      console.log('dispatching ', action);
  }
  const result = next(action);
  console.log('nextState ', store.getState());
  return result;
};

const middlewares = [
  middleware,
  logger,
  thunk,
];

export default createStore(reducers, applyMiddleware(...middlewares));