import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero  from './components/Hero';
import Product from './components/Product';
import Feature from './components/Feature';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/Header" element={<Header />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Features" element={<Feature />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
