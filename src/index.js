import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './storeContext'

export let Rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
  );
}

Rerender();

store.subscribe(Rerender);

console.log(store);