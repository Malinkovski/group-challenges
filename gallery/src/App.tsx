import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import GalleryList from './components/GalleryList';
import GalleryCreate from './components/GalleryCreate';
import ThemeProviderContext from './context/ThemeContext';

function App() {
  return (
    <ThemeProviderContext>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/feed" element={<GalleryList />} />
            <Route path="/create" element={<GalleryCreate />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProviderContext>
  );
}

export default App;
