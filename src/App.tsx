import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/light';
import { GlobalStyles } from './globalStyles';
import darkTheme from './themes/dark';
import Calculator from './components/Calculator';

export type AppTheme = 'dark' | 'light';

const App = () => {
  const [theme, setTheme] = useState<AppTheme>('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Calculator theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
