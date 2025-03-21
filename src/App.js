/*
- App
  - UserPage
    - Header
      - ThemeSwitcher
    - Main
    - Footer
*/

import React, { Component } from "react";
import CONSTANTS from "./constants";
import ThemeContext from "./contexts/ThemeContext";
import UserPage from "./pages/UserPage/UserPage";
import styles from "./App.module.sass";
import classNames from "classnames";

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: DARK,
    };
  }
  //1 step
  setTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  componentDidMount() {
    const storageTheme = window.localStorage.getItem("theme");

    if (storageTheme) {
      this.setState({ theme: storageTheme });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { theme } = this.state;

    if (theme !== prevState.theme) {
      window.localStorage.setItem("theme", theme);
    }
  }

  render() {
    const { theme } = this.state;
    const pageClassName = classNames({
      [styles.lightTheme]: theme === LIGHT,
      [styles.darkTheme]: theme === DARK,
      [styles.pinkTheme]: theme === PINK,
    });

    return (
      //2
      <ThemeContext.Provider value={{ theme: theme, setTheme: this.setTheme }}>
        <div className={pageClassName}>
          <UserPage />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
