import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero  from './components/Hero';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/Header" element={<Header />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
