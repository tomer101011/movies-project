import React from 'react';

import './App.css';

import NavBar from './components/NavBar.js';
import MovieSwiper from './components/MovieSwiper.js';
import HomeSlider from './components/HomeSlider.js';

function App() {

  return (
    <div className="App">

      <NavBar />
      <HomeSlider />
      <MovieSwiper />

    </div>
  );

}

export default App;
