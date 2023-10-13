import React from 'react';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
