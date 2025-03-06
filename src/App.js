
import './App.css';
import Header from './components/Header/index.jsx';



//Реалізувати  header який містить логотип і або фото користувача, якщо він залогінився
//або кнопки login/registration 

function App() {
  const isLogin = true

  return <Header isLogin={isLogin}/>;
  }

export default App;

