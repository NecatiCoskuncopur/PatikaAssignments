import React from 'react';
import ReactDOM from 'react-dom/client';

import { globalCss } from './stitches.config';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const globalStyles = globalCss({
  '*': {
    m: 0,
    p: 0,
    boxSizing: 'border-box',
    border: 'none',
    listStyle: 'none',
    '&:focus': {
      outline: 'none',
    }
  },
  body: {
    backgroundColor: '$background',
    fontFamily: '$body'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
globalStyles();
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


