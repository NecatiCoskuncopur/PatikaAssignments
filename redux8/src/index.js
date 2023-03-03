import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { colors } from './theme';
import { store } from './redux/store';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none; 
    list-style: none;
    &:focus {
      outline: none
    }
  };
  body {
    background-color: ${colors.bg.frenchPass};
    font-family: 'Quicksand', sans-serif;
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
