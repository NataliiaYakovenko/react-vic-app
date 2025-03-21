import styles from "./Footer.module.sass";
import classNames from "classnames";
import ThemeContext from "../../contexts/ThemeContext";
import CONSTANTS from "../../constants";


const { LIGHT, DARK, PINK } = CONSTANTS.THEME;
function Footer() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const footerClassName = classNames({
          [styles.lightTheme]: theme === LIGHT,
          [styles.darkTheme]: theme === DARK,
          [styles.pinkTheme]: theme === PINK,
        });

        return <footer className={footerClassName}>Footer</footer>;
      }}
    </ThemeContext.Consumer>
  );
}

export default Footer