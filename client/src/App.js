import './App.css';
import './components/search-api-users/APIMain.css'
import './components/sidebar/Sidebar.css'
import './components/header/Header.css'
import './components/Table.css'
import './components/info/Info.css';
import './components/database-users/DatabaseMain.css'

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeMain from './components/home/Home';
import APIMain from './components/search-api-users/APIMain';
import DatabaseMain from './components/database-users/DatabaseMain';
import Info from './components/info/Info';

import { Route, Routes } from "react-router-dom";
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/api-users" element={<APIMain />} />
          <Route path="/database-users" element={<DatabaseMain />} />
        </Routes>
        <Sidebar />
        <Info />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
