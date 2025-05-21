import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero  from './components/Hero';
import Product from './components/Product';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import AboutUs from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/Header" element={<Header />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Features" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
