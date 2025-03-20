import { createContext } from "react";

const DataContext = createContext();

function App() {
  const data = "data007";

  return (
    <DataContext.Provider value={data}>
      <Child data={data} />
    </DataContext.Provider>
  );
}

export default App;

function Child() {
  return (
    <div>
      <ChildChild />
    </div>
  );
}

function ChildChild() {
  return (
    <DataContext.Consumer>
      {(data) => {
        return <div>I am ChildChild: {data}</div>;
      }}
    </DataContext.Consumer>
  );
}
