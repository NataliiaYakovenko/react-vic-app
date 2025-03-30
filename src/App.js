import { useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route,useHistory } from "react-router-dom";


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

function Components() {
  return <div>Components</div>;
}

function Contacts() {
  return <div>Contacts</div>;
}

function NotFound(){
    const history = useHistory()
    useEffect(()=>{
      setTimeout(()=>history.push('/'), 4000
      )
    })

  return <div>404 NotFound</div>
}
