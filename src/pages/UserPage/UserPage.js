import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import CONSTANTS from "../../constants";

function UserPage() {
  return (
    <div>
      <Header />
      <main>Main Context</main>
      <Footer />
    </div>
  );
}

export default UserPage;

//Перенести в окремі компоненти
function Header() {
  return (
    <header>
      <span>Header</span>
      <ThemeSwitcher />
    </header>
  );
}

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;
function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
              {/*3 step*/}
    {({theme, setTheme}) => {

       //4 step
      const changeTheme =({target:{value}})=>{
           return setTheme(value)
      }
        return <select value={theme} onChange={changeTheme}>
          <option value={LIGHT}>Light</option>
          <option value={DARK}>Dark</option>
          <option value={PINK}>Pink</option>
          </select>
      }}
    </ThemeContext.Consumer>
  );
}

function Footer() {
  return <div>Footer</div>;
}
