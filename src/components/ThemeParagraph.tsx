import React from 'react';
import { ThemeContext } from '../context/theme-context';

export default class ThemeParagraph extends React.Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <p
        {...props}
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      />
    );
  }
}
