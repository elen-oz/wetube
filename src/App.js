import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainSection from './MainSection'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
