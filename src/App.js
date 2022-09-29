import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import SearchPage from "./components/SearchPage";
import VideoPage from "./components/VideoPage";
import wetubeData from "./data/data.json";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

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
