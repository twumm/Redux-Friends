import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { combinedReducers } from './reducers'
import Container from './components/Container';
import './App.css';

const store = createStore(
  combinedReducers,
  {},
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
