import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import wetubeData from "./content/data.json";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        {/* <MainSection /> */}
        <MainSection videosData={wetubeData} />
      </div>
    </div>
  );
}

export default App;
