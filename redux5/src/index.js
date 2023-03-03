import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { globalCss } from './stitches.config';


const globalStyles = globalCss({
  '*': {
    border: 'none',
    '&:focus': {
      outline: 0,
    }
  },
  body: {
    m: 0,
    p: 0,
    overflow: 'hidden',
    backgroundColor: '$background',
    color: '$textColor',
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


