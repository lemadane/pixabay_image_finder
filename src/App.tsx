import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const App: React.FC = () => {
  return (
    <Provider store={ createStore(reducer, applyMiddleware(thunk)) }>
      <div className="App">
      </div>
    </Provider>
  );
};

export default App;
