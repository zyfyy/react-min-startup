import React from 'react';
import {ThemeContext} from '../theme-context';

export default class ThemeButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return <p {...props} style={{backgroundColor: theme.background, color: theme.foreground}} />;
  }
}
ThemeButton.contextType = ThemeContext;