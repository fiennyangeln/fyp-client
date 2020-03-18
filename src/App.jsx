import { hot } from 'react-hot-loader';
import React, { useState } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';
import StatisticsPage from './views/StatisticsPage';
import theme from './theme';
import ToggleThemeContext from './utils/ToggleTheme';

const App = () => {
  const [themeType, setThemeType] = useState('light');
  return (
    <div className="App">
      <ThemeProvider theme={themeType === 'dark' ? theme.darkTheme : theme.lightTheme}>
        <CssBaseline />
        <ToggleThemeContext.Provider value={setThemeType}>
          <StatisticsPage />
        </ToggleThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default hot(module)(App);
