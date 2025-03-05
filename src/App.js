
import './App.css';
import NewsItem from "./components/NewsItem/index.jsx";


function App() {
  const newItem ={
    title: 'Some news',
    body: 'About this news'
  }
  return (
   <NewsItem news={newItem}/>
  );
}

export default App;

