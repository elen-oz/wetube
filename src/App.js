import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import wetubeData from "./content/data.json";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        {/* <MainSection /> */}
        <Routes>
          <Route path='/' element={<MainSection videosData={wetubeData} />} />
          <Route
            path='/search'
            element={<p>Nothing found, please try again</p>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
