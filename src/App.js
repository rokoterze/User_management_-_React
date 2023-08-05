import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Sidebar/>
    </div>
  );
}

export default App;
