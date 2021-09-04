import React, { FC, MouseEventHandler } from 'react';
import { ThemeContext, themes, ContextState } from '../../context/theme-context';
import ThemeParagraph from '../../components/ThemeParagraph';

interface ThemeToggleButtonProps {
  toggleTheme: MouseEventHandler;
}

const ThemeToggleButton: FC<ThemeToggleButtonProps> = (props: ThemeToggleButtonProps) => {
  const { toggleTheme } = props;
  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
            Toggle Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

const ChildContext = () => {
  return <ThemeParagraph>多个层级child context [非函数式使用，static声明式使用]</ThemeParagraph>;
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
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };
  render() {
    return (
      <div className="context">
        <ThemeContext.Provider value={this.state.theme}>
          <button onClick={this.toggleTheme}>toggle</button>
          <ThemeParagraph>一个层级 我会变</ThemeParagraph>
          <ChildContext></ChildContext>
          <ThemeContext.Consumer>
            {value => `使用Consumer函数式获取Context ${JSON.stringify(value)}`}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        {/* 没有Provider内，使用默认的值 */}
        <section>
          <ThemeParagraph>没有在Provider下，使用默认值，不会变</ThemeParagraph>
        </section>
        <ThemeContext.Provider value={this.state.theme}>
          <p>Multi place Provider works just fine: </p>
          <ThemeToggleButton toggleTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Context;
