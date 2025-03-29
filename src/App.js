import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;

function Child() {
  return <ChildChild />;
}

function ChildChild() {
const theme = useContext(ThemeContext)

  return <div>{theme}</div>;
}
