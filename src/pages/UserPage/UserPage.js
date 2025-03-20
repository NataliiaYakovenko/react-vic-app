import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

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

function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return <div>{theme}</div>;
      }}
    </ThemeContext.Consumer>
  );
}

function Footer() {
  return <div>Footer</div>;
}
