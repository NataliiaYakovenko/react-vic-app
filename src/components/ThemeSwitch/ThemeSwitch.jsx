import CONSTANTS from "../../constants";
import ThemeContext from "../../contexts/ThemeContext";


const { LIGHT, DARK, PINK } = CONSTANTS.THEME;
function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {/*3 step*/}
      {({ theme, setTheme }) => {
        //4 step
        const changeTheme = ({ target: { value } }) => {
          return setTheme(value);
        };
        return (
          <select value={theme} onChange={changeTheme}>
            <option value={LIGHT}>Light</option>
            <option value={DARK}>Dark</option>
            <option value={PINK}>Pink</option>
          </select>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ThemeSwitcher


