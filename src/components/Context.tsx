import React from 'react';
import {ThemeContext, themes} from '../theme-context';
import ThemeButton from './ThemeButton';

function ThemeToggleButton() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => {
        return (
          <button
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}
          >
            Toggle Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}
class Context extends React.Component {
  constructor(props) {
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
    const toggleTheme = this.toggleTheme;
    return (
      <div className="context">
        <ThemeContext.Provider value={this.state.theme}>
          <button onClick={this.toggleTheme}>toggle</button>
          <ThemeButton>我会变</ThemeButton>
        </ThemeContext.Provider>

        {/*尽量不这么写，防止重新渲染*/}
        <ThemeContext.Provider value={{toggleTheme, ...this.state}}>
          <ThemeToggleButton></ThemeToggleButton>
        </ThemeContext.Provider>

        {/*尽量这么写，防止重新渲染*/}
        <ThemeContext.Provider value={this.state}>
          <ThemeToggleButton></ThemeToggleButton>
        </ThemeContext.Provider>

        <section>
          <ThemeButton>我不会变</ThemeButton>
        </section>
      </div>
    );
  }
}

export default Context;
