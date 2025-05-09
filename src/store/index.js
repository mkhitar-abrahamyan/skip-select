import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// Stores
import skipsReducer from '~/services/reducers/skips.js';

// Sagas
import skipsSaga from '~/services/sagas/skips.js';

const rootReducer = combineReducers({
  skip: skipsReducer,
});

export function initializeStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({
    trace: true,
  });
  const composeArgs = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...composeArgs)),
  );
  sagaMiddleware.run(skipsSaga);

  return store;
}

export default initializeStore;
