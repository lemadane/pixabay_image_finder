import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { Search } from './components';

const App: React.FC = () => {
  return (
    <Provider store={ createStore(reducer, applyMiddleware(thunk)) }>
      <div className="App">
        <Search />
      </div>
    </Provider>
  );
};

export default App;
