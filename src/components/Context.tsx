import React, { FC, MouseEventHandler } from 'react';
import { ThemeContext, themes, ContextState } from '../theme-context';
import ThemeButton from './ThemeButton';

interface ThemeToggleButtonProps {
  toggleTheme: MouseEventHandler
}

const ThemeToggleButton : FC<ThemeToggleButtonProps> = (props) => {
  const {toggleTheme} = props;
  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            Toggle Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

const ChildContext = () => {
  return (
    <ThemeButton>
      child context
    </ThemeButton>
  )
};

class Context extends React.Component<{}, ContextState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme.bind(this);
  }

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };
  render() {
    return (
      <div className="context">
        <ThemeContext.Provider value={this.state.theme}>
          <button onClick={this.toggleTheme}>toggle</button>
          <ThemeButton>我会变</ThemeButton>
          <ChildContext></ChildContext>
        </ThemeContext.Provider>
        {/* 没有Provider内，使用默认的值 */}
        <section>
          <ThemeButton>我不会-变</ThemeButton>
        </section>

        <ThemeContext.Provider value={this.state.theme}>
          <ThemeToggleButton toggleTheme={this.toggleTheme}/>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Context;
