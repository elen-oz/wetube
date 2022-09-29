import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import SearchPage from "./SearchPage";
import VideoPage from "./VideoPage";
import wetubeData from "./content/data.json";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<MainSection videosData={wetubeData} />} />
          <Route
            path='/search/:searchTerm'
            element={<SearchPage videosData={wetubeData} />}
          />
          <Route
            path='/video/:id'
            element={<VideoPage videosData={wetubeData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
