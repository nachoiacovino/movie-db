import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const logger = createLogger();
    return composeWithDevTools(applyMiddleware(logger, ...middleware));
  }
  return applyMiddleware(...middleware);
};

const persistConfig = { key: 'root', storage };

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    bindMiddleware([sagaMiddleware]),
  );

  store.__PERSISTOR = persistStore(store);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
