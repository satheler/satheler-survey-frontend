import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import HomePage from './components/pages/HomePage';
import { GlobalStyle, lightTheme } from './providers/themes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();
