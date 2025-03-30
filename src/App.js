import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
//Link змінює location
//Ruter підписаний на зміну location
//Коли location змінюється, то Router шукає відповідний Route і виводе з нього елемент

export default App;

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
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
