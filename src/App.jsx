import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import { createMuiTheme, CssBaseline } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';
import StatisticsPage from './views/StatisticsPage';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
const App = () => (
  <div className="App">
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <StatisticsPage />
    </ThemeProvider>
  </div>
);

export default hot(module)(App);
