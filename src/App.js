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
      theme: PINK,
    };
  }

  render() {
    const { theme } = this.state;
    const pageClassName = classNames({
      [styles.lightTheme]: theme === LIGHT,
      [styles.darkTheme]: theme === DARK,
      [styles.pinkTheme]: theme === PINK,
    });

    return (
      <ThemeContext.Provider value={theme}>
        <div className={pageClassName}>
          <UserPage />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
