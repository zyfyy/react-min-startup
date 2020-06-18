import React from 'react';

export const themes = {
  light: {
    foreground: '#666',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#369f8f'
  }
};
export const ThemeContext = React.createContext(themes.light);
