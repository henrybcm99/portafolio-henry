import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Proyects from './pages/Proyects';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="proyects" element={<Proyects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
