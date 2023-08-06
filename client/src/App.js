import './App.css';
import './components/search-api-users/APIMain.css'
import './components/sidebar/Sidebar.css'
import './components/header/Header.css'

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import APIMain from './components/search-api-users/APIMain';
import DatabaseMain from './components/database-users/DatabaseMain'
 


import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/api-users" element = {<APIMain/>}/>
          <Route path="/database-users" element = {<DatabaseMain/>}/>
        </Routes>
      <Sidebar/>
    </div>
  );
}

export default App;
