import React from 'react';

export type ContextState = {
  theme: {
    background: string;
    foreground: string;
  };
};
export const themes = {
  light: {
    foreground: '#fff',
    background: '#66aaff',
  },
  dark: {
    foreground: '#ffffff',
    background: '#369f8f',
  },
};
export const ThemeContext = React.createContext(themes.light);
ThemeContext.displayName = 'ThemeContext';
