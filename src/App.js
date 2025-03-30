import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Counter from "./components/Counter/index";
import StopWatch from "./components/StopWatch/StopWatch";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/components">
          <Components />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

//components/counter
//components/stopwatch
function Components() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <ol>
        <li>
          <Link to={`${url}/counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`${url}/stopwatch`}>StopWatch</Link>
        </li>

        <Switch>
          <Route path={`${path}/counter`}>
            <Counter />
          </Route>

          <Route path={`${path}/stopwatch`}>
            <StopWatch />
          </Route>

          <Route path={`${path}/*`}>
            <NotFound />
          </Route>
        </Switch>
      </ol>
    </div>
  );
}

function Contacts() {
  return <div>Contacts</div>;
}

function NotFound() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => history.push("/"), 4000);
  });

  return <div>404 NotFound</div>;
}
