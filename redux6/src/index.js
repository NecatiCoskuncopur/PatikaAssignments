import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { globalCss } from './stitches.config';
import App from './App';

const globalStyles = globalCss({
  '*': {
    border: 'none',
    listStyle: 'none',
    boxSizing: 'border-box',
    '&:focus': {
      outline: 0,
    }
  },
  body: {
    m: 0,
    p: 0,
    fontFamily: '$body',
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
globalStyles();
root.render(

  <Provider store={store}>
    <App />
  </Provider>

);


