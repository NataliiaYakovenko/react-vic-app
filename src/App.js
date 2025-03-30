import {
  Link,
  NavLink,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

const linkStyle = ({ isActive }) =>
  isActive ? { border: "1px solid pink" } : {};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="/" element={<Home />} />
          <Route path="/partnerspage/*" element={<PartnersPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
//Link змінює location
//Ruter підписаний на зміну location
//Коли location змінюється, то Router шукає відповідний Route і виводе з нього елемент

export default App;

function BasePage() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/partnerspage" style={linkStyle}>
              PartnersPage
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function PartnersPage() {
  return (
    <div>
      <h2>PartnersPage</h2>
      <nav>
        <ol>
          <li>
            <NavLink to="/partnerspage/partner1" style={linkStyle}>
              Partner1
            </NavLink>
          </li>
          <br/>
          <li>
            <NavLink to="/partnerspage/partner2" style={linkStyle}>
              Partner2
            </NavLink>
          </li>
        </ol>
      </nav>
      <Routes>
      <Route path='partner1' element={<div>Partner1</div>}/>
      <Route path='partner2' element={<div>Partner2</div>}/>

      </Routes>
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => navigate("/"), 4000);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div>
      404 NotFound
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
