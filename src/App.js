import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './App.css';
import reducer from './reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const App = ()=> {
    // @ts-ignore
    const store = createStore(reducer, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Search />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
}

export default App;
